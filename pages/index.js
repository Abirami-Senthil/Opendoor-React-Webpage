import Head from 'next/head'
import Layout from '../components/layout/layout'
import Intro from '../components/intro/intro'
import Details from '../components/details/details'
import Procedure from '../components/procedure/procedure'
import Header from '../components/header/header'
import styles from './Index.module.css'

export default function Home() {
  return (
    <div className={styles.box}>
      <Header />
      <Layout>
        <div className="container">
          <p className={styles.navpad}></p>
          <Intro />
          <p className={styles.p}></p>
          <Details />
          <p className={styles.p}></p>
          <Procedure />
          <p className={styles.p}></p>
        </div>
      </Layout>
    </div>
  )
}
