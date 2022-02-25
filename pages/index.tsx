import { GetStaticProps } from 'next'
import React from 'react'
import Head from 'next/head'

import Hero from '../components/hero'
import About from '../components/about/about'

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cláudio Dantas</title>
        <meta name="description" content="Claudio`s portfolio main page"></meta>
      </Head>
      <Hero />
      <About />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/fetch-tecs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log(data)
  return {
    props: {
      tecs: data
    }
  }
}

export default HomePage
