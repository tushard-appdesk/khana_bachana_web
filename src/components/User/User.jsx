import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import axios from "axios";
import { CardsContainer, UserContainer, Image } from "./UserStyles";
import TopBar from "../TopBar/TopBAr";
import TagImage from "../../assests/icons/tagfood.jpg";

export default function User() {
  const [listing, setListing] = useState();
  let listings = [];
  useEffect(() => {
    axios.get("http://localhost:8080/listing/get/active").then(
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
    <UserContainer>
    <TopBar />
    <Image src={TagImage}/>
      <CardsContainer>
        {console.log(listing)}
        {listing?.map((items, index) => {
          return <Card item={items} key={index} />;
        })}
      </CardsContainer>
    </UserContainer>
  );
}
