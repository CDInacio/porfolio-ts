import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import classes from './nav.module.css'
import { BsBorderBottom } from 'react-icons/bs'

const Nav: React.FC = () => {
  const [changed, setChanged] = useState<boolean>(false)
  const [about, setAbout] = useState<boolean>(false)
  const [tecnologies, setTecnologies] = useState<boolean>(false)
  const [projects, setProjects] = useState<boolean>(false)

  const changeNavColorHandler = () => {
    if (window.scrollY >= 400) {
      console.log(window.scrollY)
      setChanged(true)
    } else {
      setChanged(false)
    }

    if (window.scrollY >= 900 && window.scrollY <= 1450) {
      setAbout(true)
    } else {
      setAbout(false)
    }

    if (window.scrollY >= 1450 && window.scrollY <= 2281) {
      setTecnologies(true)
    } else {
      setTecnologies(false)
    }

    if (window.scrollY >= 2281 && window.screenY <= 2793) {
      setProjects(true)
    } else {
      setProjects(false)
    }
  }

  useEffect(() => {
    changeNavColorHandler()
    window.addEventListener('scroll', changeNavColorHandler)
  })

  return (
    <>
      <div className={`${classes.navbar}`}>
        <div className={`${classes.container} ${classes['nav-container']}`}>
          <input className={classes.checkbox} type="checkbox" name="" id="" />
          <div className={classes['hamburger-lines']}>
            <span className={`${classes.line} ${classes.line1}`}></span>
            <span className={`${classes.line} ${classes.line2}`}></span>
            <span className={`${classes.line} ${classes.line3}`}></span>
          </div>

          <div className={classes['menu-items']}>
            <Link href="#about">
              <li>
                <a>Sobre</a>
              </li>
            </Link>
            <Link href="#tecs">
              <li>
                <a>Tecnologias</a>
              </li>
            </Link>
            <Link href="#projects">
              <li>
                <a>Projetos</a>
              </li>
            </Link>
          </div>
        </div>
      </div>
      <nav className={`${classes.nav} ${changed && classes.active}`}>
        <ul className={classes['nav__links']}>
          <li
            className={`${classes['nav__link']} ${
              about && classes.highlighted
            }`}
          >
            <Link href="#about">Sobre</Link>
          </li>
          <li
            className={`${classes['nav__link']} ${
              tecnologies && classes.highlighted
            }`}
          >
            <Link href="#tecs">Tecnologias</Link>
          </li>
          <li
            className={`${classes['nav__link']} ${
              projects && classes.highlighted
            }`}
          >
            <Link href="#projects">Projetos</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
