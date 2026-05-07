export const productProfile = {
  "repository": "editorwindow-settings-designer",
  "title": "EditorWindow・設定デザイナー",
  "domain": "UnityEditor",
  "hostApp": null,
  "rank": 68,
  "tier": "P2",
  "ideaNo": 6,
  "overview": "UI Toolkit、EditorPrefs、Validation設定、コマンドをGUIで管理する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "Editor拡張の設定や画面構成がコード寄りになりがち。",
  "differentiation": "設定変更を安全にプレビューして保存できる。",
  "publish": "GitHub Release / BOOTH",
  "surface": "UnityEditor product spec + CLI validation core",
  "entity": "EditorWindow setting",
  "requiredFields": [
    "id",
    "title",
    "windowName",
    "settingKey",
    "defaultValue",
    "owner"
  ],
  "warningField": "undoPolicy",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
