import { useState } from "react";
import Logo from "../../assests/icons/logo.png"
import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import SignInForm from "../Forms/SignInForm/SignInForm.js";
import Modal from "../Modal/Modal";
import { LogoContainer, TopBarConatiner, TopContainer, TopItem } from "./ToBarStyles";

const TopData = ["Home", "Register", "SignIn"];

export default function TopBar(props) {
    const [openModal, setOpenModal] = useState(false);
    const [openModalReg, setOpenModalReg] = useState(false);

    const handleClose = () => setOpenModal(false);
    const handleCloseReg = () => setOpenModalReg(false);

    return (
        <>
            <TopBarConatiner>
                <LogoContainer>
                    <img src={Logo} width="130" />
                </LogoContainer>
                <TopContainer>
                    <TopItem>Home</TopItem>
                    <TopItem onClick={() => setOpenModalReg(true)}>Register</TopItem>
                    <TopItem onClick={() => setOpenModal(true)}>Sign In</TopItem>

                    <Modal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        handleClose={handleClose}>
                        <SignInForm handleClose={() => handleClose(false)} />
                    </Modal>
                    <Modal
                        openModal={openModalReg}
                        setOpenModal={openModalReg}
                        handleClose={handleCloseReg}>
                            <RegisterForm handleClose={() => handleCloseReg(false)}/>

                    </Modal>

                </TopContainer>

            </TopBarConatiner>
        </>
    )
} 