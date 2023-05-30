import React from 'react';
import styles from './index.module.css';
import { ScrollAnimator } from 'react-animate-observer';

const FeatureList = ['Simple', 'Customize', 'Lightweight'];

function Feature({ title, i }) {
  return (
    <div className={styles.animate}>
      <ScrollAnimator
        as="h1"
        className={styles.text}
        start={{ translateY: 80 }}
        transition={{
          transitionDelay: 0.2 + i * 0.3,
          transitionDuration: 0.25,
          transitionTimingFunction: 'ease-in',
        }}
      >
        {title}.
      </ScrollAnimator>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {FeatureList.map((title, i) => (
          <Feature key={i} title={title} i={i} />
        ))}
      </div>
    </section>
  );
}
