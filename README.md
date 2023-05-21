# React Animate Observer 🕹️

React Animate Observer は React のカスタムフックを使用した Intersection Observer ライブラリで、スクロールによって要素がビューポートに入るときにアニメーションをトリガーします。

## インストール

以下のコマンドを使用して React Animate Observer をプロジェクトにインストールします。

```bash
# 準備中
```

## 使い方

基本的な使用方法は以下の通りです。

```jsx
import ScrollAnimator from 'react-animate-observer';

const YourComponent = () => {
  return (
    <ScrollAnimator
      start={{ opacity: 0, translateY: 40 }}
      end={{ opacity: 1, translateY: 0 }}
      transition={{
        transitionDelay: 0.4,
        transitionDuration: 0.8,
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      <div>Your content goes here</div>
    </ScrollAnimator>
  );
};
```

上記の例では、スクロールがビューポートに入るときにアニメーションがトリガーされます。

## Props

以下の props を ScrollAnimator に渡すことができます。

```
# start:
アニメーションの初期状態を定義します。このプロパティは、CSSのスタイルオブジェクトを受け入れます。

# end:
アニメーションの終了状態を定義します。このプロパティは、CSSのスタイルオブジェクトを受け入れます。

# transition:
アニメーションの遷移プロパティを定義します。このプロパティは、CSSのトランジションプロパティを受け入れます。

# as:
描画するHTML要素を定義します。デフォルトはdivです。

# customStyle:
customStyleをtrueにすることで`start`/`end`/`transition`の初期値をなくすことができます(デフォルトはfalse)。
```

## カスタム HTML 要素の使用

`as` prop を使用して任意の HTML 要素を描画することができます。

```jsx
<ScrollAnimator as="section">
  <p>Your content goes here</p>
</ScrollAnimator>
```

上記の例では、section 要素がアニメーションの対象となります。<br />
また、`start` / `end` / `transition`を渡さければデフォルトのアニメーションが実行されます（デフォルトの値も変更可能）。

## データ属性の自動付与

このライブラリは、要素がビューポートに入ると`data-is-active`属性が true になります。<br />
これにより、CSS または JavaScript でアニメーションをフックすることが容易になります。<br />
要素がビューポートから外れると、この属性は`false`になります。

## 今後の計画

React Animate Observer は現在開発中であり、今後も機能が追加される予定です。<br />
フィードバックや提案がありましたら、ぜひ GitHub の issue を通じてお知らせください。
