import Tucas from "./Relogio";
import Cards from "./cards";
export default function Rotas(){
    return(
     <>
        <div id="ContainerRotas">
        <div id="titulo">
        <p id="titulorotas">O que foi feito</p>
        <Tucas/>
        </div>
        <div id="containerRotas">

        <Cards titulo="Plantas" img1="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" img2="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" img3="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" rotas="/plantas"/>
        <Cards titulo="Pinturas" img1="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" img2="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" img3="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" rotas="/pinturas"/>
        <Cards titulo="Processos" img1="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" img2="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" img3="https://logodetimes.com/times/corinthians/logo-corinthians-1536.png" rotas="/processos"/>
        </div>
     </div>
     </>
    )
}