import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react"

const CharacterInfo = ({Character}) => {
const [character, setCharacter] = useState()
  const [Loand, setLoand] = useState(true)

  useEffect(() => {
    axios.get(Character)
    .then(
      url=>{
        setCharacter(url?.data)
        setLoand(false)
      }
    )
  }, [])
  
console.log(character)
  return (
    <div className='individual'>
       <div className='Face Back'>
        <h2>{character?.id}</h2>
        <div className='Information'>
        <b>Origen : <p>{character?.origin?.name}</p></b>
      <b>Episodes : <p>{character?.episode?.length}</p></b>
      <b>Gender : <p>{character?.gender}</p></b>
      <b>Species : <p>{character?.species}</p></b>
      <b>Type : <p>{character?.type}</p></b>
        </div>
     
      </div>
      <div className='Face Front'>
      <img className='imgIndividual' src={character?.image} alt="" />
      <div className='status'>
        <div className={`circleStatus ${character?.status==='Alive'?'statusLive':
        character?.status==='Dead'?'statusDead':
        character?.status==='unknown'&&'statusUnknown'}`}>
          </div>{character?.status}</div>
      <h3>{character?.name}</h3>
      </div>
     
   </div>
  )
  }

export default CharacterInfo


  