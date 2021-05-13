import React from 'react';
import './App.css';
import {MainContainer, Header, TopContainer, Filtro, Inputs, NomeSecao, Ordem, MiddleContainer, Sections, CardGrid, Footer} from './styled';


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
              <p><strong>Ordem: </strong> 
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
