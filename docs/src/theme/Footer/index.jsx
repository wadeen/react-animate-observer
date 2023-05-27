import React from 'react';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Footer = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <small>&copy; 2023 {siteConfig.title}</small>
        <small>
          <a href="https://openmoji.org/" target="_blank" rel="noreferrer">
            OpenMoji
          </a>
          is licensed under
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY-SA 4.0
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
