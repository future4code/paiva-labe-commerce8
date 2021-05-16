import React from 'react';
import './App.css';
import { MainContainer, Header, TopContainer, Filtro, Inputs, NomeSecao, Ordem, MiddleContainer, Sections, CardGrid, Footer, BotaoCar, Titulos, Icones } from './styled';
import { listaDeProdutos } from './components/ListaDeProdutos/ListaDeProdutos';
import Carrinho from "./components/Carrinho"
import CardProduto from './components/CardProduto/CardProduto'
import Logo from './img/logo.png'
import Aerolito from './img/aerolito.png'
import Foguete from './img/foguete.png'
import Camisa from './img/camisa.png'
import Nave from './img/nave.png'
import Onibus from './img/onibus.png'
import Planeta from './img/planeta.png'
import Roupaespacial from './img/roupaespacial.png'
import Satelite from './img/satelites.png'
import Brinquedos from './img/brinquedos.png'
import Instagram from './img/instagram.png'
import Facebook from './img/facebook.png'
import Twitter from './img/twitter.png'



class App extends React.Component {
  //funções aqui
  // ordenaLista = (array) => {
    //  // copiada a função da lista semana4, ajustar para o problema em específico
    //   let temp;
    //   let novoArray = array;
    //   for (let i = 0; i < array.length; i++) {
    //     for (let i = 0; i < array.length; i++) {
      //       if (novoArray[i] > novoArray[i + 1]) {
        //         temp = novoArray[i];
        //         novoArray[i] = novoArray[i + 1];
        //         novoArray[i + 1] = temp;
        //       }
        //     }
        //     }
        //   }
        //     OrdenaLista = (array) => {
          //         //copiada a função da lista semana4, ajustar para o problema em específico
//         let temp;
//         let novoArray = array;
//         for (let i = 0; i < array.length; i++) {
  //             for (let i = 0; i < array.length; i++) {
  //                 if (novoArray[i] > novoArray[i + 1]) {
    //                     temp = novoArray[i];
    //                     novoArray[i] = novoArray[i + 1];
    //                     novoArray[i + 1] = temp;
    //                 }
    //             }
    //         }
    //         return novoArray;
    // };
    
    //     adicionaCarrinho = (id) => {
    //         const copiaLista = [...this.state.produtos];
    
    //         let productId = copiaLista.filter((produto) => {
    //             if (id === produto.id) {
      //                 return true;
    //             }
    //             return false;
    //         });
    
    
    //         let carrinhoLista = [...this.state.carrinho];
    
    //         let estaNoCarrinho = false;
    //         carrinhoLista.map((valor) => {
    //             if (id === valor.id) {
    //                 estaNoCarrinho = true;
    //                 valor.qtd++;
    //             }
    //             return false;
    //         });
    
    //         if (!estaNoCarrinho) {
    //             productId[0].qtd = 1;
    //             carrinhoLista.push(productId[0]);
    //         }
    //         this.setState({ carrinho: [...carrinhoLista] });
    //     };
    
    //     //fim de funções
    
       //     render() {
        
        //         const mostraPagina = () => {
          //             if (this.state.pagina === "carrinho") {
            //                 return <Carrinho />
            //             }
            //             else {
              //                 return <CardProduto produtos={this.state.produtos} adicionaCarrinho={this.adicionaCarrinho} />
              //             }
              //         }
              
              // trocaPagina = ()=>{
                //   if (this.state.pagina === ""){
                  //     this.setState({pagina:"carrinho"})
                  //   }else {
                    //     this.setState({pagina:""})
                    //     }
                    //   }                
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
  this.setState({produtos: listaDeProdutos
    .filter(produto => produto.valor >=this.state.valorMin)
    .filter(produto => produto.valor <= this.state.valorMax)
    .filter(produto => produto.nome.includes(this.state.filtroNome))
  })  
}

botaoRemoverDoCarrinho = (objeto) => {
  const removeCart = [...this.state.produtosCarrinho];
    removeCart.filter((valor) => {
    if (objeto.id !== valor.id) {
      return true;
    }
    return false;
    });
};

trocaPagina = () => {
  if (this.state.pagina === "") {
    this.setState({ pagina: "carrinho" })
  } else {
    this.setState({ pagina: "" })
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
            <div>
              <img src={Logo} />
            </div>
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
              <BotaoCar onClick={this.trocaPagina}>
                {this.state.pagina ? "Voltar A Comprar" : "Ir para o carrinho"}
              </BotaoCar>
              </Ordem>

            </NomeSecao>
          </TopContainer>
  
          <MiddleContainer>
  
            <Sections>
              <Titulos>
                <Icones><img src={Aerolito} /> <p>AeroLitos</p> </Icones>
                <Icones><img src={Foguete} /><p>Foguetes</p></Icones>
                <Icones><img src={Camisa} /><p>Camisas</p></Icones>
                <Icones><img src={Nave} /><p>Naves</p> </Icones>
                <Icones><img src={Onibus} /><p>Onibus</p></Icones>
                <Icones><img src={Planeta} /><p>Planetas</p></Icones>
                <Icones><img src={Roupaespacial} /><p>Roupas Espaciais</p></Icones>
                <Icones><img src={Satelite} /><p>Satélites</p></Icones>
                <Icones><img src={Brinquedos} /><p>Brinquedos</p></Icones>
              </Titulos>
            </Sections>
  
            <CardGrid>
              {mostraPagina()}
            </CardGrid>
  
          </MiddleContainer>
  
          <Footer>
          <Titulos>
            Siga-nos nas Redes Sociais
          </Titulos>
          <img src={Instagram} /><img src={Facebook} /><img src={Twitter} />
          </Footer>
  
        </MainContainer>
      </div>
    );
  }
 
}

export default App;
