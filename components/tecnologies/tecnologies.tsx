import React from 'react'

import { FaFigma, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { DiMongodb, DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiNextdotjs } from 'react-icons/si'
import { BsFillGearFill } from 'react-icons/bs'

import classes from './tecnologies.module.css'

const Tecnologies: React.FC = () => {
  return (
    <section id="tecs" className={classes.container}>
      <h1 className={classes['section__title']}>
        <span>TECNOL</span>OGIAS
      </h1>
      <p className={classes['section__subtitle']}>
        Tecnologias que uso em projetos pessoais e atividades acadêmicas
      </p>
      <div className={classes.tecnologies}>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__figma ']}
        >
          <span className={classes['tecnologies--color']}>
            <FaFigma className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>FIGMA</p>
        </div>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__html5']}
        >
          <span className={classes['tecnologies--color']}>
            <FaHtml5 className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>HTML5</p>
        </div>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__css3']}
        >
          <span className={classes['tecnologies--color']}>
            <DiCss3 className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>CSS3</p>
        </div>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__js']}
        >
          <span className={classes['tecnologies--color']}>
            <IoLogoJavascript className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>JAVASCRIPT</p>
        </div>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__node']}
        >
          <span className={classes['tecnologies--color']}>
            <FaNodeJs className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>NODE.JS</p>
        </div>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__mongodb']}
        >
          <span className={classes['tecnologies--color']}>
            <DiMongodb className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>MONGODB</p>
        </div>
        <div className={classes['tecnologies__react']}>
          <span className={classes['tecnologies--color']}>
            <FaReact className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>REACT</p>
        </div>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__next']}
        >
          <span className={classes['tecnologies--color']}>
            <SiNextdotjs className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>NEXT.jS</p>
        </div>
        <div
          style={{ padding: '0 30px' }}
          className={classes['tecnologies__next']}
        >
          <span className={classes['tecnologies--color']}>
            <BsFillGearFill className={classes['tecnologies__tec']} />
          </span>
          <p style={{ textAlign: 'center' }}>REST API</p>
        </div>
      </div>
    </section>
  )
}

export default Tecnologies
