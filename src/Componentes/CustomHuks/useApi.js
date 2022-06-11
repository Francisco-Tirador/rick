import { useState,useEffect} from 'react'
import axios from 'axios'


const useApi = () => {

    const [Character, setCharacter] = useState()
    const [Loand, setLoand] = useState(true)

    const id=Math.floor(Math.random()*126)

useEffect(() => {
    const URL=`https://rickandmortyapi.com/api/location/${id}`
axios.get(URL)
    .then(api=>{setCharacter(api?.data)
        setLoand(false)
     })
}, [])

console.log(Character)
  return {Character,Loand, id}
    
  
}

export default useApi


