"""migration serpapi_api_key

Revision ID: de95f5c77138
Revises: 23db93619b9d
Create Date: 2024-01-21 12:09:04.651394

"""
from json import dumps, loads

import sqlalchemy as sa
from alembic import context, op

# revision identifiers, used by Alembic.
revision = 'de95f5c77138'
down_revision = '23db93619b9d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    """
    1. select all tool_providers
    2. insert api_key to tool_provider_configs

    tool_providers
    - id
    - tenant_id
    - tool_name
    - encrypted_credentials
        {"api_key": "$KEY"}
    - created_at
    - updated_at

    tool_builtin_providers
    - id <- tool_providers.id
    - tenant_id <- tool_providers.tenant_id
    - user_id <- tenant_account_joins.account_id (tenant_account_joins.tenant_id = tool_providers.tenant_id and tenant_account_joins.role = 'owner')
    - encrypted_credentials <- tool_providers.encrypted_credentials
        {"serpapi_api_key": "$KEY"}
    - created_at <- tool_providers.created_at
    - updated_at <- tool_providers.updated_at
    """

    # in alembic's offline mode (with --sql option), skip data operations and output comments describing the migration to raw sql
    if context.is_offline_mode():
        print(f"    /*{upgrade.__doc__}*/\n")
        return

    # select all tool_providers
    tool_providers = op.get_bind().execute(
        sa.text(
            "SELECT * FROM tool_providers WHERE tool_name = 'serpapi'"
        )
    ).fetchall()

    # insert api_key to tool_provider_configs
    for tool_provider in tool_providers:
        id = tool_provider['id']
        tenant_id = tool_provider['tenant_id']
        encrypted_credentials = tool_provider['encrypted_credentials']

        try:
            credentials = loads(encrypted_credentials)
            api_key = credentials['api_key']
            credentials['serpapi_api_key'] = api_key
            credentials.pop('api_key')
            encrypted_credentials = dumps(credentials)
        except Exception as e:
            print(e)
            continue

        # get user_id
        user_id = op.get_bind().execute(
            sa.text(
                "SELECT account_id FROM tenant_account_joins WHERE tenant_id = :tenant_id AND role = 'owner'"
            ),
            tenant_id=tenant_id
        ).fetchone()['account_id']

        created_at = tool_provider['created_at']
        updated_at = tool_provider['updated_at']

        # insert to tool_builtin_providers
        # check if exists
        exists = op.get_bind().execute(
            sa.text(
                "SELECT * FROM tool_builtin_providers WHERE tenant_id = :tenant_id AND provider = 'google'"
            ),
            tenant_id=tenant_id
        ).fetchone()
        if exists:
            continue

        op.get_bind().execute(
            sa.text(
                "INSERT INTO tool_builtin_providers (id, tenant_id, user_id, provider, encrypted_credentials, created_at, updated_at) VALUES (:id, :tenant_id, :user_id, :provider, :encrypted_credentials, :created_at, :updated_at)"
            ),
            id=id,
            tenant_id=tenant_id,
            user_id=user_id,
            provider='google',            
            encrypted_credentials=encrypted_credentials,
            created_at=created_at,
            updated_at=updated_at
        )
        
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
