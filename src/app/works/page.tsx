import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Works</h1>
        <div className={styles.lead}>
          <p>このサイトを作成するにあたり、使用した技術は以下です。</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Next.js</li>
            <li>Three.js（背景）</li>
            <li>GitHub</li>
					</ul>
					<p>その他の制作物は職務経歴書よりご確認ください。</p>
        </div>
      </div>
      <section className={styles.content}>
        <h2 className={styles.title}>Reference</h2>
        <div className={styles.lead}>
          <p>このサイトを作成するにあたり、主に以下のサイトや書籍を参考にしています。</p>
          <ul>
            <li>
              <a href="https://ebisu.com/next-react-website/" target="_blank">
                作って学ぶ Next.js/React Webサイト構築
              </a>
            </li>
            <li>
              <a href="https://b-risk.jp/blog/2021/12/three-js-arrange/" target="_blank">
                手軽にリッチなサイトに変わる！3Dグラフィックを描画できるthree.js（WebGL）でサイトをアレンジしてみよう | 東京のホームページ制作 / WEB制作会社 BRISK
              </a>
            </li>
            <li>
              <a href="https://zenn.dev/kazzyfrog/articles/8e24dfe951aad9" target="_blank">
                Next.js 14.1 を GitHub Pages にデプロイするガイド
              </a>
            </li>
          </ul>
          <p>
            その他、一部ChatGPTを使用しています。
            <br />
            （Next.jsの導入時のエラー解消、背景のThree.jsのレンダリングに関すること等）
          </p>
        </div>
      </section>
    </section>
  );
}
