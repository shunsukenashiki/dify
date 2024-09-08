const translation = {
  common: {
    undo: '復原',
    redo: '重做',
    editing: '編輯中',
    autoSaved: '自動保存',
    unpublished: '未發佈',
    published: '已發佈',
    publish: '發佈',
    update: '更新',
    run: '運行',
    running: '運行中',
    inRunMode: '在運行模式中',
    inPreview: '預覽中',
    inPreviewMode: '預覽中',
    preview: '預覽',
    viewRunHistory: '查看運行歷史',
    runHistory: '運行歷史',
    goBackToEdit: '返回編輯模式',
    conversationLog: '對話記錄',
    features: '功能',
    debugAndPreview: '預覽',
    restart: '重新開始',
    currentDraft: '當前草稿',
    currentDraftUnpublished: '當前草稿未發佈',
    latestPublished: '最新發佈',
    publishedAt: '發佈於',
    restore: '恢復',
    runApp: '運行',
    batchRunApp: '批量運行',
    accessAPIReference: '訪問 API',
    embedIntoSite: '嵌入網站',
    addTitle: '添加標題...',
    addDescription: '添加描述...',
    noVar: '沒有變量',
    variableNamePlaceholder: '變量名',
    searchVar: '搜索變量',
    setVarValuePlaceholder: '設置變量值',
    needConnectTip: '此節點尚未連接到其他節點',
    maxTreeDepth: '每個分支最大限制 {{depth}} 個節點',
    needEndNode: '必須添加結束節點',
    needAnswerNode: '必須添加直接回覆節點',
    workflowProcess: '工作流',
    notRunning: '尚未運行',
    previewPlaceholder: '在下面的框中輸入內容開始調試聊天機器人',
    effectVarConfirm: {
      title: '移除變量',
      content: '該變量在其他節點中使用。您是否仍要刪除它？',
    },
    insertVarTip: '按 \'/\' 鍵快速插入',
    processData: '數據處理',
    input: '輸入',
    output: '輸出',
    jinjaEditorPlaceholder: '輸入 “/” 或 “{” 插入變量',
    viewOnly: '只讀',
    showRunHistory: '顯示運行歷史',
    enableJinja: '開啟支持 Jinja 模板',
    learnMore: '了解更多',
    copy: '拷貝',
    duplicate: '複製',
    addBlock: '添加節點',
    pasteHere: '粘貼到這裡',
    pointerMode: '指針模式',
    handMode: '手模式',
    model: '模型',
    workflowAsTool: '發佈為工具',
    configureRequired: '需要進行配置',
    configure: '配置',
    manageInTools: '訪問工具頁',
    workflowAsToolTip: '工作流更新後需要重新配置工具參數',
    viewDetailInTracingPanel: '查看詳細信息',
    importDSL: '導入 DSL',
    backupCurrentDraft: 'Backup Current Draft',
    overwriteAndImport: '覆蓋和導入',
    importSuccess: '導入成功',
    chooseDSL: '選擇 DSL（yml） 檔',
    syncingData: '同步數據，只需幾秒鐘。',
    importDSLTip: '當前草稿將被覆蓋。在導入之前將工作流匯出為備份。',
    importFailure: '匯入失敗',
  },
  env: {
    envPanelTitle: '環境變數',
    envDescription: '環境變數可用於存儲私人信息和憑證。它們是唯讀的，並且可以在導出時與DSL文件分開。',
    envPanelButton: '添加變數',
    modal: {
      title: '添加環境變數',
      editTitle: '編輯環境變數',
      type: '類型',
      name: '名稱',
      namePlaceholder: '環境名稱',
      value: '值',
      valuePlaceholder: '環境值',
      secretTip: '用於定義敏感信息或數據，DSL設置配置為防止洩露。',
    },
    export: {
      title: '導出機密環境變數？',
      checkbox: '導出機密值',
      ignore: '導出DSL',
      export: '導出帶有機密值的DSL',
    },
  },
  chatVariable: {
    panelTitle: '對話變數',
    panelDescription: '對話變數用於儲存 LLM 需要記住的互動資訊，包括對話歷史、上傳的檔案、使用者偏好等。這些變數可讀寫。',
    docLink: '查看我們的文件以了解更多。',
    button: '新增變數',
    modal: {
      title: '新增對話變數',
      editTitle: '編輯對話變數',
      name: '名稱',
      namePlaceholder: '變數名稱',
      type: '類型',
      value: '預設值',
      valuePlaceholder: '預設值，留空則不設定',
      description: '描述',
      descriptionPlaceholder: '描述此變數',
      editInJSON: '以 JSON 編輯',
      oneByOne: '逐一新增',
      editInForm: '在表單中編輯',
      arrayValue: '值',
      addArrayValue: '新增值',
      objectKey: '鍵',
      objectType: '類型',
      objectValue: '預設值',
    },
    storedContent: '已儲存內容',
    updatedAt: '更新於 ',
  },
  changeHistory: {
    title: '變更履歷',
    placeholder: '尚未更改任何內容',
    clearHistory: '清除歷史記錄',
    hint: '提示',
    hintText: '您的編輯操作將被跟踪並存儲在您的設備上，直到您離開編輯器。此歷史記錄將在您離開編輯器時被清除。',
    stepBackward_one: '{{count}} 步後退',
    stepBackward_other: '{{count}} 步後退',
    stepForward_one: '{{count}} 步前進',
    stepForward_other: '{{count}} 步前進',
    sessionStart: '會話開始',
    currentState: '當前狀態',
    nodeTitleChange: '區塊標題已更改',
    nodeDescriptionChange: '區塊描述已更改',
    nodeDragStop: '區塊已移動',
    nodeChange: '區塊已更改',
    nodeConnect: '區塊已連接',
    nodePaste: '區塊已粘貼',
    nodeDelete: '區塊已刪除',
    nodeAdd: '區塊已添加',
    nodeResize: '區塊已調整大小',
    noteAdd: '註釋已添加',
    noteChange: '註釋已更改',
    edgeDelete: '區塊已斷開連接',
    noteDelete: '註釋已刪除',
  },
  errorMsg: {
    fieldRequired: '{{field}} 不能為空',
    authRequired: '請先授權',
    invalidJson: '{{field}} 是非法的 JSON',
    fields: {
      variable: '變量名',
      variableValue: '變量值',
      code: '代碼',
      model: '模型',
      rerankModel: 'Rerank 模型',
    },
    invalidVariable: '無效的變量',
  },
  singleRun: {
    testRun: '測試運行',
    startRun: '開始運行',
    running: '運行中',
    testRunIteration: '測試運行迭代',
    back: '返回',
    iteration: '迭代',
  },
  tabs: {
    'searchBlock': '搜索節點',
    'blocks': '節點',
    'tools': '工具',
    'allTool': '全部',
    'builtInTool': '內置',
    'customTool': '自定義',
    'workflowTool': '工作流',
    'question-understand': '問題理解',
    'logic': '邏輯',
    'transform': '轉換',
    'utilities': '工具',
    'noResult': '未找到匹配項',
    'searchTool': '搜索工具',
  },
  blocks: {
    'start': '開始',
    'end': '結束',
    'answer': '直接回覆',
    'llm': 'LLM',
    'knowledge-retrieval': '知識檢索',
    'question-classifier': '問題分類器',
    'if-else': '條件分支',
    'code': '代碼執行',
    'template-transform': '模板轉換',
    'http-request': 'HTTP 請求',
    'variable-assigner': '變量聚合器',
    'variable-aggregator': '變量聚合器',
    'assigner': '變數分配器',
    'iteration-start': '迭代開始',
    'iteration': '迭代',
    'parameter-extractor': '參數提取器',
  },
  blocksAbout: {
    'start': '定義一個 workflow 流程啟動的初始參數',
    'end': '定義一個 workflow 流程的結束和結果類型',
    'answer': '定義一個聊天對話的回覆內容',
    'llm': '調用大語言模型回答問題或者對自然語言進行處理',
    'knowledge-retrieval': '允許你從知識庫中查詢與用戶問題相關的文本內容',
    'question-classifier': '定義用戶問題的分類條件，LLM 能夠根據分類描述定義對話的進展方式',
    'if-else': '允許你根據 if/else 條件將 workflow 拆分成兩個分支',
    'code': '執行一段 Python 或 NodeJS 代碼實現自定義邏輯',
    'template-transform': '使用 Jinja 模板語法將數據轉換為字符串',
    'http-request': '允許通過 HTTP 協議發送服務器請求',
    'variable-assigner': '將多路分支的變量聚合為一個變量，以實現下游節點統一配置。',
    'assigner': '變數分配節點用於為可寫入的變數（如對話變數）分配值。',
    'variable-aggregator': '將多路分支的變量聚合為一個變量，以實現下游節點統一配置。',
    'iteration': '對列表對象執行多次步驟直至輸出所有結果。',
    'parameter-extractor': '利用 LLM 從自然語言內推理提取出結構化參數，用於後置的工具調用或 HTTP 請求。',
  },
  operator: {
    zoomIn: '放大',
    zoomOut: '縮小',
    zoomTo50: '縮放到 50%',
    zoomTo100: '放大到 100%',
    zoomToFit: '自適應視圖',
  },
  panel: {
    userInputField: '用戶輸入字段',
    changeBlock: '更改節點',
    helpLink: '幫助鏈接',
    about: '關於',
    createdBy: '作者',
    nextStep: '下一步',
    addNextStep: '添加此工作流程中的下一個節點',
    selectNextStep: '選擇下一個節點',
    runThisStep: '運行此步驟',
    checklist: '檢查清單',
    checklistTip: '發佈前確保所有問題均已解決',
    checklistResolved: '所有問題均已解決',
    organizeBlocks: '整理節點',
    change: '更改',
    optional: '(選擇性)',
  },
  nodes: {
    common: {
      outputVars: '輸出變量',
      insertVarTip: '插入變量',
      memory: {
        memory: '記憶',
        memoryTip: '聊天記憶設置',
        windowSize: '記憶窗口',
        conversationRoleName: '對話角色名',
        user: '用戶前綴',
        assistant: '助手前綴',
      },
      memories: {
        title: '記憶',
        tip: '聊天記憶',
        builtIn: '內置',
      },
    },
    start: {
      required: '必填',
      inputField: '輸入字段',
      builtInVar: '內置變量',
      outputVars: {
        query: '用戶輸入',
        memories: {
          des: '會話歷史',
          type: '消息類型',
          content: '消息內容',
        },
        files: '文件列表',
      },
      noVarTip: '設置的輸入可在工作流程中使用',
    },
    end: {
      outputs: '輸出',
      output: {
        type: '輸出類型',
        variable: '輸出變量',
      },
      type: {
        'none': '無',
        'plain-text': '純文本',
        'structured': '結構化',
      },
    },
    answer: {
      answer: '回覆',
      outputVars: '輸出變量',
    },
    llm: {
      model: '模型',
      variables: '變量',
      context: '上下文',
      contextTooltip: '您可以導入知識庫作為上下文',
      notSetContextInPromptTip: '要啟用上下文功能，請在提示中填寫上下文變量。',
      prompt: '提示詞',
      addMessage: '添加消息',
      roleDescription: {
        system: '為對話提供高層指導',
        user: '向模型提供指令、查詢或任何基於文本的輸入',
        assistant: '基於用戶消息的模型回覆',
      },
      vision: '視覺',
      files: '文件',
      resolution: {
        name: '分辨率',
        high: '高',
        low: '低',
      },
      outputVars: {
        output: '生成內容',
        usage: '模型用量信息',
      },
      singleRun: {
        variable: '變量',
      },
      sysQueryInUser: 'user message 中必須包含 sys.query',
    },
    knowledgeRetrieval: {
      queryVariable: '查詢變量',
      knowledge: '知識庫',
      outputVars: {
        output: '召回的分段',
        content: '分段內容',
        title: '分段標題',
        icon: '分段圖標',
        url: '分段鏈接',
        metadata: '其他元數據',
      },
    },
    http: {
      inputVars: '輸入變量',
      api: 'API',
      apiPlaceholder: '輸入 URL，輸入變量時請鍵入‘/’',
      notStartWithHttp: 'API 應該以 http:// 或 https:// 開頭',
      key: '鍵',
      value: '值',
      bulkEdit: '批量編輯',
      keyValueEdit: '鍵值編輯',
      headers: 'Headers',
      params: 'Params',
      body: 'Body',
      outputVars: {
        body: '響應內容',
        statusCode: '響應狀態碼',
        headers: '響應頭列表 JSON',
        files: '文件列表',
      },
      authorization: {
        'authorization': '鑑權',
        'authorizationType': '鑑權類型',
        'no-auth': '無',
        'api-key': 'API-Key',
        'auth-type': 'API 鑑權類型',
        'basic': '基礎',
        'bearer': 'Bearer',
        'custom': '自定義',
        'api-key-title': 'API Key',
        'header': 'Header',
      },
      insertVarPlaceholder: '鍵入 \'/\' 鍵快速插入變量',
      timeout: {
        title: '超時設置',
        connectLabel: '連接超時',
        connectPlaceholder: '輸入連接超時（以秒為單位）',
        readLabel: '讀取超時',
        readPlaceholder: '輸入讀取超時（以秒為單位）',
        writeLabel: '寫入超時',
        writePlaceholder: '輸入寫入超時（以秒為單位）',
      },
    },
    code: {
      inputVars: '輸入變量',
      outputVars: '輸出變量',
      advancedDependencies: '高級依賴',
      advancedDependenciesTip: '在這裡添加一些預加載需要消耗較多時間或非默認內置的依賴包',
      searchDependencies: '搜索依賴',
    },
    templateTransform: {
      inputVars: '輸入變量',
      code: '代碼',
      codeSupportTip: '只支持 Jinja2',
      outputVars: {
        output: '轉換後內容',
      },
    },
    ifElse: {
      if: 'If',
      else: 'Else',
      elseDescription: '用於定義當 if 條件不滿足時應執行的邏輯。',
      and: 'and',
      or: 'or',
      operator: '操作符',
      notSetVariable: '請先設置變量',
      comparisonOperator: {
        'contains': '包含',
        'not contains': '不包含',
        'start with': '開始是',
        'end with': '結束是',
        'is': '是',
        'is not': '不是',
        'empty': '為空',
        'not empty': '不為空',
        'null': '空',
        'not null': '不為空',
      },
      enterValue: '輸入值',
      addCondition: '添加條件',
      conditionNotSetup: '條件未設置',
      selectVariable: '選擇變數...',
    },
    variableAssigner: {
      title: '變量賦值',
      outputType: '輸出類型',
      varNotSet: '未設置變量',
      noVarTip: '添加需要賦值的變量',
      type: {
        string: 'String',
        number: 'Number',
        object: 'Object',
        array: 'Array',
      },
      aggregationGroup: '聚合分組',
      aggregationGroupTip: '開啟該功能後，變量聚合器內可以同時聚合多組變量',
      addGroup: '添加分組',
      outputVars: {
        varDescribe: '{{groupName}}的輸出變量',
      },
      setAssignVariable: '設置賦值變量',
    },
    assigner: {
      'assignedVariable': '已分配變數',
      'writeMode': '寫入模式',
      'writeModeTip': '當已分配變數是陣列時，附加模式會新增到末尾。',
      'over-write': '覆寫',
      'append': '附加',
      'plus': '加',
      'clear': '清除',
      'setVariable': '設定變數',
      'variable': '變數',
    },
    tool: {
      toAuthorize: '授權',
      inputVars: '輸入變量',
      outputVars: {
        text: '工具生成的內容',
        files: {
          title: '工具生成的文件',
          type: '支持類型。現在只支持圖片',
          transfer_method: '傳輸方式。值為 remote_url 或 local_file',
          url: '圖片鏈接',
          upload_file_id: '上傳文件ID',
        },
        json: '工具生成的JSON',
      },
    },
    questionClassifiers: {
      model: '模型',
      inputVars: '輸入變量',
      outputVars: {
        className: '分類名稱',
      },
      class: '分類',
      classNamePlaceholder: '輸入你的分類名稱',
      advancedSetting: '高級設置',
      topicName: '主題內容',
      topicPlaceholder: '在這裡輸入你的主題內容',
      addClass: '添加分類',
      instruction: '指令',
      instructionTip: '你可以輸入額外的附加指令，幫助問題分類器更好的理解如何分類',
      instructionPlaceholder: '在這裡輸入你的指令',
    },
    parameterExtractor: {
      inputVar: '輸入變量',
      extractParameters: '提取參數',
      importFromTool: '從工具導入',
      addExtractParameter: '添加提取參數',
      addExtractParameterContent: {
        name: '名稱',
        namePlaceholder: '提取參數名稱',
        type: '類型',
        typePlaceholder: '提取參數類型',
        description: '描述',
        descriptionPlaceholder: '提取參數描述',
        required: '必填',
        requiredContent: '必填僅作為模型推理的參考，不用於參數輸出的強制驗證。',
      },
      extractParametersNotSet: '提取參數未設置',
      instruction: '指令',
      instructionTip: '你可以輸入額外的附加指令，幫助參數提取器理解如何提取參數',
      advancedSetting: '高級設置',
      reasoningMode: '推理模式',
      reasoningModeTip: '你可以根據模型對於 Function calling 或 Prompt 的指令響應能力選擇合適的推理模式',
      isSuccess: '是否成功。成功時值為 1，失敗時值為 0。',
      errorReason: '錯誤原因',
    },
    iteration: {
      deleteTitle: '刪除迭代節點？',
      deleteDesc: '刪除迭代節點將刪除所有子節點',
      input: '輸入',
      output: '輸出變量',
      iteration_one: '{{count}}個迭代',
      iteration_other: '{{count}}個迭代',
      currentIteration: '當前迭代',
    },
    note: {
      editor: {
        link: '連結',
        openLink: '打開',
        medium: '中等',
        small: '小',
        invalidUrl: 'URL 無效',
        italic: '斜體的',
        bulletList: '項目符號清單',
        large: '大',
        unlink: '取消連結',
        enterUrl: '輸入網址...',
        bold: '大膽',
        showAuthor: '顯示作者',
        strikethrough: '刪除線',
        placeholder: '寫下您的筆記...',
      },
      addNote: '添加註釋',
    },
  },
  tracing: {
    stopBy: '由{{user}}終止',
  },
}

export default translation
