import React from 'react'
import style from './Skills.module.css'
import SkillsSection from '../Sections/SkillsSection/SkillsSection'
// import SideSkills from '../SideSkills/SideSkills'
export default function Skills() {
    const skills = [{name:'React',properties:['1 year experience','Scalability', 'Responsiveness','Dynamic App']},{name:'Express/Node',properties:['8 Month experience','Authentication' ,'Authorization','Scalabilty']},{name:'Mern Stack',properties:['1 year experience','Scalable' ,'React','Node','Sql & Mongodb']}]
    const sideSkills = [{name:'AWS',properties:['Exp: 6 month ','EC2', 'S3 Bucket','VPCs','Beanstalk','cloud 9']},{name:'.Net MVC',properties:['Models' ,'Views','Controllers']},{name:'AI/ML',properties:['Knn' ,'Naive Bayes','CNN','Neural Networks','LSTM','Regression']},{name:'Graphic Designing',properties:['Illustrator','Photoshop' ,'Adobe XD','Premiere Pro']}]

  return (
    <div className={style.column}>
      <SkillsSection  skills={skills} type = {'Skills'}/>
      <SkillsSection  skills={sideSkills} type = {'Side Skills'}/>
     
    </div>
  )
}
