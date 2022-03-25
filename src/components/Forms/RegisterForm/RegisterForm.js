import React from "react";
import { SubmitButton } from "../SignInForm/SignInStyles";
import { FormHeading, InputFields, RegFormContainer, Select } from "./RegisterFormStyles";
import { useFormik } from "formik";

export default function RegisterForm(props) {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: "",
            number: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                    id="username"
                    name="username"
                    type="username" />
                <InputFields placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id="email"
                    name="email" />
                <InputFields placeholder="Phone Number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    id="number"
                    name="number" />
                <InputFields placeholder="Password" type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    id="password"
                    name="password" />
                <Select  id="role"onChange={formik.handleChange}
                    value={formik.values.role}
                    name="role">
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