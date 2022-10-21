import React from 'react'
import {useDispatch}from 'react-redux'
import { newId } from '../store/slice/dimencion.slice'
const Buscador = () => {

const dispach=useDispatch()
const newValor=e=>{
    e.preventDefault()
    dispach(newId(e.target.children[0].value))
}
  return (
    <div className='Form'>
    <form onSubmit={newValor} >
        <input type="number" max={126}min={1} placeholder='Number dimencion'/>
       <button>BUSCAR</button>
    </form>
    </div>
  ) 
}


export default Buscador