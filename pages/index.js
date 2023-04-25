import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fact Certification Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Fact Certification Network" />
        <p className="description">
        <p>If you see this page, the project is still under construction.</p>
        <p>Thank you for visiting.</p>
        <p><i>Kaled Aljebur</i></p>

          {/* <code>pages/index.js</code> */}
        </p>
      </main>

      <Footer />
    </div>
  )
}
