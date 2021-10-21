import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProductGrid() {
  return (
    <div className={styles.grid}>
      <a href="https://sv.wikipedia.org/wiki/%C3%96l" className={styles.card}>
        <img src="./beer.jpg"></img>
        <h2>BILD PÅ ÖL</h2>
      </a>
      <a href="https://sv.wikipedia.org/wiki/%C3%96l" className={styles.card}>
        <img src="./beer.jpg"></img>
        <h2>BILD PÅ ÖL</h2>
      </a>
      <a href="https://sv.wikipedia.org/wiki/%C3%96l" className={styles.card}>
        <img src="./beer.jpg"></img>
        <h2>BILD PÅ ÖL</h2>
      </a>
      <a href="https://sv.wikipedia.org/wiki/%C3%96l" className={styles.card}>
        <img src="./beer.jpg"></img>
        <h2>BILD PÅ ÖL</h2>
      </a>
      <a href="https://sv.wikipedia.org/wiki/%C3%96l" className={styles.card}>
        <img src="./beer.jpg"></img>
        <h2>BILD PÅ ÖL</h2>
      </a>
      <a href="https://sv.wikipedia.org/wiki/%C3%96l" className={styles.card}>
        <img src="./beer.jpg"></img>
        <h2>BILD PÅ ÖL</h2>
      </a>
    </div>
  );
}
