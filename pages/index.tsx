import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import ActionButton from '../components/ActionButton'
import Clock from '../components/Clock'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  const start = useCallback(() => { setActive(true) }, [],)

  const stop = useCallback(() => { setActive(false); setTime(0) }, [],)

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [time, active]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | WPS Timer</title>
      </Head>
      <div className={styles.contentArea}>
        <Clock time={time} />
      </div>
      <ActionButton start={start} stop={stop} active={active} setTime={setTime} />
      <footer>© 2021 - Willian Pacheco Silva</footer>
    </div>
  )
}

export default Home
