import {React , useState }  from "react";
import { CardContainer, Desc, DishName, Expire, Photo, Reserve } from "./CardsStyles";
import Food from "../../assests/icons/food.jpeg"
import Modal from "../Modal/Modal";

export default function Card() {
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);


    return (
        <CardContainer>
            <Photo src={Food} />
            <DishName>
                Rajma Chawal
            </DishName>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quasi corrupti animi labore tempore laudantium fugiat consequatur! At iure quae ex officiis nemo, necessitatibus quia ullam illum tenetur accusamus facilis.
            </Desc>
            <Expire>
                Expires in 1hr 20 min
            </Expire>
            <Reserve onClick={() => setOpenModal(true)}>
                Reserve
            </Reserve>
        </CardContainer>
    )
}