import styled from 'styled-components';

export const MainContainer = styled.div `
  border: 3px solid yellow;
  height:fit-content;
  margin: 3px;
`
export const Header = styled.div `
  height: 10vh;
  border: 3px solid purple;
  margin: 3px;
`
export const TopContainer = styled.div `
  height: fit-content;
  margin: 3px;
  border: 3px solid lightskyblue;
  display: flex;

`
export const Filtro = styled.div `
  border: 3px solid gray;
  height: fit-content;
  margin: 3px;
  width: 20vw;
  height: 30vh;
`
export const NomeSecao = styled.div `
  width: 80vw;
  border: 3px solid crimson;
  display: flex;
  flex-direction: column-reverse;
`
export const Ordem = styled.div `
  height: 40%;
  border: 3px solid peru;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px;
`
export const MiddleContainer = styled.div `
  display: flex;
  height: 50vh;
  border: 3px solid red;
  margin: 3px;
`
export const Sections = styled.div `
  width: 20vw;
  border: 3px solid green;
  margin: 3px;
`
export const Inputs = styled.div `

`
export const CardGrid = styled.div `
  width:80vw;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border: 3px solid blue;
  margin: 3px;
  grid-gap: 10px;
  padding: 10px;
`
export const Footer = styled.div `
  height:10vh;
  border: 3px solid pink;
`