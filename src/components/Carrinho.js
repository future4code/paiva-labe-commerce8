import React from "react";
import styled from "styled-components";
import { Comp, Titulos, TopContainer } from "../styled";
import CardProduto from "./CardProduto/CardProduto";
import Icone from '../img/carrinho.png'


const Body = styled.body`
display:flex;
justify-content: space-around;
padding: 2%;
margin-right:2%;

`
const Borda = styled.div`
text-align:center;
min-width:30vw;
padding:8%;
/* background-color:#9DE1FE; */
`
const Sessao = styled.section`
display:flex;
justify-content: space-around;

`
const Botao = styled.button`
height:2%;

`

export default class Carrinho extends React.Component {
    render() {
        const somaTotal = () => {
            let soma = 0
            {this.props.carrinho.map((produto) => {
            soma += produto.valor*produto.qtd
            })
            return (<div>Total da Compra:R$ {soma.toFixed(2)}</div>)
        }
    }
// 
        
        return (
            <div>
                <Body>
                    <Borda>
                        <Sessao>
                            <h1>Carrinho</h1>

                        </Sessao>
                        <Sessao>
                        {somaTotal()}   
                        </Sessao>
                        <Sessao>
                        {this.props.carrinho.map((produto) => {
                        return(
                        <div>
                            <h5>Produto: {produto.nome}</h5>
                            <h5>Quantidade: {produto.qtd}</h5>
                            <h5>Total do item: {(produto.qtd * produto.valor).toFixed(2)}</h5>
                            <button onClick={() => this.props.somar(produto)}>Adicionar</button>
                        <button onClick={() => this.props.subtrair(produto)}>Remover</button>
                        </div>
                    )}
                    )
    }
                    
                        </Sessao>
                    </Borda>
                </Body>
                
            </div>
        )
    
}

}
