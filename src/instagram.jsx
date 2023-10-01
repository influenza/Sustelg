import BotaoDefault from "./BotaoDefault";
import SvgInsta1 from "./InstaSvg1";
import "./Instagram.css"
export default function Instagram(){
    return(
        <>
        <div id="ContainerInstagram">
        <h2 id="tireafoto">Tire sua Foto!!</h2>
            <div id="FtProjetoInsta">
                
            </div>
    <div id="Texto1Insta">
        Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben
        Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben
        Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben Gabriel Ben
        </div>
       <p id="NossoInsta"> NOSSO INSTAGRAM: 2eetelg </p>

        <div id="botao1Ins">
        <BotaoDefault rotas={"https://www.instagram.com/2eeteclg/"}/> 
        </div>
        <div id="selfie">
        <SvgInsta1/>
        </div>
    <h2 id="Titulo1">Tire a sua Foto em nosso projeto!!</h2>
    <div id="Insta2">
    </div>
    </div>
    </> 
    )
}