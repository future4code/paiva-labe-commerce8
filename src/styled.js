import styled from 'styled-components';


export const MainContainer = styled.div`
  height:fit-content;
  margin: 3px;
  background-color: #2290E9;
  height:fit-content;
`
export const Header = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  height: 10vh;
  background-color:white;  
  img {
    height: 10vh
  }
`
export const TopContainer = styled.div`
  height: fit-content;
  margin: 3px;
  display: flex;
  height:25vh;
  img{height:10vh}
`
export const Filtro = styled.div`
display:grid;
height: fit-content;
width: auto;
height:25vh;
`
export const NomeSecao = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column-reverse;
`

export const Ordem = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px;
  padding: 16px;
`
export const MiddleContainer = styled.div`
  display: flex;
  box-sizing: content-box;
  min-height:48vh;
  max-width: 100vw;
  height: fit-content;
`
export const Sections = styled.div`
  width: 20vw;
  margin-top: 15vh;
`
export const Inputs = styled.div`
margin:auto;
padding-left:8%;
`
export const CardGrid = styled.div`
  width:80vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  height: fit-content;
`
export const Footer = styled.div`
  height:10vh;
  background-color: #727272;
  img {
    height: 4vh
  };

`
export const BotaoCar = styled.button`
  height: 40px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: #ee4d2d;
  border-color: white;
  border: none;
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
  img {
    height: 4vh;
  };
`
