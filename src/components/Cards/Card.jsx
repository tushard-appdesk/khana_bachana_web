import { React, useState } from "react";
import {
  CardContainer,
  Desc,
  DishName,
  Expire,
  Photo,
  Reserve,
  Price
} from "./CardsStyles";
import Food from "../../assests/icons/food.jpeg";
import Modal from "../Modal/Modal";

export default function Card(props) {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);

  return (
    <CardContainer>
        {console.log(props)}
      <Photo src={Food} />
      <DishName>{props.item.name}</DishName>
      <Desc>{props.item.description} </Desc>
      <Expire>Expires at {props.item.expiry}</Expire>
      <Price>Rs. {props.item.price}</Price>
      <Reserve onClick={() => setOpenModal(true)}>Reserve</Reserve>
    </CardContainer>
  );
}
