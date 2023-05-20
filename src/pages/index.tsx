import styles from '@/styles/Home.module.css';
import ScrollAnimator from '@/animation/ScrollAnimator';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>This is Test space</h1>
      <ScrollAnimator className={styles.div}>This is Div space</ScrollAnimator>
      <ScrollAnimator
        // ToDo: transform まとめて書く
        // ToDo: scaleとかの見直し(ReactのCSSPropertiesに合わせる必要あり)
        start={{ opacity: 0, x: 30, y: 30, origin: 'left', rotateX: 100 }}
        end={{ opacity: 1, x: 0, y: 0, origin: 'right', rotateX: 100 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={styles.section}
      >
        This is Section space
      </ScrollAnimator>
      <ScrollAnimator customStyle={true} className={styles.div}>
        This is Div space
      </ScrollAnimator>
      <ScrollAnimator
        start={{ opacity: 0, skewX: 30, skewY: 30, rotateX: 180 }}
        end={{ opacity: 1, skewX: 0, skewY: 0, rotateX: 0 }}
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
      <hr />
      <br />
      <br />
      <br />
      <ScrollAnimator>
        <img src="https://via.placeholder.com/400" alt="" />
      </ScrollAnimator>
      <br />
      <br />
      <ScrollAnimator>
        <img src="https://via.placeholder.com/400" alt="" />
      </ScrollAnimator>
      <br />
      <br />
      <ScrollAnimator
        start={{ opacity: 0, y: 130, skewX: 30 }}
        end={{ opacity: 1, y: 0, skewX: 0 }}
        transition={{ delay: 1, duration: 1, timing: 'ease-in-out' }}
      >
        <img src="https://via.placeholder.com/400" alt="" />
      </ScrollAnimator>
    </div>
  );
}
