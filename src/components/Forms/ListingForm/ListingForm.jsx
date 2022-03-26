import React from "react";
import { SubmitButton } from "../SignInForm/SignInStyles";
import { Input, ListingFormContainer, ListingHeading } from "./ListingFormStyles";
import { useFormik } from "formik";
import axios from "axios";
import { getToken } from "../../../token";

export default function ListingForm(props) {
    const id = getToken("userId");
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: "",
            producerId: id
        },
        onSubmit: values => {
            axios.post("http://localhost:8080/listing/add", values).then(response=> {
                console.log(response);
            }, error => {
                console.log(error);
            })
        },
    });
    return (
        <ListingFormContainer onSubmit={formik.handleSubmit}>
            <ListingHeading>
                Add Listing
            </ListingHeading>
            <Input placeholder="Dish Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                id="name"
                name="name"
                type="name" />
            <Input placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.description}
                id="description"
                name="description"
                type="description" />
            <Input placeholder="Price"
                onChange={formik.handleChange}
                value={formik.values.price}
                id="price"
                name="price"
                type="price" />
            <Input placeholder="Expiry" type="time" style={{ backgroundColor: "white" }} />
            <SubmitButton onClick={props.handleClose}>
                List
            </SubmitButton>

        </ListingFormContainer>
    )
}