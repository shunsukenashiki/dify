## 主な機能

### 1. **ワークフロー**
視覚的に構築できるAIワークフローの提供。視覚キャンバス上でのモデルのテスト・調整、効率的な開発のサポート。

### 2. **総合的なモデルサポート**
GPTやMistral、Llama3など、数百のプロプライエタリ/オープンソースモデルとのシームレスな統合の提供。

### 3. **プロンプトIDE**
プロンプト作成、モデルパフォーマンスの比較、音声合成機能の組み込み。

### 4. **RAGパイプライン**
PDFやPPTなどの一般的なフォーマットからのテキスト抽出、包括的なRAG機能の提供。

### 5. **エージェント機能**
LLM Function CallingやReActに基づくAIエージェントの構築。Google検索やWolframAlphaなどの外部ツールとの統合。

### 6. **LLMOps**
アプリケーションのログやパフォーマンスの監視、継続的な改善のサポート。

### 7. **Backend-as-a-Service**
すべての機能をAPI経由で提供し、Difyを他のビジネスロジックに統合。

---

## 作成機能: URLからの記事コンテンツ作成 & チャット機能

### **URLからのコンテンツ生成**
指定されたURLから記事コンテンツを自動的に読み込み、テキストデータを取得してアプリケーションに組み込む機能。この機能により、リアルタイムでの情報活用、最新の記事や情報をベースにしたアプリケーションの構築が可能。

- **使い方**: `URL`を入力するだけで、そのURLに基づいた記事コンテンツの自動生成、アプリケーションへの反映。RAGパイプラインを使用して、取得した情報のインデックス化、自由な検索・参照機能の提供。

### **チャット機能**
生成されたコンテンツを活用したLLMベースのチャット機能の提供。ユーザーが自由に質問し、対話形式でコンテンツをナビゲートできるインターフェイス。

- **使い方**: 取得した記事コンテンツに基づき、チャットボットが質問に対応、コンテンツの詳細をナビゲート。LLMモデルを使用したコンテキスト対応型の回答生成。

---

## Difyの使用方法

### クラウド版
Dify Cloudサービスを利用し、セットアップ不要での使用が可能。

- [Dify Cloud](https://dify.ai)

### セルフホスティング
ローカル環境でのDifyの簡単な実行。[こちら](https://docs.dify.ai/getting-started/install-self-hosted)で詳しい手順の確認が可能。

## ライセンス
このプロジェクトは[Dify Open Source License](LICENSE)の下で提供。



### バックエンド
Dify のバックエンドは[Flask](https://flask.palletsprojects.com/en/3.0.x/)を使って書かれています。ORM には[SQLAlchemy](https://www.sqlalchemy.org/)を、タスクキューには[Celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html)を使っています。認証ロジックは Flask-login 経由で行われます。

```
[api/]
├── constants             // コードベース全体で使用される定数設定
├── controllers           // APIルート定義とリクエスト処理ロジック
├── core                  // アプリケーションの中核的な管理、モデル統合、およびツール
├── docker                // Dockerおよびコンテナ関連の設定
├── events                // イベントのハンドリングと処理
├── extensions            // 第三者のフレームワーク/プラットフォームとの拡張
├── fields                // シリアライゼーション/マーシャリング用のフィールド定義
├── libs                  // 再利用可能なライブラリとヘルパー
├── migrations            // データベースマイグレーションスクリプト
├── models                // データベースモデルとスキーマ定義
├── services              // ビジネスロジックの定義
├── storage               // 秘密鍵の保存
├── tasks                 // 非同期タスクとバックグラウンドジョブの処理
└── tests                 // テスト関連のファイル
```

### フロントエンド

Typescriptベースの[Next.js](https://nextjs.org/)テンプレートを使ってブートストラップされ、[Tailwind CSS](https://tailwindcss.com/)を使ってスタイリングされています。

[web/]
├── app                   // レイアウト、ページ、コンポーネント
│   ├── (commonLayout)    // アプリ全体で共通のレイアウト
│   ├── (shareLayout)     // トークン特有のセッションで共有されるレイアウト
│   ├── activate          // アクティベートページ
│   ├── components        // ページやレイアウトで共有されるコンポーネント
│   ├── install           // インストールページ
│   ├── signin            // サインインページ
│   └── styles            // グローバルに共有されるスタイル
├── assets                // 静的アセット
├── bin                   // ビルドステップで実行されるスクリプト
├── config                // 調整可能な設定とオプション
├── context               // アプリの異なる部分で使用される共有コンテキスト
├── dictionaries          // 言語別の翻訳ファイル
├── docker                // コンテナ設定
├── hooks                 // 再利用可能なフック
├── i18n                  // 国際化設定
├── models                // データモデルとAPIレスポンスの形状を記述
├── public                // ファビコンなどのメタアセット
├── service               // APIアクションの形状を指定
├── test
├── types                 // 関数のパラメータと戻り値の記述
└── utils                 // 共有ユーティリティ関数
```

### インフラ
Dockerでコンテナ化して動かしてます。
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js v18.x (LTS)](http://nodejs.org)
- [npm](https://www.npmjs.com/) version 8.x.x or [Yarn](https://yarnpkg.com/)