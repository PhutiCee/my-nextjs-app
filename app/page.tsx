import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <Link className={styles.button} href={"/about"}>About</Link>
    </main>
  );
}
