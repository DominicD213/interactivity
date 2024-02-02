import React from 'react'
import MainOBJ from '../components/mainOBJ'
import { CORE_CONCEPTS } from '../data'

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul id = 'core-concepts ul'>  
        {CORE_CONCEPTS.map((item)=> <li><MainOBJ key={item.title}{...item}/></li>)}
        </ul>
      </section>
  )
}

export default CoreConcepts