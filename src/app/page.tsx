import '../app/globals.css'
import styles from './page.module.scss';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <main className={styles.containerMain}>
        <h1>SEJA BEM VINDO AO MEU PORTIFÓLIO!</h1>
      </main>

      <Link href="/about" className={styles.link}>
        <nav className={styles.content}>
          Bora lá?
        </nav>
      </Link>
    </div>
  )
}