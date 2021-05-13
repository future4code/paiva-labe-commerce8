import React from "react";
import styled from "styled-components";


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


    somar = () => {
        this.setState({ quantidade: this.state.quantidade + 1 });
        this.setState({ produto: "produto" });//ao enves do 1 puxar o value do nome que está no card produto//
        if (this.state.quantidade === 0) {
            this.setState({ valorTotal: 100 });
        } else { this.setState({ valorTotal: (this.state.quantidade + 1) * 100 }); }
        //ao enves do 100 puxar o value do valor que está no card produto//
    };

    subtrair = () => {
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
                <button onClick={this.somar}>Adcionar ao Carrinho</button>
                <Body>
                    
                    <Borda>
                
                    
                        <Sessao>
                            <h1>Carrinho</h1>
                        </Sessao>

                        <Sessao>
                            {this.state.quantidade ? <h3>Nome do Produto: {this.state.produto}</h3> : "O seu carrinho está vazio"}
                            <Botao onClick={this.subtrair}>Remover</Botao>
                        </Sessao>

                        <h5>Quantidade: {this.state.quantidade}</h5>
                        <h5>Valor Total:{this.state.valorTotal}</h5>

                    </Borda>
                </Body>
                
            </div>
        )
    }
}