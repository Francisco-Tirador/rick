import React from 'react'
// import useApiChar from './CustomHuks/useApiChar'
import axios from "axios"
import { useState,useEffect } from "react"
// import useApi from './CustomHuks/useApi'


const CharacterInfo = ({Character}) => {

  
  
 
  // const Character=useApi() 
    const [Ricks, setRicks] = useState()
    const [Loand, setLoand] = useState(true)


    useEffect(() => {
        const URL=Character?.residents
        

        axios.get(URL)
        .then(api=>{setRicks(api?.data)
                setLoand(false)
        })

      
    }, [])
    console.log(Ricks)


// const {Ricks}=useApiChar()

  return (
    <div>
<h2>{Ricks?.name}</h2>
    </div>
  )
}

export default CharacterInfo