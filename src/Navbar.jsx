import { Menu } from './Menu'
import { useState } from 'react'
export function Navbar(){
    
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
        <div id='navbar'>
<div class="background">
  <button class="menu__icon" onClick={handleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
<div id='tituloNav'>Projeto</div>
<div id='abelhinha'><img src="" alt="" /></div>
</div>
{menubar && <Menu/>}
</>
)
}