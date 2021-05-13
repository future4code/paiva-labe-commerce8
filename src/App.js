import React from 'react';
import './App.css';
import {MainContainer, Header, TopContainer, Filtro, Inputs, NomeSecao, Ordem, MiddleContainer, Sections, CardGrid, Footer} from './styled';
import {listaDeProdutos} from './components/ListaDeProdutos/'

class App extends React.Component {
//funções aqui
handleFiltroMin = (event) => {
  this.setState({
    valorMin: event.target.value,
  });
};
handleFiltroMax = (event) => {
  this.setState({
    valorMax: event.target.value,
  });
};
handleFiltroNome = (event) => {
  this.setState({
    filtroNome: event.target.value,
  });
};
botaoBuscar = () => {
//pega os valores de min, max  e filtro e faz sua mágica
};
OrdenaLista = (array) => {
  //copiada a função da lista semana4, ajustar para o problema em específico
  let temp;
  let novoArray = array;
  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < array.length; i++) {
      if (novoArray[i] > novoArray[i + 1]) {
        temp = novoArray[i];
        novoArray[i] = novoArray[i + 1];
        novoArray[i + 1] = temp;
      }
    }
  }
  return novoArray;
};
adicionaCarrinho = (idProduto) =>{
  //1° puxa a lista de carrinho para comparar o produto
  const productId = [...listaDeProdutos];

  productId.filter((produto)=> {
    if (idProduto === produto.id) {
      produto.carrinho = true;
      return true;
    }
  })
//verifica se esse id está ou não no produtosCarrinho e depois adiciona ou não qtd
let estaNoCarrinho = false;
let copiaCarrinho = [...this.state.produtosCarrinho]
copiaCarrinho.map((produto)=>{
if (produto.id === productId.id) {
  estaNoCarrinho = true;
}
})
if (estaNoCarrinho) {
  copiaCarrinho.forEach((valor) => {
    if (productId.id === valor.id) {
      valor.qtd ++;
      this.setState({ produtosCarrinho: copiaCarrinho });
    }
  });
} else {
  productId.qtd = 1;
  this.setState({ produtosCarrinho: [...this.state.produtosCarrinho, productId] });
}

};

botaoRemoverDoCarrinho = (objeto) =>{
  const removeCart = [...this.state.produtosCarrinho];
  removeCart.filter((valor) => {
    if (objeto.id !== valor.id) {
      return true;
    }
  });
};
botaoIrParaCarrinho = () =>{

};

//fim de funções

state = {
  produtosNaTela: [
    ],
  valorMin:"",
  valorMax:"",
  filtroNome: "",
  produtosCarrinho: []
}
  render() {

    return (
      <div className="App">
        <MainContainer>
  
          <Header>
          </Header>
          <TopContainer>
            <Filtro>
              <Inputs>
                <p>Valor mínimo:
                  <input type="number" onChange={this.handleFiltroMin}/>
                </p>
              </Inputs>
  
              <Inputs>
                <p>Valor máximo
                  <input type="number" onChange={this.handleFiltroMax}/>
                </p>
              </Inputs>
  
              <Inputs>
                <p>Busca por nome:
                  <input type="text" onChange={this.handleFiltroNome}/>
                  <button onClick={this.botaoBuscar}>Buscar</button>
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
 
}

export default App;
