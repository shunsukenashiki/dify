const translation = {
  api: {
    success: '成功',
    actionSuccess: 'アクションが成功しました',
    saved: '保存済み',
    create: '作成済み',
    remove: '削除済み',
  },
  operation: {
    create: '作成',
    confirm: '確認',
    cancel: 'キャンセル',
    clear: 'クリア',
    save: '保存',
    saveAndEnable: '保存 & 有効に',
    edit: '編集',
    add: '追加',
    added: '追加済み',
    refresh: 'リフレッシュ',
    reset: 'リセット',
    search: '検索',
    change: '変更',
    remove: '削除',
    send: '送信',
    copy: 'コピー',
    lineBreak: '改行',
    sure: '確認済み',
    download: 'ダウンロード',
    delete: '削除',
    settings: '設定',
    setup: 'セットアップ',
    getForFree: '無料で入手',
    reload: '再読み込み',
    ok: 'OK',
    log: 'ログ',
    learnMore: '詳細を見る',
    params: 'パラメータ',
    duplicate: '重複',
    rename: '名前の変更',
  },
  errorMsg: {
    fieldRequired: '{{field}}は必要です',
    urlError: 'URL は http:// または https:// で始まる必要があります',
  },
  placeholder: {
    input: '入力してください',
    select: '選択してください',
  },
  voice: {
    language: {
      zhHans: '中国語',
      zhHant: '繁体字中国語',
      enUS: '英語',
      deDE: 'ドイツ語',
      frFR: 'フランス語',
      esES: 'スペイン語',
      itIT: 'イタリア語',
      thTH: 'タイ語',
      idID: 'インドネシア語',
      jaJP: '日本語',
      koKR: '韓国語',
      ptBR: 'ポルトガル語',
      ruRU: 'ロシア語',
      ukUA: 'ウクライナ語',
      viVN: 'ベトナム語',
      plPL: 'ポーランド語',
      roRO: 'ルーマニア語',
      hiIN: 'ヒンディー語',
      trTR: 'トルコ語',
      faIR: 'ペルシア語',
    },
  },
  unit: {
    char: '文字',
  },
  actionMsg: {
    noModification: '現在は変更されていません。',
    modifiedSuccessfully: '変更が正常に行われました',
    modifiedUnsuccessfully: '変更が失敗しました',
    copySuccessfully: 'コピーが正常に行われました',
    paySucceeded: '支払いが成功しました',
    payCancelled: '支払いがキャンセルされました',
    generatedSuccessfully: '生成が成功しました',
    generatedUnsuccessfully: '生成が失敗しました',
  },
  model: {
    params: {
      temperature: '温度',
      temperatureTip:
        'ランダム性を制御します：温度を下げると、よりランダムな完成品が得られます。温度がゼロに近づくにつれて、モデルは決定的で反復的になります。',
      top_p: '上位P',
      top_pTip:
        'ニュークリアスサンプリングによる多様性の制御：0.5は、すべての尤度加重オプションの半分が考慮されることを意味します。',
      presence_penalty: '存在ペナルティ',
      presence_penaltyTip:
        'これまでのテキストにトークンが表示されるかどうかに基づいて、新しいトークンにいくらペナルティを科すかを制御します。\nモデルが新しいトピックについて話す可能性が高まります。',
      frequency_penalty: '頻度ペナルティ',
      frequency_penaltyTip:
        'これまでのテキスト内のトークンの既存の頻度に基づいて、新しいトークンにどれだけペナルティを科すかを制御します。\nモデルが同じ行を文字通りに繰り返す可能性が低くなります。',
      max_tokens: '最大トークン',
      max_tokensTip:
        '返信の最大長をトークン単位で制限するために使用されます。\n大きな値はプロンプトの単語、チャットログ、およびナレッジのために残されたスペースを制限する可能性があります。\nそれを2/3以下に設定することをお勧めします。\ngpt-4-1106-preview、gpt-4-vision-previewの最大トークン（入力128k出力4k）以下に設定することをお勧めします。',
      maxTokenSettingTip: '最大トークン設定が高いため、プロンプト、クエリ、およびデータのスペースが制限される可能性があります。現在のモデルの最大トークンの80%以下に設定してください。',
      setToCurrentModelMaxTokenTip: '最大トークンが現在のモデルの最大トークンの80%に更新されました {{maxToken}}.',
      stop_sequences: '停止シーケンス',
      stop_sequencesTip: 'APIが進行中のトークンの生成を停止する最大4つのシーケンス。返されたテキストには停止シーケンスは含まれません。',
      stop_sequencesPlaceholder: 'シーケンスを入力してタブキーを押してください',
    },
    tone: {
      Creative: 'クリエイティブ',
      Balanced: 'バランス',
      Precise: '正確',
      Custom: 'カスタム',
    },
    addMoreModel: '設定画面から他のモデルを追加してください',
  },
  menus: {
    status: 'ベータ版',
    explore: '探索',
    apps: 'スタジオ',
    plugins: 'プラグイン',
    pluginsTips: 'サードパーティのプラグインを統合するか、ChatGPT互換のAIプラグインを作成します。',
    datasets: 'ナレッジ',
    datasetsTips: '近日公開：独自のテキストデータをインポートするか、Webhookを介してリアルタイムにデータを記述してLLMコンテキストを強化します。',
    newApp: '新しいアプリ',
    newDataset: 'ナレッジの作成',
    tools: 'ツール',
  },
  userProfile: {
    settings: '設定',
    emailSupport: 'サポート',
    workspace: 'ワークスペース',
    createWorkspace: 'ワークスペースを作成',
    helpCenter: 'ヘルプ',
    communityFeedback: 'フィードバック',
    roadmap: 'ロードマップ',
    community: 'コミュニティ',
    about: 'Difyについて',
    logout: 'ログアウト',
  },
  settings: {
    accountGroup: 'アカウント',
    workplaceGroup: 'ワークスペース',
    account: 'マイアカウント',
    members: 'メンバー',
    billing: '請求',
    integrations: '統合',
    language: '言語',
    provider: 'モデルプロバイダー',
    dataSource: 'データソース',
    plugin: 'プラグイン',
    apiBasedExtension: 'API拡張',
  },
  account: {
    avatar: 'アバター',
    name: '名前',
    email: 'メール',
    password: 'パスワード',
    passwordTip: '一時的なログインコードを使用したくない場合は、永続的なパスワードを設定できます。',
    setPassword: 'パスワードを設定',
    resetPassword: 'パスワードをリセット',
    currentPassword: '現在のパスワード',
    newPassword: '新しいパスワード',
    confirmPassword: 'パスワードを確認',
    notEqual: '2つのパスワードが異なります。',
    langGeniusAccount: 'Difyアカウント',
    langGeniusAccountTip: 'Difyアカウントと関連するユーザーデータ。',
    editName: '名前を編集',
    showAppLength: '{{length}}アプリを表示',
    delete: 'アカウントを削除',
    deleteTip: 'アカウントを削除すると、すべてのデータが完全に消去され、復元できなくなります。',
    deleteConfirmTip: '確認のため、登録したメールから次の内容をに送信してください ',
  },
  members: {
    team: 'チーム',
    invite: '招待',
    name: '名前',
    lastActive: '最終アクティブ',
    role: 'ロール',
    pending: '保留中...',
    owner: 'オーナー',
    admin: '管理者',
    adminTip: 'アプリの構築およびチーム設定の管理ができます',
    normal: '通常',
    normalTip: 'アプリの使用のみが可能で、アプリの構築はできません',
    builder: 'ビルダー',
    builderTip: '独自のアプリを作成・編集できる',
    editor: 'エディター',
    editorTip: 'アプリの構築ができますが、チーム設定の管理はできません',
    datasetOperator: 'ナレッジ管理員',
    datasetOperatorTip: 'ナレッジベースのみを管理できる',
    inviteTeamMember: 'チームメンバーを招待する',
    inviteTeamMemberTip: '彼らはサインイン後、直接あなた様のチームデータにアクセスできます。',
    email: 'メール',
    emailInvalid: '無効なメール形式',
    emailPlaceholder: 'メールを入力してください',
    sendInvite: '招待を送る',
    invitedAsRole: '{{role}}ユーザーとして招待されました',
    invitationSent: '招待が送信されました',
    invitationSentTip: '招待が送信され、彼らはDifyにサインインしてあなた様のチームデータにアクセスできます。',
    invitationLink: '招待リンク',
    failedInvitationEmails: '以下のユーザーは正常に招待されませんでした',
    ok: 'OK',
    removeFromTeam: 'チームから削除',
    removeFromTeamTip: 'チームへのアクセスが削除されます',
    setAdmin: '管理者に設定',
    setMember: '通常のメンバーに設定',
    setBuilder: 'ビルダーに設定',
    setEditor: 'エディターに設定',
    disInvite: '招待をキャンセル',
    deleteMember: 'メンバーを削除',
    you: '(あなた様)',
  },
  integrations: {
    connected: '接続済み',
    google: 'Google',
    googleAccount: 'Googleアカウントでログイン',
    github: 'GitHub',
    githubAccount: 'GitHubアカウントでログイン',
    connect: '接続',
  },
  language: {
    displayLanguage: '表示言語',
    timezone: 'タイムゾーン',
  },
  provider: {
    apiKey: 'APIキー',
    enterYourKey: 'ここにAPIキーを入力してください',
    invalidKey: '無効なOpenAI APIキー',
    validatedError: '検証に失敗しました：',
    validating: 'キーの検証中...',
    saveFailed: 'APIキーの保存に失敗しました',
    apiKeyExceedBill: 'このAPI KEYには使用可能なクォータがありません。詳細は',
    addKey: 'キーを追加',
    comingSoon: '近日公開',
    editKey: '編集',
    invalidApiKey: '無効なAPIキー',
    azure: {
      apiBase: 'APIベース',
      apiBasePlaceholder: 'Azure OpenAIエンドポイントのAPIベースURL。',
      apiKey: 'APIキー',
      apiKeyPlaceholder: 'ここにAPIキーを入力してください',
      helpTip: 'Azure OpenAIサービスを学ぶ',
    },
    openaiHosted: {
      openaiHosted: 'ホステッドOpenAI',
      onTrial: 'トライアル中',
      exhausted: 'クォータが使い果たされました',
      desc: 'Difyが提供するOpenAIホスティングサービスを使用すると、GPT-3.5などのモデルを使用できます。トライアルクォータが使い果たされる前に、他のモデルプロバイダを設定する必要があります。',
      callTimes: '通話回数',
      usedUp: 'トライアルクォータが使い果たされました。独自のモデルプロバイダを追加してください。',
      useYourModel: '現在、独自のモデルプロバイダを使用しています。',
      close: '閉じる',
    },
    anthropicHosted: {
      anthropicHosted: 'アンソピッククロード',
      onTrial: 'トライアル中',
      exhausted: 'クォータが使い果たされました',
      desc: '高度なダイアログやクリエイティブなコンテンツ生成から詳細な指示まで、幅広いタスクに優れたパワフルなモデルです。',
      callTimes: '通話回数',
      usedUp: 'トライアルクォータが使い果たされました。独自のモデルプロバイダを追加してください。',
      useYourModel: '現在、独自のモデルプロバイダを使用しています。',
      close: '閉じる',
    },
    anthropic: {
      using: '埋め込み機能は使用中です',
      enableTip: 'Anthropicモデルを有効にするには、まずOpenAIまたはAzure OpenAIサービスにバインドする必要があります。',
      notEnabled: '有効にされていません',
      keyFrom: 'AnthropicからAPIキーを取得してください',
    },
    encrypted: {
      front: 'API KEYは',
      back: '技術を使用して暗号化および保存されます。',
    },
  },
  modelProvider: {
    notConfigured: 'システムモデルがまだ完全に設定されておらず、一部の機能が利用できない場合があります。',
    systemModelSettings: 'システムモデル設定',
    systemModelSettingsLink: 'システムモデルの設定が必要な理由は何ですか？',
    selectModel: 'モデルを選択',
    setupModelFirst: 'まずモデルをセットアップしてください',
    systemReasoningModel: {
      key: 'システム推論モデル',
      tip: 'アプリの作成に使用されるデフォルトの推論モデルを設定します。また、対話名の生成や次の質問の提案などの機能もデフォルトの推論モデルを使用します。',
    },
    embeddingModel: {
      key: '埋め込みモデル',
      tip: 'ナレッジのドキュメント埋め込み処理のデフォルトモデルを設定します。ナレッジの取得とインポートの両方に、この埋め込みモデルをベクトル化処理に使用します。切り替えると、インポートされたナレッジと質問の間のベクトル次元が一致せず、取得に失敗します。取得の失敗を避けるためには、このモデルを任意に切り替えないでください。',
      required: '埋め込みモデルが必要です',
    },
    speechToTextModel: {
      key: '音声-to-テキストモデル',
      tip: '会話での音声-to-テキスト入力に使用するデフォルトモデルを設定します。',
    },
    ttsModel: {
      key: 'テキスト-to-音声モデル',
      tip: '会話でのテキスト-to-音声入力に使用するデフォルトモデルを設定します。',
    },
    rerankModel: {
      key: 'Rerankモデル',
      tip: 'Rerankモデルは、ユーザークエリとの意味的一致に基づいて候補文書リストを再配置し、意味的ランキングの結果を向上させます。',
    },
    apiKey: 'API-キー',
    quota: 'クォータ',
    searchModel: '検索モデル',
    noModelFound: '{{model}}に対するモデルが見つかりません',
    models: 'モデル',
    showMoreModelProvider: 'より多くのモデルプロバイダを表示',
    selector: {
      tip: 'このモデルは削除されました。別のモデルを追加するか、別のモデルを選択してください。',
      emptyTip: '利用可能なモデルはありません',
      emptySetting: '設定に移動して構成してください',
      rerankTip: 'Rerankモデルを設定してください',
    },
    card: {
      quota: 'クォータ',
      onTrial: 'トライアル中',
      paid: '有料',
      quotaExhausted: 'クォータが使い果たされました',
      callTimes: '通話回数',
      tokens: 'トークン',
      buyQuota: 'クォータを購入',
      priorityUse: '優先利用',
      removeKey: 'APIキーを削除',
      tip: '有料クォータは優先して使用されます。有料クォータを使用し終えた後、トライアルクォータが利用されます。',
    },
    item: {
      deleteDesc: '{{modelName}}はシステムが推測するモデルとして利用されています。削除すると、一部の機能が使用不可能になる可能性があります。ご確認ください。',
      freeQuota: '無料のクォータ',
    },
    addApiKey: 'APIキーを追加',
    invalidApiKey: '無効なAPIキー',
    encrypted: {
      front: 'APIキーは',
      back: ' の技術で暗号化されて保存されます。',
    },
    freeQuota: {
      howToEarn: '獲得方法',
    },
    addMoreModelProvider: 'モデルプロバイダを追加',
    addModel: 'モデルを追加',
    modelsNum: '{{num}}のモデル',
    showModels: 'モデルの表示',
    showModelsNum: '{{num}}のモデルを表示',
    collapse: '折り畳み',
    config: '設定',
    modelAndParameters: 'モデルとパラメータ',
    model: 'モデル',
    featureSupported: '{{feature}}に対応',
    callTimes: '呼び出し回数',
    credits: 'クレジット',
    buyQuota: 'クォータ購入',
    getFreeTokens: '無料トークンを獲得',
    priorityUsing: '優先利用',
    deprecated: '廃止予定',
    confirmDelete: '削除を確認',
    quotaTip: '残りの無料トークン',
    loadPresets: 'プリセットの読み込み',
    parameters: 'パラメータ',
    loadBalancing: '負荷分散',
    loadBalancingDescription: '複数の認証情報を使って負荷を分散させます。',
    loadBalancingHeadline: '負荷分散',
    configLoadBalancing: '負荷分散の設定',
    modelHasBeenDeprecated: 'このモデルは廃止予定です',
    providerManaged: 'プロバイダ管理',
    providerManagedDescription: 'モデルプロバイダによって提供される認証情報を使用します。',
    defaultConfig: 'デフォルトの設定',
    apiKeyStatusNormal: 'APIキーの状態は正常',
    apiKeyRateLimit: 'レート制限に到達しました。{{seconds}}秒後に再度利用可能です',
    addConfig: '設定を追加',
    editConfig: '設定を編集',
    loadBalancingLeastKeyWarning: '負荷分散を利用するには、最低2つのキーを有効化する必要があります。',
    loadBalancingInfo: 'デフォルトでは、負荷分散はラウンドロビン方式を採用しています。レート制限が発生した場合、1分間のクールダウン期間が適用されます。',
    upgradeForLoadBalancing: '負荷分散を利用するには、プランのアップグレードが必要です。',
  },
  dataSource: {
    add: 'データソースの追加',
    connect: '接続',
    configure: '設定',
    notion: {
      title: 'ノーション',
      description: '知識データソースとしてノーションを使用します。',
      connectedWorkspace: '接続済みワークスペース',
      addWorkspace: 'ワークスペースの追加',
      connected: '接続済み',
      disconnected: '接続解除',
      changeAuthorizedPages: '認証済みページの変更',
      pagesAuthorized: '認証済みページ',
      sync: '同期',
      remove: '削除',
      selector: {
        pageSelected: '選択済みページ',
        searchPages: 'ページ検索...',
        noSearchResult: '検索結果なし',
        addPages: 'ページの追加',
        preview: 'プレビュー',
      },
    },
    website: {
      title: 'ウェブサイト',
      description: 'ウェブクローラーを使ってウェブサイトからコンテンツを取り込みます。',
      with: 'による',
      configuredCrawlers: '設定済みクローラー',
      active: 'アクティブ',
      inactive: '非アクティブ',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'APIキー',
      apiKeyPlaceholder: 'APIキーを入力してください',
      keyFrom: 'SerpAPIアカウントページからSerpAPIキーを取得してください',
    },
  },
  apiBasedExtension: {
    title: 'API拡張機能は、Difyのアプリケーション全体での簡単な使用のための設定を簡素化し、集中的なAPI管理を提供します。',
    link: '独自のAPI拡張機能を開発する方法について学ぶ。',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'API拡張機能を追加',
    selector: {
      title: 'API拡張機能',
      placeholder: 'API拡張機能を選択してください',
      manage: 'API拡張機能を管理',
    },
    modal: {
      title: 'API拡張機能を追加',
      editTitle: 'API拡張機能を編集',
      name: {
        title: '名前',
        placeholder: '名前を入力してください',
      },
      apiEndpoint: {
        title: 'APIエンドポイント',
        placeholder: 'APIエンドポイントを入力してください',
      },
      apiKey: {
        title: 'APIキー',
        placeholder: 'APIキーを入力してください',
        lengthError: 'APIキーの長さは5文字未満にできません',
      },
    },
    type: 'タイプ',
  },
  about: {
    changeLog: '変更ログ',
    updateNow: '今すぐ更新',
    nowAvailable: 'Dify {{version}} が利用可能です。',
    latestAvailable: 'Dify {{version}} が最新バージョンです。',
  },
  appMenus: {
    overview: '監視',
    promptEng: 'オーケストレート',
    apiAccess: 'APIアクセス',
    logAndAnn: 'ログ＆アナウンス',
    logs: 'ログ',
  },
  environment: {
    testing: 'テスト',
    development: '開発',
  },
  appModes: {
    completionApp: 'テキスト生成',
    chatApp: 'チャットアプリ',
  },
  datasetMenus: {
    documents: 'ドキュメント',
    hitTesting: '検索テスト',
    settings: '設定',
    emptyTip: '関連付けられた知識がありません。アプリケーションやプラグインに移動して関連付けを完了してください。',
    viewDoc: 'ドキュメントを表示',
    relatedApp: '関連アプリ',
  },
  voiceInput: {
    speaking: '今話しています...',
    converting: 'テキストに変換中...',
    notAllow: 'マイクが許可されていません',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: '会話名を変更',
    conversationName: '会話名',
    conversationNamePlaceholder: '会話名を入力してください',
    conversationNameCanNotEmpty: '会話名は必須です',
    citation: {
      title: '引用',
      linkToDataset: '知識へのリンク',
      characters: '文字数:',
      hitCount: '検索回数:',
      vectorHash: 'ベクトルハッシュ:',
      hitScore: '検索スコア:',
    },
  },
  promptEditor: {
    placeholder: 'ここにプロンプトワードを入力してください。変数を挿入するには「{」を、プロンプトコンテンツブロックを挿入するには「/」を入力します。',
    context: {
      item: {
        title: 'コンテキスト',
        desc: 'コンテキストテンプレートを挿入',
      },
      modal: {
        title: '{{num}} 番目のコンテキスト',
        add: 'コンテキストを追加',
        footer: '以下のコンテキストセクションでコンテキストを管理できます。',
      },
    },
    history: {
      item: {
        title: '会話履歴',
        desc: '過去のメッセージテンプレートを挿入',
      },
      modal: {
        title: '例',
        user: 'こんにちは',
        assistant: 'こんにちは！ 今日はどのようにお手伝いできますか？',
        edit: '会話の役割名を編集',
      },
    },
    variable: {
      item: {
        title: '変数＆外部ツール',
        desc: '変数＆外部ツールを挿入',
      },
      outputToolDisabledItem: {
        title: '変数',
        desc: '変数を挿入',
      },
      modal: {
        add: '新しい変数',
        addTool: '新しいツール',
      },
    },
    query: {
      item: {
        title: 'クエリ',
        desc: 'ユーザークエリテンプレートを挿入',
      },
    },
    existed: 'プロンプトにすでに存在します',
  },
  imageUploader: {
    uploadFromComputer: 'コンピューターからアップロード',
    uploadFromComputerReadError: '画像の読み込みに失敗しました。もう一度お試しください。',
    uploadFromComputerUploadError: '画像のアップロードに失敗しました。もう一度アップロードしてください。',
    uploadFromComputerLimit: 'アップロード画像のサイズは {{size}} MB を超えることはできません',
    pasteImageLink: '画像リンクを貼り付ける',
    pasteImageLinkInputPlaceholder: 'ここに画像リンクを貼り付けてください',
    pasteImageLinkInvalid: '無効な画像リンク',
    imageUpload: '画像アップロード',
  },
  tag: {
    placeholder: 'すべてのタグ',
    addNew: '新しいタグを追加',
    noTag: 'タグなし',
    noTagYet: 'まだタグがありません',
    addTag: 'タグを追加',
    editTag: 'タグを編集',
    manageTags: 'タグの管理',
    selectorPlaceholder: '検索または作成する文字を入力',
    create: '作成',
    delete: 'タグを削除',
    deleteTip: 'タグは使用されています、削除しますか',
    created: 'タグは正常に作成されました',
    failed: 'タグの作成に失敗しました',
  },
}

export default translation