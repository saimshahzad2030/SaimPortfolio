import React from 'react'
import style from './Home.module.css'
import {Link} from 'react-router-dom'
export default function Home() {
     const imageContext = require.context('../../../public/Assets', false, /\.(png)$/);
  const imageNames = imageContext.keys().map((key) => key.replace('./', ''));
      const urls = ['https://github.com/saimshahzad2030','https://www.linkedin.com/in/saim-shahzad-476bba25b/','https://twitter.com/saimshehzad10']
      const items = [...imageNames]
  return (
    <div className={style.mainDiv}>
      <div className={style.leftChild}>
        <h1 className={style.h1}>Sophisticated</h1>
        <h2 className={style.h2}>Experience</h2>
        <p className={style.p}>Hi, I'm Saim, I'm Currently undergraduate, it's my last year of Bachelors in Computer Science and I'm passionate about Programming, Web Development and newly coming technologies. Explore my site to discover my achievements my goals and also feel free to contact me for any queries and questions regarding building the website.</p>
     <ul className={`${style.nav_ul} ${style.socials}`}>
        
          {items.map((item,index) => (
            <li className={style.socialList} key={item}>
              <Link to={`${urls[index]}`} className={style.anchor}>
                <img className={style.socialImages} src={process.env.PUBLIC_URL + '/Assets/' + item} alt='fb Logo' />
              </Link>
            </li>
          ))}
         
      </ul>
      </div>
      <div className={style.rightChild}>
      <img className={style.logoImg} src={process.env.PUBLIC_URL + '/Assets/logo/profile2.png'} alt="logo" />
        
      </div>
    </div>
  )
}
