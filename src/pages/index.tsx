import styles from '@/styles/Home.module.css';
import ScrollAnimator from '@/animation/ScrollAnimator';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>This is Demo space</h1>
      <ScrollAnimator className={styles.space}>space</ScrollAnimator>
      <ScrollAnimator className={styles.space}>space</ScrollAnimator>
      <ScrollAnimator className={styles.space}>space</ScrollAnimator>
      <ScrollAnimator className={styles.space}>space</ScrollAnimator>
      <ScrollAnimator
        as="section"
        className={styles.space}
        start={{ opacity: 0, translateX: 100 }}
        end={{ opacity: 1, translateX: 0 }}
      >
        space
      </ScrollAnimator>
      <ScrollAnimator
        as="article"
        className={styles.space}
        start={{ opacity: 0, translateX: -100 }}
        end={{ opacity: 1, translateX: 0 }}
      >
        space
      </ScrollAnimator>
      <ScrollAnimator
        className={styles.space}
        start={{ opacity: 0, skewX: 70, skewY: 30 }}
        end={{ opacity: 1, skewX: 0, skewY: 0 }}
        transition={{
          transition: 'opacity .3s ease, transform .4s ease-in',
          transitionDelay: 0.3,
        }}
      >
        space
      </ScrollAnimator>
      <ScrollAnimator
        customStyle={true}
        className={`${styles.space} ${styles.custom}`}
      >
        space
      </ScrollAnimator>
    </main>
  );
}
