import React from 'react';
import logo from './logo.svg';
import './App.css';
import imagem1 from './img-carlos/camisa1.jpg';
import plutao from './img-carlos/plutao.jpg';
import styled from 'styled-components'

const MainContainer = styled.div `
  border: 3px solid yellow;
  height:fit-content;
  margin: 3px;
`
const Header = styled.div `
  height: 10vh;
  border: 3px solid purple;
  margin: 3px;
`
const TopContainer = styled.div `
  height: 40vh;
  margin: 3px;
  border: 3px solid lightskyblue;
  display: flex;

`
const Filtro = styled.div `
  border: 3px solid gray;
  height: fit-content;
  margin: 3px;
  width: 20vw;
  height: 40vh;
`
const NomeSecao = styled.div `
  width: 80vw;
  border: 3px solid crimson;
  display: flex;
  flex-direction: column-reverse;
`
const Ordem = styled.div `
  height:40%;
  border: 3px solid peru;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const MiddleContainer = styled.div `
  display: flex;
  height: 50vh;
  border: 3px solid red;
  margin: 3px;
`
const Sections = styled.div `
  width: 20vw;
  border: 3px solid green;
  margin: 3px;
`
const Inputs = styled.div `

`
const CardGrid = styled.div `
  width:80vw;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border: 3px solid blue;
  margin: 3px;
  grid-gap: 10px;
  padding: 10px;
`
const Footer = styled.div `
  height:10vh;
  border: 3px solid pink;
`
function App() {
  return (
    <div className="App">
      <MainContainer>

        <Header>
        </Header>
        <TopContainer>
          <Filtro>
            <Inputs>
              <p>Valor mínimo:
                <input type="number"/>
              </p>
            </Inputs>

            <Inputs>
              <p>Valor máximo
                <input type="number"/>
              </p>
            </Inputs>

            <Inputs>
              <p>Busca por nome:
                <input type="text"/>
                <button>Buscar</button>
              </p>
            </Inputs>
          </Filtro>

          <NomeSecao>
            <Ordem>
              <p><strong>Ordem:</strong> 
                <select>  
                  <option>Crescente</option>
                  <option>Decrescente</option>
                </select>
              </p>

              <button>Ir para o carrinho</button>
            </Ordem>
          </NomeSecao>
        </TopContainer>

        <MiddleContainer>

          <Sections>
          </Sections>

          <CardGrid>
          </CardGrid>

        </MiddleContainer>

        <Footer>
        </Footer>

      </MainContainer>
    </div>
  );
}

export default App;
