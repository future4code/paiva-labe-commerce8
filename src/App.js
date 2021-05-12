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
const MiddleContainer = styled.div `
display: flex;
height: 80vh;
border: 3px solid red;
margin: 3px;

`
const Sections = styled.div `
width: 20vw;
border: 3px solid green;
margin: 3px;
`
const CardGrid = styled.div `
width:80vw;
display: grid;
grid-template-rows: repeat(7, 1fr);
grid-template-columns: repeat(4, 1fr);
border: 3px solid blue;
margin: 3px;
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
