import Head from 'next/head'
import Layout from '../../components/layout/layout'
import styles from './Index.module.css'
import CostDetails from '../../components/costDetails/costdetails'
import Savings from '../../components/savings/savings'

export default function DetailsPage() {
  return (
    <div className={styles.box}>
      <Layout>
        <div className="container">
          <CostDetails />
          <Savings />
        </div>
      </Layout>
    </div>
  )
}
