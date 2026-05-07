# EditorWindow・設定デザイナー

UI Toolkit、EditorPrefs、Validation設定、コマンドをGUIで管理する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

| 項目 | 内容 |
| --- | --- |
| Rank | 68 |
| Domain | UnityEditor |
| Idea No. | 6 |
| Repository | editorwindow-settings-designer |
| 主な公開先 | GitHub Release / BOOTH |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: UI/レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/cli.mjs`: CLI。

## Validation

`npm test` で代表シナリオ、QCDS、docs ZIP、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
