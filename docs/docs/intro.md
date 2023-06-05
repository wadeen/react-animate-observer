---
sidebar_position: 0
---

# チュートリアル

React Animate Observer はとても簡単かつ直感的に実装できます。<br />
いくつかオプションがあったりサンプルコードを用意しているためぜひ試してください 🚀

## プロジェクトを準備

新しい React プロジェクトを作成してください！<br />
もちろん、既存プロジェクトに入れても問題ありません。<br />
以下はあくまで例ですので、自分自身のプロジェクトに合わせて環境の構築をお願いします。

### React

\*React プロジェクトでは vite がおすすめです。

```bash
npm create vite@latest
```

[詳細は React 公式サイトをご覧ください](https://ja.legacy.reactjs.org/docs/create-a-new-react-app.html)
[詳細は Vite 公式サイトをご覧ください](https://ja.vitejs.dev/guide/)

### Next.js

```bash
create-next-app your-project --typescript
```

[詳細は Next.js 公式サイトをご覧ください](https://nextjs.org/docs/getting-started/installation)

### Gatsby.js

```bash
npx gatsby new your-project
```

[詳細は Gatsby.js 公式サイトをご覧ください](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/)

## インストール

:::caution
このプロジェクトでは、React の**バージョン 17.0.0 以上**をサポートしています。<br />
既存プロジェクトに取り入れる場合はバージョンの確認をお願いします。
:::

次に、`react-animate-observer`パッケージをプロジェクトに追加する必要があります。<br />
npm または yarn、pnpm を使用してインストールできます

```bash npm2yarn
npm install react-animate-observer
```

### サーバーを立ち上げる

プロジェクトの設定によって変わるため、package.json の scripts に合わせてローカルサーバーを起動してください。

おめでとうございます！これで`react-animate-observer`を使う準備が整いました 🎉
