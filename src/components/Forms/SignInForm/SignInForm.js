import React from "react";
import { InputField, SignInContainer, SignInHeading, SubmitButton } from "./SignInStyles";

export default function SignInForm(props) {
    return (
        <SignInContainer>
            <SignInHeading>
                Sign In
            </SignInHeading>
            <InputField placeholder="UserName">
            </InputField>
            <InputField placeholder="Password" type="password" />
            <SubmitButton onClick={props.handleClose}>
                Log In
            </SubmitButton>
        </SignInContainer>
    )
}