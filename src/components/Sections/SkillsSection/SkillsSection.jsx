import React from 'react'
import style from './SkillsSection.module.css'
import SkillsCard from '../../SkillsCard/SkillsCard'
export default function SkillsSection({skills,type}) {
  const chunkArray = (items, size) => {
    return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
        items.slice(index * size, index * size + size)
    );
};
const rows = chunkArray(skills, 3);
console.log(rows)
  return (
   <div className={style.main}> 
   <div className={style.mainDiv}>
    <h1 >{type}</h1>
   {
        rows.map((row, index) => (
            <div className={style.row}>
                {row.map((item,index)=>(
              <SkillsCard name = {item.name} properties = {item.properties}/>
))}
            </div>))
    }
 
</div></div>
  )
}
