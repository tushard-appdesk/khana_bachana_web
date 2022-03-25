import React from "react";
import { SubmitButton } from "../SignInForm/SignInStyles";
import { FormHeading, InputFields, RegFormContainer, Select } from "./RegisterFormStyles";
import { useFormik } from "formik";
import axios from "axios";

export default function RegisterForm(props) {
    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            email: "",
            phone: "",
            userType: "INDIVIDUAL"
        },
        onSubmit: values => {
            console.log(values);
            axios.post('http://localhost:8080/user/add', values)
              .then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });
        },
    });
    return (
        <>
            <RegFormContainer onSubmit={formik.handleSubmit}>
                <FormHeading>
                    Register
                </FormHeading>
                <InputFields placeholder="UserName"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    id="name"
                    name="name"
                    type="name" />
                <InputFields placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id="email"
                    name="email" />
                <InputFields placeholder="Phone Number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    id="phone"
                    name="phone" />
                <InputFields placeholder="Password" type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    id="password"
                    name="password" />
                <Select  id="role"onChange={formik.handleChange}
                    value={formik.values.role}
                    name="userType">
                    <option value="INDIVIDUAL">INDIVIDUAL</option>
                    <option value="NGO">NGO</option>
                    <option value="FOOD_STORE">FOOD STORE</option>
                    <option value="CONVENIENCE_STORE">CONVENIENCE STORE</option>
                </Select>
                <SubmitButton onClick={props.handleClose} type="submit">
                    Submit
                </SubmitButton>

            </RegFormContainer>
        </>
    )
}