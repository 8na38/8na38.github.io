import styles from "./styles/top.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Portfolio</h1>
      </div>
    </section>
  );
}
