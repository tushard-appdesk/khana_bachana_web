import { useState } from "react";
import Logo from "../../assests/icons/logo.png"
import SignInForm from "../Forms/SignInForm/SignInForm.js";
import Modal from "../Modal/Modal";
import { LogoContainer, TopBarConatiner, TopContainer, TopItem } from "./ToBarStyles";

const TopData = ["Home", "Register", "SignIn"];

export default function TopBar() {
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    return (
        <>
            <TopBarConatiner>
                <LogoContainer>
                    <img src={Logo} width="130" />
                </LogoContainer>
                <TopContainer>
                    <TopItem>Home</TopItem>
                    <TopItem>Register</TopItem>
                    <TopItem onClick={() => setOpenModal(true)}>SignIn</TopItem>

                    <Modal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        handleClose={handleClose}>
                        <SignInForm handleClose= {() => handleClose(false) }/>
                    </Modal>

                </TopContainer>

            </TopBarConatiner>
        </>
    )
} 