import styled from "styled-components";

export const ProducerContainer = styled.div`
display : flex;
flex-direction : column;
align-items : center;
`
export const Image = styled.img`
object-fit: cover;
height: 400px;
width : 100%
`
export const Button = styled.button`
width: 300px;
height : 90px;
margin : 25px;
border-radius: 20px;
border : 0;
cursor : pointer;
color : white;
background-color: #348758;
font-size: 26px;

`

export const CardsContainer = styled.div`
display : flex;
flex-direction: row;
margin: 50px;
flex-wrap: wrap;
`