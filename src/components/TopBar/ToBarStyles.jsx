import Styled from "styled-components";
import { Link } from "react-router-dom";

export const TopBarConatiner = Styled.div`
position : fixed;
width : 100%;
display:flex;
justify-content:space-between;
z-index : 1;
background-color: #00000066;
`
export const LogoContainer = Styled.div`
cursor : pointer;
margin-left : 30px;
`
export const TopContainer = Styled.div`
display:flex;
padding-left : 30px;
`

export const TopItem = Styled.div`
margin : 25px 40px 0px 0px;
cursor: pointer;
font-family: 'Montserrat';
font-style: normal;
color :white;
font-weight: 600;
font-size : 24px;
&:hover{
    color : #348758;
}
`