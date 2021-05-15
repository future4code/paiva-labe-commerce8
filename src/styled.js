import styled from 'styled-components';

export const MainContainer = styled.div`
  height:fit-content;
  margin: 3px;
  background-color: #2290E9;
  height:100vh;
`
export const Header = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height: 10vh;
background-color:white;  
img{height: 10vh}
`
export const TopContainer = styled.div`
  height: fit-content;
  margin: 3px;
  //border: 3px solid lightskyblue;
  display: flex;
  height:25vh;
img{height:10vh}
`
export const Filtro = styled.div`
 // border: 3px solid gray;//
display:grid;
height: fit-content;

width: auto;
height:25vh;
`
export const NomeSecao = styled.div`
  width: 80vw;
  //border: 3px solid crimson;//
  display: flex;
  flex-direction: column-reverse;
  margin: 3px;
`
export const Ordem = styled.div`
  height: 40%;
 //border: 3px solid peru;//
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 3px;
`
export const MiddleContainer = styled.div`
  display: flex;
  height: 55vh;
  //border: 3px solid red;//
  margin: 3px;
`
export const Sections = styled.div`
  width: 20vw;
 //border: 1px solid white;
  margin: 3px;
`
export const Inputs = styled.div`
margin:auto;
padding-left:8%;
`
export const CardGrid = styled.div`
  width:80vw;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
 // border: 3px solid blue;
  margin: 3px;
  grid-gap: 10px;
  padding: 10px;
`
export const Footer = styled.div`
  height:10vh;
  background-color: #727272;
  img{height: 4vh};

`
export const BotaoCar = styled.button`
    height: 40px;
    font-size: 12px;
    font-weight: bold;
    background-color: #2290E9;
    color: white;
    border-color: white;
    border-radius: 5px;

`
export const Titulos = styled.h2`
color: white;
font-size: 12px;
font-weight: bold;

`
export const Comp = styled.h1`
display:flex;
justify-content:center;
font-size:2em;
color: white;
text-align:center;
`
export const Icones = styled.section`
display:flex;
justify-content:space-around;
padding:2%;
width:20vw;
max-width:200px;
border-bottom:2px solid white;
img{height: 4vh};
`
