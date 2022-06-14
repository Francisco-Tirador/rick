import React from 'react'
import CharacterInfo from './CharacterInfo'
import useApi from './CustomHuks/useApi'
// import useReco from './CustomHuks/useReco'



const TargetRick = () => {


const {Character,Loand,e,text}=useApi()

const tol=Character?.residents?.length


// const {e}=useReco()
// const retorno=e
console.log(text)



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
            Character={Character}
            URL={Character}
            

            />
          ))
        }
       
     </div>   
    </div>
  )
}

export default TargetRick