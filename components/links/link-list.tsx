import React from 'react'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsGithub } from 'react-icons/bs'

import classes from './link-list.module.css'
import Link from 'next/link'

const LinkList: React.FC = () => {
  return (
    <ul className={classes.links}>
      <li>
        <Link href="https://www.facebook.com/claudio.dantas.1253/">
          <a target="_blank">
            <FaFacebookF className={classes.icon} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/claudio-vitor-dantas/">
          <a target="_blank">
            <FaLinkedinIn className={classes.icon} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/claudiovdsi/">
          <a target="_blank">
            <BsInstagram className={classes.icon} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/CDInacio?tab=repositories">
          <a target="_blank">
            <BsGithub className={classes.icon} />
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default LinkList
