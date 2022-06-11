import useApi from "./useApi"

const useReco = () => {

    const {Character}=useApi()

      let e =[]
      for(let i=0;i<Character?.residents?.length;i++){
        const ra=i
         e.push(ra)
    
      }
      
  return e
  }

export default useReco