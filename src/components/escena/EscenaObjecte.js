



// PROVA ---> NO UTILITZEM AQUEST COMPONENT



/* import { useState } from "react"
import {FrasesObjecte} from "../../data/Frases"
import { Requadre, ContainerButtons, BotonsEstil,Whole, Imatge } from "../../styled"

 function Slider() {


const [imagenActual, setImagenActual] = useState(0);

const cantidad = FrasesObjecte.length

return (
<Imatge>

    {FrasesObjecte.map((imagen, index)=> {
return <img key={index} src={imagen.img} alt="imagen" /> ;
    })            
    }
</Imatge>
)}

export default Slider 

export const EscenaObjecte = () => {

    const [frase, setFrase] = useState (FrasesObjecte)
    const total = FrasesObjecte.length
    const [posicio, setPosicio] = useState(0);

    console.log(posicio);

 





   
    const anterior = () => {
    setPosicio(posicio === 0? total -1:posicio -1); 
    console.log(posicio);
    console.log(FrasesObjecte[posicio].txt)

     };     

    const seguent = () => {
    setPosicio(posicio === total -1? 0:posicio + 1); 
    console.log(posicio);
    };


return(

    <div style={{ backgroundImage: `url(./data/img/1.jpg)`}}>

     <ContainerButtons>
    <BotonsEstil onClick = {anterior}>Anterior</BotonsEstil> 
    <BotonsEstil onclick = {seguent}>Següent</BotonsEstil> 
    </ContainerButtons>

    <div>
       {frase.map(sentence => (        
            <Requadre><h1>{sentence.txt}</h1></Requadre>
       ))}
      </div>
    </div>
      
)
} */