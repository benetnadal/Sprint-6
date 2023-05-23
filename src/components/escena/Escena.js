import Frases from "../../data/Frases";
import { useState } from "react";
import {Requadre, BotonsEstil, ContainerButtons } from "../../styled";




const Escena = (props) => {  
  return (      
      <div>
        <p>{props.frase}</p>
      </div>
     
  );
};

/*--------------------------*/


 const EscenaCompleta = () => {
        const [posicio, setPosicio] = useState(0);
        const numeroFrases = Frases.length;
        /* const [color,setColor] = useState(["","","",""]) */
        const color = ["","","",""]; 


   const seguent = () => {
    setPosicio(posicio === numeroFrases-1? 0:posicio + 1); 

  };

    const anterior = () => {
    setPosicio(posicio === 0? numeroFrases -1:posicio -1);        
     };     

return (

    <div>
    
    <ContainerButtons>
    <BotonsEstil onClick = {anterior}>Anterior</BotonsEstil> 
    <BotonsEstil onClick = {seguent}>Següent</BotonsEstil> 
    </ContainerButtons>


    <div>

     {Frases.map((frase,index) =>  {
        return(                    
         posicio === index? color.splice(index, 1,"si"):color.splice(index, 1,"no")
           )})}               

 <Requadre fons={color[0]}>
        <Escena frase={Frases[0]} />
      </Requadre>
      <Requadre fons={color[1]}>
        <Escena frase={Frases[1]} />
      </Requadre>
      <Requadre fons={color[2]}>
        <Escena frase={Frases[2]} />
      </Requadre>
      <Requadre fons={color[3]}>
        <Escena frase={Frases[3]} />
      </Requadre>
</div>

</div>
)
     }

export default EscenaCompleta

