import React from 'react'
import Head from 'next/head'

import Hero from '../components/hero'
import About from '../components/about/about'
import Tecnologies from '../components/tecnologies/tecnologies'
import Nav from '../components/nav/nav'
import Projects from '../components/projects/projects'
import Footer from '../components/footer/footer'

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cláudio Dantas</title>
        <meta name="description" content="Claudio`s portfolio main page"></meta>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Nav />
      <Hero />
      <About />
      <Tecnologies />
      <Projects />
      <Footer />
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetch('http://localhost:3000/api/fetch-tecs', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   const data = await response.json()
//   console.log(data)
//   return {
//     props: {
//       tecs: data
//     }
//   }
// }

export default HomePage
