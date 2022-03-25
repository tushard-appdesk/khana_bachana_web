import React from "react";
import { InputField, SignInContainer, SignInHeading, SubmitButton } from "./SignInStyles";
import { useFormik } from "formik";

export default function SignInForm(props) {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <SignInContainer onSubmit={formik.handleSubmit}>
            <SignInHeading>
                Sign In
            </SignInHeading>
            <InputField placeholder="UserName"
                onChange={formik.handleChange}
                value={formik.values.username}
                id="username"
                name="username"
                type="username">
            </InputField>
            <InputField placeholder="Password" type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                name="password"/>
            <SubmitButton onClick={props.handleClose} type="submit">
                Log In
            </SubmitButton>
        </SignInContainer>
    )
}