import React from 'react';
import {FlexRow,FlexColumn,FlexRowSepara, ImgCart} from "./styled"

class CardProduto extends React.Component {

    render() {
        return (
            <FlexRow>
                {this.props.produtosNaTela.map((produto)=>{
                   return (
                    <FlexRow key={produto.id} >
                    <ImgCart src = {produto.img} />
                        <FlexColumn>
                        <h2>{produto.nome}</h2>
                            <FlexRowSepara>
                            <h3>"Valor do Produto: R$ "{produto.valor}</h3>
                            <button onClick={()=>this.props.adicionaCarrinho(produto.id)}>Adicionar ao Carrinho</button>
                            </FlexRowSepara>
                        </FlexColumn>
                    </FlexRow>
                   ) 
                })}              
            </FlexRow>
        )
    }
}
export default CardProduto;