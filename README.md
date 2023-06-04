# React Animate Observer 🕹️

![React Animate Observer](/public/ogp.png 'react-animate-observer')

React Animate Observer は React のカスタムフックを使用した Intersection Observer ライブラリで、スクロールによって要素がビューポートに入るときにアニメーションをトリガーします。

## インストール

以下のコマンドを使用して React Animate Observer をプロジェクトにインストールします。

```bash
  // npm
  npm install react-animate-observer

  // yarn
  yarn add react-animate-observer
```

## 使い方

基本的な使用方法は以下の通りです。

```jsx
import { ScrollAnimator } from 'react-animate-observer';

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

上記の例では、スクロールがビューポートに入るときにアニメーションがトリガーされます。<br />
通常は、`CSSProperties` を継承しているので React での`style={}`と同じように使えます。<br />
`transition`のプロパティごとに値を変えたい場合は、基本通り`transition`で動きます。<br />
ただし、`translateY`や`scaleY`などはセルフメイドのため `transform` として指定してください。<br />
詳細な設定がしたい場合は CSS でカスタマイズしてください。

```jsx
 transition: 'opacity .3s ease, transform .5s ease',
```

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

# observerOptions
オブザーバーの設定値を変更できます。詳細は次の項目をご覧ください。
```

## observerOptions

オブザーバーの設定値を変更するためのオブジェクトです。<br />
デフォルトの値は以下のようになっています。

```jsx
  mediaQueryWidth: 768, // min-width()の値になります
  largeScreenRootMargin: '-35% 0px', // PCサイズのルートマージン
  smallScreenRootMargin: '-25% 0px', // Mobileサイズのルートマージン
  threshold: 0, // 閾値
  once: true // アニメーションを1回のみ実行するか
```

これらの値を変更したい場合は`observerOptions`でオブジェクトを渡してください。<br />
例えば、`src > constants > optionObserver.ts`を作成します。

```jsx
export const observerOptions = {
  mediaQueryWidth: 820,
  largeScreenRootMargin: '30% 0px',
  smallScreenRootMargin: '-20% 0px',
  threshold: 0.5,
  once: false,
};
```

あとはインポートして呼び出す際に props として渡してください。

```jsx
<ScrollAnimator observerOptions={observerOptions} customStyle={true}>
  <div>Your content goes here</div>
</ScrollAnimator>
```

また、先述していますが`customStyle`を`true`にすることで初期値をなくすことが可能です。

## カスタム HTML 要素の使用

`as` prop を使用して任意の HTML 要素を描画することができます。

```jsx
<ScrollAnimator as="section">
  <p>Your content goes here</p>
</ScrollAnimator>
```

上記の例では、section 要素がアニメーションの対象となります。<br />
また、`start` / `end` / `transition`を渡さなければデフォルトのアニメーションが実行されます。

## データ属性の自動付与

このライブラリは、要素がビューポートに入ると`data-is-active`属性が `true` になります。<br />
これにより、CSS または JavaScript でアニメーションをフックすることが容易になります。<br />
要素がビューポートから外れると、この属性は`false`になります。

## 今後の計画

React Animate Observer は現在開発中であり、今後も機能が追加される予定です。<br />
フィードバックや提案がありましたら、ぜひ GitHub の [Issues](https://github.com/wadeen/react-animate-observer/issues) を通じてお知らせください。
