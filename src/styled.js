import styled from "styled-components"
 
import {css} from "styled-components"


export const ContainerButtons = styled.div`

display:flex;
flex-direction: row;
flex-wrap:none;
padding:15px  35px;
margin: 20px 10px 0;
gap:10px;
`


export const BotonsEstil = styled.button`
margin: 15px 25px;
text-align: center;
align-content: center;
padding: 20px 30px;
border-radius: 10px;
align-items: center;
flex: 1 100%;
font-size: 30px;
color: red;
border: 3px solid black;
cursor: pointer;
margin: auto;
`;


export const Requadre = styled.p`
border: black 3px solid;
border-radius: 40px;
margin: 25px 40px;
text-align: center;
background-color: ${(props) => props.fons === "si"? "pink" : "none"}`;  

