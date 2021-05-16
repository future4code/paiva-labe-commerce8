import styled from 'styled-components'

export const Container = styled.div`
display: grid;
row-gap: 1ch;
grid-template-columns: repeat(3, 1fr);
`

export const FlexRow= styled.div`
display: flex;
height:150px;
width:100%;
justify-content: space-around;
margin-top: 2vw;
`
export const FlexColumn = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`
export const ImgCart = styled.img`
height: 100px;
width: 100px;
object-fit: cover;
`
export const FlexRowSepara = styled.div`
display:flex;
justify-content: space-between;
padding: 0px 4px;
`
export const Button = styled.button`
    max-width: 15rem; 
    padding: 0 .75rem;
    font-size: 14px;
    color: #fff;
    background: #ee4d2d;
    border-radius: 5px;
    height: 48px;
    text-overflow: ellipsis;
    margin: auto;
    margin-left: 8px;
    cursor: pointer;
    :hover {background-color:rgba(238, 77, 45, .9);}
`
