import React from "react";
import styled from "styled-components";
import { Comp, Titulos, TopContainer } from "../styled";
import CardProduto from "./CardProduto/CardProduto";
import Icone from '../img/carrinho.png'


const Body = styled.body`
display:grid;
justify-content: space-around;
padding: 2%;
margin-right:2%;

`
const Borda = styled.div`
border: 2px solid black;
text-align:center;
min-width:30vw;
padding:8%;
background-color:#9DE1FE;
`
const Sessao = styled.section`
display:flex;
justify-content: space-around;

`
const Botao = styled.button`
height:2%;

`

export default class Carrinho extends React.Component {
    state = {
        carrinho: false,
        quantidade: 0,
        produto: "",
        valorTotal: 0,
        pedidos: [
            { nomeDoProduto: 0, quantidadeDoPedido: 0, valorDoPedido: 0 }]
    }

    mostrarCarrinho = () => {
        if (this.state.quantidade > 0) {
            this.setState({ carrinho: true })
        }
    }

    somar = (produto) => {
        this.setState({ quantidade: this.state.quantidade + 1 });
        this.setState({ produto: "produto" });
        if (this.state.quantidade === 0) {
            this.setState({ valorTotal: 100 });
        } else { this.setState({ valorTotal: (this.state.quantidade + 1) * 100 }); }

    };

    subtrair = (produto) => {
        if (this.state.quantidade > 0) {
            this.setState({ quantidade: this.state.quantidade - 1 });
            this.setState({ valorTotal: (this.state.quantidade - 1) * 100 });
        } else if (this.state.quantidade === 0) {
            this.setState({ valorTotal: 0 })
            this.setState({ produto: "Seu carrinho está vazio" })
        }
    }

    render() {



        return (
            <div>
                <TopContainer>
                    <Comp>Carrinho</Comp> <img src={Icone}/>
                </TopContainer>
              
              


            </div>
        )
    }
}
