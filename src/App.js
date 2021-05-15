import React from 'react';
import './App.css';
import {MainContainer, Header, TopContainer, Filtro, Inputs, NomeSecao, Ordem, MiddleContainer, Sections, CardGrid, Footer} from './styled';
import {listaDeProdutos} from './components/ListaDeProdutos/ListaDeProdutos';
import Carrinho from "./components/Carrinho"
import CardProduto from './components/CardProduto/CardProduto'

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
ordenaLista = (array) => {
 // copiada a função da lista semana4, ajustar para o problema em específico
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
}

adicionaCarrinho = (id) => {
 const copiaLista = [...this.state.produtos];
 
 let productId = copiaLista.filter((produto) => {
   if (id === produto.id) {
     return true;
   }
   return false;
   });
 
 let carrinhoLista = [...this.state.carrinho];
 
 let estaNoCarrinho = false;
   carrinhoLista.map((valor) => {
     if (id === valor.id) {
       estaNoCarrinho = true;
       valor.qtd++;
     }        
     return false;
   });
   
   if (!estaNoCarrinho) {
     productId[0].qtd = 1;
     carrinhoLista.push(productId[0]);
   }
   this.setState({ carrinho: [...carrinhoLista] });
 };

 somar = (produto) => {
   
  let carrinhoLista = [...this.state.carrinho]
  carrinhoLista.map((valor) => {
    if (produto === valor) {
      valor.qtd++;
    }        
    return false;
  });
  this.setState({ carrinho: [...carrinhoLista] });
};

subtrair = (item) => {
 let carrinhoLista = [...this.state.carrinho];
  if (item.qtd > 1) {
    carrinhoLista.map((valor) => {
      if (item.id === valor.id) {
        valor.qtd--;
      }
      return false;
    });
  } else {
    let posicao = null;
    carrinhoLista.filter((valor, index) => {
      if (item.id === valor.id) {
        posicao = index;
      }
      return true;
    });
    carrinhoLista.splice(posicao, 1);
  }
  console.log(carrinhoLista);
  this.setState({ carrinho: [...carrinhoLista] });
}

//fim de funções

state = {
  produtos: [...listaDeProdutos],
  valorMin:"",
  valorMax:"",
  filtroNome: "",
  carrinho: [],
  pagina: ""
}
  render() {

    const mostraPagina = () =>{
      if (this.state.pagina === "carrinho"){
        return <Carrinho carrinho={this.state.carrinho} somar={this.somar} subtrair={this.subtrair}/>
      }
      else {
      return <CardProduto produtos={this.state.produtos} adicionaCarrinho={this.adicionaCarrinho}/>
      }
    }

                
    return (
      <div className="App">
        <MainContainer>
          <Header>
        Oi, eu sou o header!
          </Header>
          <TopContainer>
            <Filtro>
              <Inputs>
                <p>Valor mínimo:<br/>
                  <input type="number" onChange={this.handleFiltroMin}/>
                </p>
              </Inputs>
  
              <Inputs>
                <p>Valor máximo:<br/>
                  <input type="number" onChange={this.handleFiltroMax}/>
                </p>
              </Inputs>
  
              <Inputs>
                <p>Busca por nome:<br/>
                  <input type="text" onChange={this.handleFiltroNome}/><br/><br/>
                  <button onClick={this.botaoBuscar}>Filtrar</button>
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
                <button onClick = {this.trocaPagina}>
              {this.state.pagina ? "Voltar A Comprar":"Ir para o carrinho"}
              </button>
              </Ordem>

            </NomeSecao>
          </TopContainer>
  
          <MiddleContainer>
  
            <Sections>
            lalala
            </Sections>
  
            <CardGrid>
              {mostraPagina()}
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
