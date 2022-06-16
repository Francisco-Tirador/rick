import React from 'react'

const Buscador = ({ setTExt,text,getApi}) => {

  return (
    <div>
<form onSubmit={setTExt} action="">
        <input type="number"/>
    
        <button onClick={getApi}>Hola yo cambiare el valor</button>
    <h3>{text}</h3>
    </form>
    <h3>{text}</h3>
    </div>
  ) 
}


export default Buscador