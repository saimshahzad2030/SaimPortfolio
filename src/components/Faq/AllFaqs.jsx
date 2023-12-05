import React from 'react'
import SingleFaq from './SingleFaq'
import style from './AllFaq.module.css'
export default function AllFaqs() {
  return (
    
    <div className={style.allFaqDiv}>
    <h1>Frequent Ask Questions</h1>
   
   <SingleFaq />
    </div>
  )
}
