import Head from 'next/head'
import { LoginForm } from '../components/LoginForm'
import { SideContent } from '../components/SideContent'
import styles from '../styles/pages/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codelândia - Desafio 4</title>
        <meta name="description" content="Praticando Front-end com a Codelândia" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />

      </Head>

      <main className={styles.main}>

        <SideContent />
        <LoginForm />
        
      </main>

    </div>
  )
}
