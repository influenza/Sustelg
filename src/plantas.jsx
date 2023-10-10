import BotaoDefault from "./BotaoDefault"
import Bromelia from "./Bromelia"
import FlorRoxa from "./FlorRoxa"
import Gazania from "./Gazania"
import Jardineira from "./Jardineira"
import PetalaRosa from "./PetalaRosa"
import "./Plantas.css"
import Arbusto from "./arbusto"
import FlorRosa from "./florRosa"
import Flora from "./flora"
import FlorAzul from "./florazul"
import Lambari from "./lambari"
import PetalasAzul from "./petalas"
import PlantasIN from "./plantasIn"
import Terra from "./terra"
import lambari1 from "./Images/31a6cf48-eb6f-4a92-82ef-464dbba75ec7a.jpeg"
import lambari2 from "./Images/05483056-5ccb-4738-9b26-086d66d803d5.jpeg"
import azulinha from "./Images/azulinhaas.jpeg"
import azulinha2 from "./Images/72909107-ecf0-4062-9857-f8b14c2d51183.jpeg"
import gazania from "./Images/a6cb3927-6095-443a-8703-3f0669e901124.jpeg"
import beijapintunda from "./Images/d50e73cf-c194-4f9b-9a47-6e5ef9cbd78151.jpeg"
import beijapintada from "./Images/downloadas.jpeg"
import bromelia1 from "./Images/guzmania-a-mais-comum-das-bromelias-no-brasil-1654876245732_v2_900x50fa.jpg"
import bromelia2 from "./Images/R.jpeg"
const azulinhaas= {
    backgroundImage: `url(${azulinha})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
  const azulinhaa2= {
    backgroundImage: `url(${azulinha2})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
const Lambaro1Style = {
    backgroundImage: `url(${lambari1})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
  const Lambaro2Style = {
    backgroundImage: `url(${lambari2})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
  const GazaniaStyle = {
    backgroundImage: `url(${gazania})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
  const BeijoStyle = {
    backgroundImage: `url(${beijapintunda})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
  const Beijo2Style = {
    backgroundImage: `url(${beijapintada})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
  const BromeliaStyle1 = {
    backgroundImage: `url(${bromelia1})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
  const BromeliaStyle2 = {
    backgroundImage: `url(${bromelia2})`, // Use backticks and ${} to include a variable
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  };
export function Plantas(){
    return(
        <>
        <PlantasIN/>
        <Flora/>
        <div id="Lambari">
        <h2 id="LambariTi">Lambari</h2>
        <div id="fotoslambari">
        <div id="FtProjeto2" style={Lambaro1Style}><Lambari/></div>
        <div id="FtProjeto3" style={Lambaro2Style}><Arbusto/></div>
        </div>
        <div id="Texto4">
        Planta  bastante resistente e pode ser cultivada a pleno sol ou meia-sombra,  uma planta rústica que não exige muitos cuidados em ambientes externos.

        </div>
        <div id="botao1plantas">   <BotaoDefault rotas="https://pt.wikipedia.org/wiki/Tradescantia_zebrina"/> </div>
        </div>
        <div id="Azulzinha">
        <h2 id="Azulzinhatitulo">Azulzinha</h2>
        <div id="FtProjeto5" style={azulinhaas}><PetalasAzul/></div>
        <div id="Texto5">
            <p>Planta rústica tipicamente brasileira, sua flor tem o miolo branco e as folhas, pequenas e ovaladas,Pequena flor azulada.</p>
            <div id="FtProjeto6" style={azulinhaa2}><FlorAzul/></div>

            <div id="botao2plantas"> <BotaoDefault rotas="https://pt.wikipedia.org/wiki/Thunbergia_grandiflora"/></div>
        </div>
        </div>
        <div id="impatiens">
            <div id="tituloimpatiens">
                Beijo Pintado
            </div>
            <div id="FtProjeto12" style={BeijoStyle}>
            <div id="PetalaRosa"><PetalaRosa/></div>
            </div>
            <div id="text5">           
            é uma planta florífera originária da África, que apresenta caule avermelhado e grosso. As flores da espécie podem ser de diversas cores.</div>
            <div id="botao1im"><BotaoDefault rotas="https://pt.wikipedia.org/wiki/Impatiens"/></div>

        <div id="FtProjeto13"style={Beijo2Style}>
        <div id="FlorRosa"><FlorRosa/></div>
     
        </div>
        </div>
        <div id="Gazania">
        <h2 id="Gazaniatitulo">Gazânia</h2>
        <div id="fotosgazania">
        <div id="FtProjeto7" style={GazaniaStyle}>
        <Gazania/>
        </div>
        </div>
        <div id="botao3plantas"> <BotaoDefault rotas="https://pt.wikipedia.org/wiki/Thunbergia_grandiflora"/></div>
        <div id="Texto6">
        É uma planta resistente à seca, originária do Sul da África que pode ser encontrada em uma ampla variedade de cores, quase sempre em tons vibrantes.

        </div>

   
        </div>
        <div id="Bromelia">
        <h2 id="Bromeliatitulo">Bromelia</h2>
   
        <div id="Texto7">
        Planta epífita que cresce em árvores.
Armazena água em suas folhas, fornecendo um microambiente para pequenos animais.

            <div id="fotos">        
        <div id="FtProjeto9" style={BromeliaStyle1}></div>
        <div id="FtProjeto10" style={BromeliaStyle2}><Bromelia/></div>
        </div>
        </div>
   
            <div id="botao7plantas"> <BotaoDefault rotas="https://pt.wikipedia.org/wiki/Thunbergia_grandiflora"/></div>
            
        </div>
  
        </>
    )
}
