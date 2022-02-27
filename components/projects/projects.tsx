import Image from 'next/image'
import React from 'react'

import { FaHtml5, FaReact } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

import { GiWheat } from 'react-icons/gi'

import classes from './projects.module.css'
import Link from 'next/link'

const Projects: React.FC = () => {
  return (
    <section id="projects" className={classes.container}>
      <h1 className={classes['section__title']}>
        <span>Proje</span>tos
      </h1>
      <div className={classes.projects}>
        <div className={classes['projects__icon']}>
          <GiWheat />
        </div>
        <div className={classes['projects__detail']}>
          <h1 className={classes['projects__title']}>Quitandas da Ana Mares</h1>
          <p className={classes['projects__description']}>
            O Quitandas da Ana Mares é um site com o objetivo de divulgar os
            produtos de uma Quitandaria, informações sobre a marca e
            localizacao; sem a possibilidiade de realizar a compra propriamente
            dita.
          </p>
          <h2>Feito com</h2>
          <div className={classes['projects__tecnologies']}>
            <span style={{ padding: '0 10px' }}>
              <FaHtml5 size={40} />
            </span>
            <span style={{ padding: '0 10px' }}>
              <DiCss3 size={40} />
            </span>
            <span style={{ padding: '0 10px' }}>
              <FaReact size={40} />
            </span>
            <span style={{ padding: '0 10px' }}>
              <SiNextdotjs size={40} />
            </span>
          </div>
          <div className={classes['projects__links']}>
            <p>
              <Link href="https://quitandas-da-ana-mares.vercel.app/">
                <a target="_blank">Link</a>
              </Link>{' '}
              |{' '}
              <Link href="https://github.com/CDInacio/project-1.git">
                <a target="_blank">Código</a>
              </Link>
            </p>
          </div>
        </div>
        <div className={classes['projects__image']}>
          <Image
            objectFit="cover"
            alt="#"
            width={500}
            height={500}
            src="/images/hero5.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
