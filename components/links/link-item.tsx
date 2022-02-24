import Link from 'next/link'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsGithub } from 'react-icons/bs'

type NameProps = {
  name: string
}

const LinkItem = ({ name }: NameProps) => {
  const SocialIcon = () => {
    if (name === 'facebook')
      return (
        <Link href="https://www.facebook.com/claudio.dantas.1253/" passHref>
          <a target="_blank">
            <FaFacebookF size={25} color="#cccccc" />
          </a>
        </Link>
      )
    if (name === 'instagram')
      return (
        <Link href="https://www.instagram.com/claudiovdsi/" passHref>
          <a target="_blank">
            <BsInstagram size={25} color="#cccccc" />
          </a>
        </Link>
      )
    if (name === 'github')
      return (
        <Link href="https://github.com/CDInacio" passHref>
          <a target="_blank">
            <BsGithub size={25} color="#cccccc" />
          </a>
        </Link>
      )
    if (props.name === 'linkedin')
      return (
        <Link href="https://www.linkedin.com/in/claudio-vitor-dantas/" passHref>
          <a target="_blank">
            <FaLinkedinIn size={25} color="#cccccc" />
          </a>
        </Link>
      )
  }

  return <SocialIcon />
}

export default LinkItem
