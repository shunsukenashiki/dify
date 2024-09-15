"""add-embedding-cache-created_at_index

Revision ID: 6e957a32015b
Revises: fecff1c3da27
Create Date: 2024-07-19 17:21:34.414705

"""
from alembic import op

import models as models

# revision identifiers, used by Alembic.
revision = '6e957a32015b'
down_revision = 'fecff1c3da27'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('embeddings', schema=None) as batch_op:
        batch_op.create_index('created_at_idx', ['created_at'], unique=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('embeddings', schema=None) as batch_op:
        batch_op.drop_index('created_at_idx')

    # ### end Alembic commands ###
