import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Menu } from './Menu'
import './App.css'

function App() {
const [menubar,setMenubar] = useState(false)

  function handleMenu(){
    if(menubar == false){
      setMenubar(true)
    } else{
      setMenubar(false)
    }
  }
  return (
    <>
<div id='navbar'>
<div class="background">
  <button class="menu__icon" onClick={handleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
<div id='tituloNav'>Projeto</div>
</div>
{menubar && <Menu/>}
    </>
  )
}

export default App
