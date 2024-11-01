import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from "./Counter";





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Counter Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          This is Burgin Learning Next Js
        </h1>
          <Counter />
      </main>
    </div>
  );
}
