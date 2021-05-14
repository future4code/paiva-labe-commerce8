import React from 'react';
import './App.css';
import {MainContainer, Header, TopContainer, Filtro, Inputs, NomeSecao, Ordem, MiddleContainer, Sections, CardGrid, Footer} from './styled';
import {listaDeProdutos} from './components/ListaDeProdutos/ListaDeProdutos';
import Carrinho from "./components/Carrinho"

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
    return this.state.listaProdutos
    .filter(produto => produto.valor >=this.state.valorMin)
    .filter(produto => produto.valor <= this.state.valorMax)
    .filter(produto => produto.name.includes(this.state.filtroNome))
    }
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
  const copiaLista = [...listaDeProdutos];

  let productId = copiaLista.filter((produto)=> {
    if (idProduto === produto.id) {
      return true;
    }
    return false;
  })
  console.log("produto",productId)
//ate aqui ok, é só o produto a ser comparado

let carrinhoDeCompras = [...this.state.produtosCarrinho];

let variavelDaCamilyS2 = false;

carrinhoDeCompras.map((valor)=>{
  if (idProduto===valor.id) {
    variavelDaCamilyS2 = true;
    valor.qtd++;
  }
})

console.log("variaveldaCamily",variavelDaCamilyS2)
if (!variavelDaCamilyS2){
  productId.qtd = 1;
  carrinhoDeCompras.push(productId)
}
this.setState({produtosCarrinho:[...carrinhoDeCompras]})
console.log("carrinho",this.state.produtosCarrinho)
};

botaoRemoverDoCarrinho = (objeto) =>{
  const removeCart = [...this.state.produtosCarrinho];
  removeCart.filter((valor) => {
    if (objeto.id !== valor.id) {
      return true;
    }
    return false;
  });
};

botaoIrParaCarrinho = () =>{

};
trocaPagina = ()=>{
    if (this.state.pagina === ""){
        this.setState({pagina:"carrinho"})
    }else {
        this.setState({pagina:""})
    }
    console.log(this.state.pagina)
}

//fim de funções

state = {
  produtosNaTela: [...listaDeProdutos],
  valorMin:"",
  valorMax:"",
  filtroNome: "",
  produtosCarrinho: [],
  pagina: ""
}
  render() {

      const mostraPagina = () =>{
          if (this.state.pagina === "carrinho"){
              return <Carrinho/>
             }}

    return (
      <div className="App">
        <MainContainer>
        {mostraPagina()}
          <Header>
          <button onClick = {this.trocaPagina}>
              {this.state.pagina ? "Voltar A Comprar":"Ir para o carrinho"}
              </button>
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
  
                
             
              </Ordem>
            </NomeSecao>
          </TopContainer>
  
          <MiddleContainer>
  
            <Sections>
            
            </Sections>
  
            <CardGrid>
              <CardProduto produtosNaTela={this.state.produtosNaTela} adicionaCarrinho={this.adicionaCarrinho}/>
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
