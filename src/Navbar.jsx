import Abelhinha from './Abelha'
import { Menu } from './Menu'
import { useState } from 'react'
import "./navbar.css"
export function Navbar(props){
    const id2= props.id2
    const Abelha = props.Abelha
    const [menubar,setMenubar] = useState(false)
    function handleMenu(){
        if(menubar == false){
          setMenubar(true)
        } else{
          setMenubar(false)
        }
      }
    return(
        <>
        <div id='navbar' className={id2}>
<div class="background">
  <button class="menu__icon" onClick={handleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
<div id='tituloNav'>EcoSistema</div>
<div id='divpai'>
<div id='divS'></div>
<div id='abelinha'><Abelhinha Abelha={Abelha}/></div>
</div>
</div>
{menubar && <Menu/>}
</>
)
}