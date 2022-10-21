import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import CharacterInfo from './CharacterInfo'
import {useSelector} from 'react-redux'

const TargetRick = () => {
const [Infomation, setInfomation] = useState()
const searchId=useSelector(res=>res.idDimencion)

const idRandom=Math.floor(Math.random()*126)

useEffect(() => {
  axios.get(`https://rickandmortyapi.com/api/location/${idRandom}`)
  .then(res=>setInfomation(res?.data))
  }, [])

useEffect(() => {
  if(searchId){
  axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
  .then(res=>setInfomation(res?.data))
  }
}, [searchId])



  const AllResidents=Infomation?.residents?.length

return (
    <div className='targetRicks'>
        <div className='dimencionLista'>
          <ul><b>Nombre:</b>{Infomation?.name}</ul>
          <ul><b>Tipo:</b>{Infomation?.type}</ul>
          <ul><b>Dimencion: </b>{Infomation?.dimension}</ul>
          <ul><b>Poblacion: </b>{AllResidents}</ul> 
          <ul><b>Dimencio : </b>{Infomation?.id}</ul> 
        </div>
<div className='contentarget'>       
   {
          Infomation?.residents?.map(Character=>(
            <CharacterInfo
            Character={Character}
            key={Character}
            />
          ))
        }
       
     </div>   
    </div>
  )
}

export default TargetRick

