import React from 'react';
import {Container, FlexRow,FlexColumn,FlexRowSepara, ImgCart, Button} from "./styled"

class CardProduto extends React.Component {

    render() {
        return (
            <Container>
                {this.props.produtos.map((produto)=>{
                   return (
                    <FlexRow key={produto.id} >
                    <ImgCart src = {produto.img} />
                        <FlexColumn>
                        <h2>{produto.nome}</h2>
                            <FlexRowSepara>
                            <h4>Valor do Produto: <br/>R$ {produto.valor}</h4>
                            <Button onClick={()=>this.props.adicionaCarrinho(produto.id)}>Adicionar ao Carrinho
                            </Button>
                            </FlexRowSepara>
                        </FlexColumn>
                    </FlexRow>
                   ) 
                })}              
            </Container>
        )
    }
}
export default CardProduto;