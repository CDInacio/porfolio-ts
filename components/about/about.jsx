import classes from './about.module.css';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes['about__sectionOne']}>
        <p className={classes['about__title']}><span>Sobre mim</span></p>
        <div className={classes['about__image']}>

        </div>
      </div>
      <div className={classes['about__description']}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id  est laborum.</p>
        <div className={classes['about__personal']}>
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
        </div>
      </div>
    </section>
  )
}

export default About