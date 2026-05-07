# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 68 |
| Domain | UnityEditor |
| Idea No. | 6 |
| Repository | editorwindow-settings-designer |
| 主な公開先 | GitHub Release / BOOTH |

## 背景

Editor拡張の設定や画面構成がコード寄りになりがち。

## 目的

UI Toolkit、EditorPrefs、Validation設定、コマンドをGUIで管理する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- EditorWindow setting を複数件まとめて検証できる。
- required fields: `id`, `title`, `windowName`, `settingKey`, `defaultValue`, `owner`。
- warning field: `undoPolicy`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
