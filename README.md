# My Tumblr Theme

Tailwind CSS を使用して構築された、カスタマイズ可能な Tumblr テーマプロジェクトです。
ソースコードは `src` ディレクトリで管理され、ビルドスクリプトによって単一の `theme.html` ファイルに結合されます。

## 特徴

- 🎨 Tailwind CSS: モダンで柔軟なスタイリングが可能
- 🌓 Dark Mode: OS設定に基づく自動切り替え + 手動トグル（設定は保存されます）
- 📱 Responsive: モバイル対応済み
- 📝 Full Post Types: 全ての投稿タイプ（Text, Photo, Quote, Link, Chat, Audio, Video, Answer）に対応
- 🇯🇵 Localized: 日付フォーマットの日本式対応（YYYY年MM月DD日）

## ディレクトリ構成

```
.
├── src/
│   ├── template.html      # テーマのHTML構造（プレースホルダー含む）
│   ├── input.css          #CSSソース（Tailwindディレクティブ）
│   └── js/
│       ├── head.js        # <head>内で実行されるScript
│       └── main.js        # </body>直前で実行されるScript
├── scripts/
│   └── build.js           # ビルド用スクリプト
├── theme.html             # 【生成物】Tumblrに貼り付ける最終ファイル
└── package.json
```

## 使い方

### 1. インストール

依存パッケージをインストールします。

```bash
npm install
```

### 2. ビルド

`src` 配下のファイルを結合し、CSSをビルドして `theme.html` を生成します。
HTML構造やJavaScriptを変更した場合は必ずこのコマンドを実行してください。

```bash
npm run build
```

コマンド完了後、生成された `theme.html` の内容をコピーして、Tumblrのカスタマイズ画面（HTMLを編集）に貼り付けてください。

## カスタマイズ

- スタイル: `src/input.css` を編集してください。Tailwind のクラスは `src/template.html` 内で自由に使用できます。
- HTML構造: `src/template.html` を編集してください。Tumblrの独自タグ（`{block:Posts}`など）もここに記述します。
- スクリプト: `src/js/` 内のファイルを編集してください。
