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
        carrinho: true,
        quantidade: 0,
        produto: "",
        valorTotal: 0,
        pedidos: [{ 
            nomeDoProduto: 0, 
            quantidadeDoPedido: 0, 
            valorDoPedido: 0 
        }]
    }

    render() {
        
        const carrinhoConteudo = () =>{

            {this.props.carrinho.map((produto) => {
                console.log(this.props.carrinho)
                return(
                    <div>
                    <h5>Quantidade: {produto.qtd}</h5>
                    <h5>`Valor Total: ${produto.qtd * produto.valor}`</h5>
                    <button onClick={() => this.props.somar(produto)}>+</button>
                    <Botao onClick={() => this.props.subtrair(produto)}>-</Botao>
                    </div>
                )}
                )

    }}
        
        return (
            <div>
                <Body>
                    <Borda>
                        <Sessao>
                            <h1>Carrinho</h1>
                        </Sessao>
                        <Sessao>
                            {carrinhoConteudo()}                            
                        </Sessao>
                    </Borda>
                </Body>
                
            </div>
        )
    
}
}
