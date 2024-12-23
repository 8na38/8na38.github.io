import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About me</h1>
        <div className={styles.lead}>
          <p>
            前職では医療機器の製造に携わっていました。
            <br />
            働く中で仕組み化された効率的な作業プロセスに触れ、仕組みを整えることの重要性や、それがもたらす効果に強く惹かれました。
            <br />
            その経験を通じて、ものづくりの現場だけでなく、デジタル領域で仕組みを活かして価値を生み出す仕事をしたいと考えるようになり、Webコーダーへの転向を決意しました。
          </p>
          <p>
            現在は、30を超えるWebサイトの更新業務をはじめ、WordPressサイトやLPの制作を担当しています。また、3,000ページを超える大規模サイトやECサイトの更新・改修にも携わりました。
            <br />
            私が重視していることは、コードの可読性と保守性です。
            <br />
            複数人で関わるプロジェクトでも、「後続のメンバーが作業しやすい環境」という仕組みを整えることで、より長期間サイトが適切な形で更新されることを目指しています。
          </p>
        </div>
      </div>
      <section className={styles.content}>
        <h2 className={styles.title}>Interest</h2>
        <div className={styles.lead}>
          <p>今は以下のようなことに関して、興味を抱いていたり勉強したりしています。</p>
          <ul>
            <li>ユーザビリティ</li>
            <li>アクセシビリティ</li>
            <li>デザインシステム</li>
            <li>Next.js</li>
            <li>IT系に関する幅広い知識<br />（→基本情報技術者試験の内容を勉強中）</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
