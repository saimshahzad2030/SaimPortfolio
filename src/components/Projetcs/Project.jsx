import React from 'react'
import style from './Project.module.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Project() {
    const list = [
        {name:'Restaurant App (Deployed)',description:'Introducing Restaurant Application, a cutting-edge mobile application crafted with precision on the React framework, featuring a bespoke design tailored for a seamless user experience. Dive into the innovative world of this app, where each of its four meticulously designed pages opens up a new realm of possibilities.',img:'restaurant.jpg',deployed:true,developedBy:[{name:'React',logo:'react.png'}],deployedLink:'https://65676e7fb171ab3fa350899b--fancy-pastelito-7d6a70.netlify.app/',githubLink:'https://github.com/saimshahzad2030/Restaurant-Portfolio.git'},
        {name:'Book Library app (Backend)',description:'Introducing Book Library App, a robust and secure backend application built on the powerful Node.js and Express.js frameworks. Elevate your development experience with a feature-rich backend that seamlessly integrates authentication, authorization, and database functionalities. Authentication and Authorization: Immerse yourself in a world of secure user management with our app. Our authentication system ensures that user data is protected while providing a smooth and user-friendly login and signup experience.'
        ,img:'library.jpg'
        ,deployed:false,developedBy:[{name:'Node js',logo:'node.png'},{name:'Mongo db',logo:'mongodb.png'}],githubLink:'https://github.com/saimshahzad2030/MidTermBookLib.git'}
        

]
    const deployed = true;
  return (
    <div className={style.mainDiv}>
        <h1>Projects</h1>
        {list.map((item,index)=>(
                  <>
                    <div className={style.line}></div>
                    <div className={style.project}>
                    <div className={` ${style.child} ${style.imgDiv} `}>
                        <img className={style.img} src={process.env.PUBLIC_URL + '/Assets/projects/' + item.img} alt="" />
                    </div>
                    <div className={` ${style.child} ${style.textDiv} `}>
                        <h2>{item.name}</h2>
                        <p style={{textAlign:'center'}}>{item.description}</p>
                        <div className={style.centerDiv}>
                            <h4>Developed Using:</h4>
                            <ul>
                                {item.developedBy.map((list,index)=>(
                                    <li className={style.list}>
                                    <img src={process.env.PUBLIC_URL + '/Assets/projects/' + list.logo} alt="" />
                                    <p style={{color:'blue'}}>{list.name}</p>
                                </li>
                               
                                ))}
                            </ul>
                        </div>
                        <div className={style.btnDiv}>
                        {item.deployed && <Link to = {item.deployedLink}><Button variant='outlined'>Website</Button></Link>}
                        <Link to = {item.githubLink}><Button variant='outlined' sx={{marginLeft:deployed===true?'20px':''}}>Github</Button></Link>
                        
                        </div>
                        
                    </div>
                   
                    </div>
                  
                </>
        ))}
    </div>
  )
}
