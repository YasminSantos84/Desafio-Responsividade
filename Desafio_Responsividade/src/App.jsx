import { useState } from 'react'
import './App.css'
import { Canal } from './components/Canal/Canal'
import { Comentario } from './components/Comentarios/Comentario'
import { BoxVideo } from './components/Exibicao/BoxVideo/BoxVideo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canal/>
      <Comentario/>
      <BoxVideo/>
    </>
  )
}

export default App
