# kjfsm.net

私のポートフォリオサイトです。Next.jsとMaterial UIを使用して構築しています。

## 技術スタック

- **フレームワーク**: Next.js 15.2.4
- **UIライブラリ**: Material UI 7.0.1
- **言語**: TypeScript
- **デプロイ**: GitHub Pages

## 機能

- レスポンシブデザイン
- ダークモード対応
- シンプルなナビゲーション
- 自己紹介ページ
- Windowsバージョンの推移を表示するグラフ

## 開発環境

- Node.js 20
- TypeScript
- Dev Containerを使用した開発環境

## ローカルでの実行方法

1. リポジトリをクローン
```bash
git clone https://github.com/kjfsm/kjfsm.github.io.git
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm run dev
```

4. ブラウザで http://localhost:3000 を開く

## ビルド方法

```bash
npm run build
```

## デプロイ

GitHub Actionsを使用して自動デプロイされています。mainブランチへのプッシュで自動的にデプロイが実行されます。

## ライセンス

MIT
