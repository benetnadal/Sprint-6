import styled from "styled-components"

 
export const ContainerButtons = styled.div`

 

display:flex;
flex-direction: row;
flex-wrap:none;
padding:15px  35px;
margin: 20px 10px 0;
gap:10px;
`

export const Container = styled.div`

display:flex;
flex-direction: column;
justify-content: flex-start;

align-items: center;
align-content: center;
background-color:#e7a61a;
min-height:200px;
min-width:500px;

margin:200px 600px 20px;
border: grey 3px solid;
border-radius: 30px;
h1{color:yellow; }

p{margin: 10px 30px; text-align: justify}
box-shadow: -2px 34px 96px 123px rgba(66,9,66,0.51);
`


export const ContainerBoto = styled.div`

display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;
background-color:none;
min-height:100px;
min-width:500px;
margin:20px 600px 20px;

border-radius: 30px;
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

export const BotonsEstil1 = styled.button`
text-align: center;
align-content: center;
padding: 10px 15px;
border-radius: 40px;
align-items: center;
flex: 1 100%;
font-size: 30px;
color: black;
border: 3px solid #420942;
cursor: pointer;
margin: auto;
box-shadow: inset -2px -6px 37px 21px rgba(66,9,66,0.51);
`;


export const Requadre = styled.p`
border: black 3px solid;
border-radius: 40px;
margin: 25px 40px;
text-align: center;
background-color: ${(props) => props.fons === "si"? "pink" : "rgba(255, 255, 255, 0.6)"};
`







export const Content = styled.div`
  background-image: url(${props => props.img});  
   height: 100vh;
  width: 100%;
  background-position: center;
background-repeat: no repeat;
background-size: cover;
background-attachment: fixed;
`








/* export const Imatge = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
` */


/* export const Whole = styled.div`
background-image: url(${img}); 

background-position: center;
background-repeat: no repeat;
background-size: cover;
background-attachment: fixed;
`  
 */