import React from 'react'
import CharacterInfo from './CharacterInfo'
import useApi from './CustomHuks/useApi'
import useReco from './CustomHuks/useReco'



const TargetRick = () => {


const {Character,Loand}=useApi()

const tol=Character?.residents?.length
console.log(tol)

const {e}=useReco()
const retorno=e

  return (
    <div className='targetRicks'>
        <ul>
          <li><span>Nombre</span>{Character?.name}</li>
          <li><span>Tipo</span>{Character?.type}</li>
          <li><span>Dimencion</span>{Character?.dimension}</li>
          <li><span>Poblacion</span>{tol}</li>
        </ul>

        {
          Character?.residents?.map(Character=>(
            <CharacterInfo
            Character={Character}
            
            key={retorno}
            

           

            />
          ))
        }
       
        
    </div>
  )
}

export default TargetRick