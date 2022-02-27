import React from 'react'

import LinkList from './links/link-list'
import classes from './hero.module.css'

const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <p className={classes['hero__name--abs']}>Olá, eu sou</p>
      <h1 className={classes['hero__name']}>CLÁUDIO DANTAS</h1>
      <p className={classes['hero__occuppation']}>Desenvolvedor Web</p>
      <LinkList />
    </section>
  )
}

export default Hero
