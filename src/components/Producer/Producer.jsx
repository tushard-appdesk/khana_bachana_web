import React, { useState } from "react";
import TopBar from "../TopBar/TopBAr";
import { ProducerContainer, Image, Button } from "./ProducerStyles";
import TagFood from "../../assests/icons/tagfood.jpg";
import Modal from "../Modal/Modal";
import ListingForm from "../Forms/ListingForm/ListingForm";

export default function Producer() {
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);

    return (
        <ProducerContainer>
            <TopBar />
            <Image src={TagFood} />
            <Button onClick={() => setOpenModal(true)}>
                Add Listing
            </Button>
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleClose={handleClose}>
                <ListingForm handleClose={() => handleClose(false)}/>
            </Modal>
        </ProducerContainer>
    )
}