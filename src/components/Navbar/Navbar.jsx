import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {FaBars} from 'react-icons/fa'
export default function Navbar({selectedLink}) {

  const [display,setDisplay] = React.useState(null)
  const reference = React.useRef('saim')
      const clickHandler = ()=>{
        if (display === 'flex') {
          reference.current.style.display = 'none';
          setDisplay('none');
        } else {
          reference.current.style.display = 'flex';
          setDisplay('flex');
        }
        
      }
        React.useEffect(()=>
            {
              const handleResize = ()=>{
                const screenWidth = window.innerWidth;
              if (screenWidth >= 750) {
                reference.current.style.display = 'flex';
              } else {
                reference.current.style.display = 'none'; // or any other desired style
              }
              
              }
              handleResize();
              window.addEventListener('resize', handleResize);

              // Cleanup on component unmount
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, [reference])
        
  return (
    <nav className={style.navbar}>
      <div className={style.logoDiv}>
        <div className={style.logo}>
          <img className={style.logoImg} src={process.env.PUBLIC_URL + '/Assets/logo/profile.png'} alt="logo" />
          <h1 className={style.logoHeading}>Saim</h1>

        </div>
        <button className={style.hideButton} onClick={clickHandler}>
        <FaBars size={30} />
        </button>
      </div>
      <div className={style.linkDiv} ref={reference}>
        <ul className={`${style.nav_ul} ${style.links}`}>
          <li><Link  className={style.link} to={'/'}>Home</Link></li>
          <li><Link  className={style.link} to={'/skills'}>Skills</Link></li>
          <li><Link  className={style.link} to={'/projects'}>Projects</Link></li>
          <li><Link  className={style.link} to='/faqs'>Faq</Link></li>
        </ul>
        {/* <ul className={`${style.nav_ul} ${style.socials}`}>
        
          {items.map((item,index) => (
            <li className={style.socialList} key={item}>
              <Link to={`${urls[index]}`} className={style.anchor}>
                <img className={style.socialImages} src={process.env.PUBLIC_URL + '/Assets/' + item} alt='fb Logo' />
              </Link>
            </li>
          ))}
         
      </ul> */}
        <ul className={`${style.nav_ul} ${style.buttons}`}>
          <li><Link to={'https://www.fiverr.com/saimshehzad_ai?up_rollout=true'}  ><Button variant="outlined"  sx={{ marginLeft:'10px',
    fontWeight:'bold',
    color:'  rgb(42, 165, 71);',
    border:'2px  rgb(42, 165, 71) solid',
    width:'90px'}}>Fiver</Button></Link></li>
          <li><Link to={'https://www.upwork.com/freelancers/~010e966a854ef0ab32?viewMode=1'}  ><Button variant="outlined"  sx={{ marginLeft:'10px',
    fontWeight:'bold',
    color:' rgb(42, 165, 71);',
    border:'2px rgb(42, 165, 71) solid',
    width:'90px'}}>Upwork</Button></Link></li>
        </ul>
      </div>
    </nav>
  )
}
