import Head from 'next/head'

import Hero from '../components/hero'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Cláudio Dantas</title>
        <meta name="description" content="Claudio`s portfolio main page"></meta>
      </Head>
      <Hero />
    </>
  )
}

export default HomePage
