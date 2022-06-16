import React from 'react'
import CharacterInfo from './CharacterInfo'

const TargetRick = ({Character,e }) => {

const tol=Character?.residents?.length


 
 



return (
    <div className='targetRicks'>
        <div className='dimencionLista'>
          <ul>
          <li><span>Nombre  : </span>{Character?.name}</li>
          <li><span>Tipo  : </span>{Character?.type}</li>
          <li><span>Dimencion  : </span>{Character?.dimension}</li>
          <li><span>Poblacion  : </span>{tol}</li>
        </ul>
        </div>
<div className='contentarget'>       
   {
          e?.map(Character=>(
            <CharacterInfo
            Character={Character.link}
            key={Character.id}
            />
          ))
        }
       
     </div>   
    </div>
  )
}

export default TargetRick