import React from 'react'
import style from './SkillsCard.module.css'
export default function SkillsCard({name,properties}) {
  return (
      <div className={style.card}>
        <h2>{name}</h2>
     <div className={style.contentDiv}>
     {properties.map((prop,index)=>(
      <div key={prop} className={style.row}> 
      <p>{prop}</p>
      <img  className={style.tick} src={process.env.PUBLIC_URL + '/Assets/skills/tick.png' }  alt="checked" />
     </div>
     ))} 
     </div>
     
    </div>
  )
}
