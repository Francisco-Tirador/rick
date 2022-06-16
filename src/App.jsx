
import './App.css'
import TargetRick from './Componentes/TargetRick'
import Buscador from './Componentes/Buscador'
import axios from 'axios'
import { useState,useEffect } from 'react'


function App() {

const id=Math.floor(Math.random()*126)
  const [text, settext] = useState(id)

  const setTExt=e=>{
   e.preventDefault()
   settext(e.target.children[0].value)

  }

  const [Character, setCharacter] = useState()
  const [Loand, setLoand] = useState(true)

  
 
useEffect(() => {
getApi()
}, [])
let URL=`https://rickandmortyapi.com/api/location/${text}`
const getApi=()=>{
  
  axios.get(URL)
    .then(api=>{setCharacter(api?.data)
        setLoand(false)
     } )
    .catch(err=>console.log(err))
    // .finally(()=>getApi())
}



console.log(Character)
//nos da crea un arreglo para cada url
let e =[]
for(let i=0;i<Character?.residents?.length;i++){

  let ar=Character?.residents[i].substr(-3)
  let le={link:Character?.residents[i],id:ar}
  // const le=[Character?.residents[i]]
  
 e.push(le)

}
console.log(e)
  return (
    <div className="App">
      <div><img className='imgPrincipal' src="https://areajugones.sport.es/wp-content/uploads/2019/11/Rick.jpg.webp" alt="" /></div>
      <Buscador setTExt={setTExt} text={text} getApi={getApi}/>
      <TargetRick Character={Character} e={e}  />
    </div>
  )
}

export default App
