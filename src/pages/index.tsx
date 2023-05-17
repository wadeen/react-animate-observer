import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ScrollReveal } from "@/animation/ScrollReveal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is Test space</h1>
      <ScrollReveal style={{ width: "800px", height: "600px", background: "whitesmoke", marginBottom: "50%" }}>This is Div space</ScrollReveal>
      <ScrollReveal as="section" style={{ width: "800px", height: "600px", background: "teal" }}>
        This is Div space
      </ScrollReveal>
    </div>
  );
}
