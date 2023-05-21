import styles from '@/styles/Home.module.css';
import ScrollAnimator from '@/animation/ScrollAnimator';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>This is Test space</h1>

      <ScrollAnimator
        start={{
          opacity: 0,
          translateY: 40,
          marginBottom: 30,
        }}
        end={{ opacity: 1, translateY: 0 }}
        transition={{
          transitionDelay: 0.4,
          transitionDuration: 0.8,
          transitionTimingFunction: 'ease-in-out',
        }}
        className={styles.section}
      >
        This is Section space
      </ScrollAnimator>
      <ScrollAnimator as="section" className={styles.section}>
        ああ
      </ScrollAnimator>
      <ScrollAnimator as="a" href="/" className={styles.section}>
        リンク
      </ScrollAnimator>
      <ScrollAnimator as="button" type="button" className={styles.section}>
        ボタン
      </ScrollAnimator>
      <div
        style={{
          width: '800px',
          height: '800px',
          marginInline: 'auto',
          backgroundColor: 'springgreen',
          scale: 0.8,
          translate: '100px',
          rotate: '45deg',
          transform: 'translateY(200px) translateX(100px)',
          marginBottom: 30,
        }}
      >
        demo confirm space...
        <br />
        (default inline style)
      </div>
    </div>
  );
}
