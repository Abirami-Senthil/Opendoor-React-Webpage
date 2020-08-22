import Head from 'next/head'
import Layout from '../components/layout'
import Intro from '../components/intro/intro'
import Details from '../components/details/details'
import Procedure from '../components/procedure/procedure'
import styles from './Index.module.css'

export default function Home() {
  return (
    <div className="container">
      <div className={styles.box}>
        <Layout>
          <p className={styles.navpad}></p>
          <Intro />
          <p className={styles.p}></p>
          <Details />
          <p className={styles.p}></p>
          <Procedure />
          <p className={styles.p}></p>
        </Layout>
      </div>
    </div>
  )
}
