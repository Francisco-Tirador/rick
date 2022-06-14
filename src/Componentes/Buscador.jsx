import React from 'react'
import useApi from './CustomHuks/useApi'
// import useBuscador from './CustomHuks/useBuscador'


const Buscador = () => {


    // const [text, settext] = useState()

    //    const setTExt=e=>{
    //     e.preventDefault()
    //     settext(e.target.children[0].value)

    //    }
    // const {useEffect}=useApi()
  const {text,setTExt,}=useApi()
console.log(text)
  return (
    <div>
<form onSubmit={setTExt} action="">
        <input type="number" />
    
        <button  >Hola yo cambiare el valor</button>
    <h3>{text}</h3>
    </form>
    <h3>{text}</h3>
    </div>
  ) 
}




export default Buscador