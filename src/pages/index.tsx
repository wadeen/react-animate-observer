import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ScrollReveal } from "@/animation/ScrollReveal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>This is Test space</h1>
      <ScrollReveal className={styles.div}>This is Div space</ScrollReveal>
      <ScrollReveal className={styles.section}>This is Section space</ScrollReveal>
      <ScrollReveal className={styles.div}>This is Div space</ScrollReveal>
      <ScrollReveal as="section" className={styles.section}>
        This is Section space
      </ScrollReveal>
    </div>
  );
}
