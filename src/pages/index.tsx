import styles from '@/styles/Home.module.css';
import { ScrollAnimator } from '@/animation/ScrollAnimator';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>This is Test space</h1>
      <ScrollAnimator className={styles.div}>This is Div space</ScrollAnimator>
      <ScrollAnimator
        start={{ opacity: 0, x: 30, y: 30, origin: 'left' }}
        end={{ opacity: 1, x: 0, y: 0, origin: 'right' }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={styles.section}
      >
        This is Section space
      </ScrollAnimator>
      <ScrollAnimator className={styles.div}>This is Div space</ScrollAnimator>
      <ScrollAnimator
        start={{ opacity: 0, skewX: 30, skewY: 30, rotateX: 180 }}
        end={{ opacity: 1, skewX: 30, skewY: 30, rotateX: 0 }}
        transition={{ duration: 0.7, delay: 0.3, timing: 'ease-in-out' }}
        className={styles.section}
      >
        This is Section space
      </ScrollAnimator>
      <div
        style={{
          width: '800px',
          height: '800px',
          marginInline: 'auto',
          backgroundColor: 'springgreen',
          scale: '0.5',
          rotate: '45deg',
          transform: 'translateY(200px) translateX(100px)',
        }}
      >
        test space
      </div>
    </div>
  );
}
