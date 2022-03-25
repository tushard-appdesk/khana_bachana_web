import styled from "styled-components";


export const CardContainer = styled.div`
width : 350px;
height : 100%;
background-color: #fcf8f2;
display : flex;
flex-direction: column;
align-items: center;
`
export const Photo = styled.img`
width : 350px;`

export const DishName = styled.h2`
text-align: center;
`
export const Desc = styled.h4`
padding : 4px;`
export const Expire = styled.div`
text-align: center;
`
export const Reserve = styled.button`
align-items: center;
width: 150px;
height : 40px;
margin : 25px;
border-radius: 10px;
border : 0;
cursor : pointer;
color : white;
background-color: #348758;
text-align: center;
`