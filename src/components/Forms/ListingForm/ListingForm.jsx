import React from "react";
import { SubmitButton } from "../SignInForm/SignInStyles";
import { Input, ListingFormContainer, ListingHeading } from "./ListingFormStyles";

export default function ListingForm (props) {
    return (
        <ListingFormContainer>
            <ListingHeading>
                Add Listing
            </ListingHeading>
            <Input placeholder="Dish Name"/>
            <Input placeholder="Description"/>
            <Input placeholder="Price"/>
            <Input placeholder="Expiry" type="time" style={{backgroundColor : "white"}}/>
            <SubmitButton onClick={props.handleClose}>
                List
            </SubmitButton>

        </ListingFormContainer>
    )
}