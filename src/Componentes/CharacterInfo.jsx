import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react"



const CharacterInfo = ({Character}) => {

  const [URL, setURL] = useState()
  const [Loand, setLoand] = useState(true)

  useEffect(() => {
    
    axios.get(Character)
    .then(
      url=>{
        setURL(url?.data)
        setLoand(false)
      }
    )
  }, [])
  
 
  return (
    <div className='individual'>
<img className='imgIndividual' src={URL?.image} alt="" />
<h2>{URL?.name}</h2>
    
      <div className='contenStatus'><p>{URL?.status} <div className='circleStatus'></div></p> </div>
   
    <div className='textInd'>
    <ul><b>Origin  </b>{URL?.origin.name}</ul>
    <ul><b>Episodes where apper  </b>{URL?.episode.length}</ul>
    <ul><b></b></ul>
    
    </div>
    
    </div>
  )
  }

export default CharacterInfo