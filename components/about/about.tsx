import Image from 'next/image'
import React from 'react'

import classes from './about.module.css'

const About: React.FC = () => {
  return (
    <section className={classes.about}>
      <div className={classes['about__sectionOne']}>
        <div className={classes['about__title']}>
          <h1>
            <span>SOBRE</span> MIM
          </h1>
        </div>
        <div className={classes['about__image']}>
          <Image
            alt="claudio dantas"
            src="/images/me.jpg"
            width={450}
            height={350}
            objectFit="cover"
          />
        </div>
      </div>
      <div className={classes['about__description']}>
        <p>
          Olá, me chamo Cláudio Vitor Dantas e estou atualmente cursando
          Sistemas de Informação na Universidade Federal de Ouro Preto (UFOP),
          campos João Monlevade. Meu primeiro contato com a programação
          aconteceu na faculdade, no início de 2019, com a linguagem C. Somente
          em 2021 entrei em contato pela primeira vez com a programação Web,
          estudando o básico, como HTML e CSS, e indo até tópicos mais
          avançados, como REST API, React, Nodejs, Next e etc.
        </p>
        {/* <div className={classes['about__personal']}>
          <div className={classes['about__info']}>
            <span>Nome:</span>
            <p>Cláudio Vitor Dantas</p>
          </div>
          <div className={classes['about__info']}>
            <span>Idade:</span>
            <p>25</p>
          </div>
          <div className={classes['about__info']}>
            <span>Endereço:</span>
            <p>João Monlevade, MG</p>
          </div>
          <div className={classes['about__info']}>
            <span>Email:</span>
            <p>claudiodantas1996@gmail.com</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About
