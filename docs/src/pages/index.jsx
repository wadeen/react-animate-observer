import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.container}>
      <HomepageFeatures />
      {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
      {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          チュートリアルを開始🕹️
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
