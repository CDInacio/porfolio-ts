import React from 'react'
import Image from 'next/image'

import classes from './tecnologies.module.css'

const Tecnologies: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.tecnologies}>
        <div className={classes['tecnologies__html5']}>
          <div className={classes['tecnologies__html5--img']}>
            <Image width={50} height={58} alt="html5" src="/logos/html5.png" />
          </div>
        </div>
        <div className={classes['tecnologies__css3']}>
          <div className={classes['tecnologies__css3--img']}>
            <Image width={53} height={58} alt="css3" src="/logos/css3.png" />
          </div>
        </div>
        <div className={classes['tecnologies__reactjs']}>
          <div className={classes['tecnologies__reactjs--img']}>
            <Image
              width={56}
              height={58}
              alt="html5"
              src="/logos/reactjs.png"
            />
          </div>
        </div>
        <div className={classes['tecnologies__nextjs']}>
          <div className={classes['tecnologies__nextjs--img']}>
            <Image
              width={53}
              height={58}
              alt="nextjs"
              src="/logos/nextjs.png"
            />
          </div>{' '}
        </div>
        <div className={classes['tecnologies__nodejs']}>
          <div className={classes['tecnologies__nodejs--img']}>
            <Image
              width={53}
              height={58}
              alt="nodejs"
              src="/logos/nodejs.png"
            />
          </div>
        </div>
        <div className={classes['tecnologies__mongodb']}>
          <div className={classes['tecnologies__mongodb--img']}>
            <Image
              width={53}
              height={58}
              alt="mongodb"
              src="/logos/mongodb.png"
            />
          </div>
        </div>
        <div className={classes['tecnologies__figma']}>
          <div className={classes['tecnologies__figma--img']}>
            <Image width={53} height={58} alt="figma" src="/logos/figma.png" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tecnologies
