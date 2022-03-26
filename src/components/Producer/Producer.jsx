import React, { useEffect, useState } from "react";
import TopBar from "../TopBar/TopBAr";
import { ProducerContainer, Image, Button } from "./ProducerStyles";
import TagFood from "../../assests/icons/tagfood.jpg";
import Modal from "../Modal/Modal";
import ListingForm from "../Forms/ListingForm/ListingForm";
import Card from "../Cards/Card";
import { LogoContainer, TopBarConatiner, TopContainer, TopItem } from "../TopBar/ToBarStyles";
import Logo from "../../assests/icons/logo.png";

import axios from "axios";
import { getToken } from "../../token";
import { CardsContainer } from "./ProducerStyles";

export default function Producer() {
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    
    const id = getToken("userId");
    const [listing, setListing] = useState();
    let listings = [];

    useEffect(() => {
        axios.get("http://localhost:8080/listing/getByProducer/"+id).then(
          (response) => {
            listings = response.data;
            setListing(listings);
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);

    return (
        <ProducerContainer>
            <TopBarConatiner>
                <LogoContainer>
                <img src={Logo} width="130" />
                </LogoContainer>
                <TopContainer>
                    <TopItem>
                        Log Out
                    </TopItem>
                </TopContainer>
            </TopBarConatiner>
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
            <CardsContainer>
        {console.log(listing)}
        {listing?.map((items, index) => {
          return <Card item={items} key={index} />;
        })}
      </CardsContainer>
        </ProducerContainer>
    )
}