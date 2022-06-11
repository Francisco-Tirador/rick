import axios from "axios"
import { useState,useEffect } from "react"
import useApi from "./useApi"
import useReco from "./useReco"



const useApiChar = () => {
    const{Character}=useApi()
    const {e}=useReco()

    const [Ricks, setRicks] = useState()
    const [Loand, setLoand] = useState(true)


    useEffect(() => {
        const URL=Character?.residents?.[0]
        

        axios.get(URL)
        .then(api=>{setRicks(api?.data)
                setLoand(false)
        })

      
    }, [])
    console.log(Ricks)

  return {Ricks,Loand }
   
  
}

export default useApiChar