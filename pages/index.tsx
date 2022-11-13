import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Discord Bot</h1>

      <p className={styles.description}>Mangificient discord bot that does blah blah blah...</p>

      <div>
        <a href={process.env.DISCORD_URL} className={styles.action_button} role="button">
          Log me in
        </a>
      </div>
    </>
  )
}
