
    
import { useState,useEffect} from 'react'
import axios from 'axios'



const useApi = () => {
 let camb="4"
    const [text, settext] = useState(camb)

    const setTExt=e=>{
     e.preventDefault()
     settext(e.target.children[0].value)

    }

    const [Character, setCharacter] = useState()
    // const [Loand, setLoand] = useState(true)

    const id=Math.floor(Math.random()*126)
   
    const la=`https://rickandmortyapi.com/api/location/${camb}`
useEffect(() => {
    let URL=`https://rickandmortyapi.com/api/location/${camb}`
axios.get(URL)
    .then(api=>{setCharacter(api?.data)
        // setLoand(false)
     })
}, [])

console.log(Character)

console.log(text)
let e =[]
for(let i=0;i<Character?.residents?.length;i++){
//   const ra=[{URL:Character?.residents?.[i]}]//crea un objeto del url dividido en objetos
const ra=Character?.residents[i]
   e.push(ra)

}

    console.log(text)


  return {Character, id, e,text,setTExt}
    
  
}

export default useApi