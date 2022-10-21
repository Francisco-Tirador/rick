
import './App.css'
import TargetRick from './Componentes/TargetRick'
import Buscador from './Componentes/Buscador'

function App() {


  return (
    <div className="App">
     
    <div><img className='imgPrincipal' src="https://areajugones.sport.es/wp-content/uploads/2019/11/Rick.jpg.webp" alt="" /></div>
      <Buscador />
      <TargetRick  />
    </div>
  )
}

export default App
