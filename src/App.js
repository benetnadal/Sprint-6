import { useState } from "react";
import EscenaCompleta  from "./components/escena/Escena";
import PantallaInicial from "./components/escena/Inici"
import {BotonsEstil1,ContainerBoto} from "./styled"


function App() {   

   const[inici, setInici] = useState(true)

   const [Button, setButton] = useState(true);
   
   const canvi = () => {setInici(!inici); setButton(!Button);}       
 
 return (

   <div>  

      {inici? <PantallaInicial/> : <EscenaCompleta/> } 

      {Button && <ContainerBoto><BotonsEstil1 onClick={canvi}>Comença!</BotonsEstil1></ContainerBoto>}

   </div>
  );
}

export default App;
