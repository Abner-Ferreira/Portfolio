import React, { useContext, useState } from 'react';
import styles from "./button.module.css"
import pdfEn from "../../assets/docs/Abner's CV - en.pdf"
import pdfPt from "../../assets/docs/Abner's CV - pt.pdf"
import { PortfolioContext } from '../../contexts/PortfolioContexto';

import emailjs from "@emailjs/browser"

import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';

function Button({ title, variant, icon, link }) {

    

    const { message, setMessage, email, setEmail, name, setName, open, handleClickOpen, handleClose, clearInputs } = useContext(PortfolioContext)


    const navigate = useNavigate()

    const sendEmail = (e) => {

        console.log(e)
        if (e.name === "" || e.email === "" || e.message === "") {
            return toast.error("All fields must be filled", {
                style: {
                    fontSize: "18px"
                }
            })
        }

        emailjs.send("service_ecrzwek", "template_jsiu2jg", e, "rsZKBBiXl2xQ7Rmcz")
            .then(() => {
                toast.success("E-mail send successfuly!", {
                    style: {
                        fontSize: "18px"
                    }
                })

            })
            .then(() => {
                clearInputs()
                document.getElementById("cancelButton").click()
                // navigate("/")
            })
            .catch(() => toast.error("Error to send the email, please try again ", {
                style: {
                    fontSize: "18px"
                }
            }))
    }



    const { t } = useTranslation()

    return (
        <>

            {
                variant === "outline" ?
                    <button className={styles.buttonOutline}>
                        {title} {icon ? icon : ""}
                    </button>
                    :
                    variant === "outline download" ?

                        <button className={styles.buttonOutline}>
                            <a href={title === "Download CV" ? pdfEn : title === "Baixar currículo" ? pdfPt : ""} download={true} title="Abner's CV" id={styles.download}>

                                {title} {icon ? icon : ""}
                            </a>
                        </button>

                    :
                        title === "Contact Me" || title === "Entre em contato" || title === "Entre en contacto" ?

                            <button className={styles.button} onClick={handleClickOpen}>
                                {title}
                            </button>
                    :
                            title === "View Portfolio" || title === "Ver Portfólio" || title === "Ver Portafolio" ?
                                <Link to={"/portfolio"} id={styles.viewPortfolio} className={styles.button}>
                                    {title}
                                </Link>
                    :   variant === "card" ? 

                            <button className={styles.button}>
                                <a href={link} target='_blank'> Go to the project</a>
                            </button>
                    :   title === "Me contrate" || title === "Hire me" || title === "Contratame" ?
                            <button className={styles.button}>
                                <a href='mailto: abnerferr2015@gmail.com'>{title}</a>
                            </button>
                    : 
                            <button className={styles.button}>
                                {title}
                            </button>

            }

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{t("contactHeader")}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t("contactIntroduction")}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("contactFormName")}
                        type="name"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label={t("contactFormEmail")}
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="message"
                        label={t("contactFormMessage")}
                        type="text"
                        multiline
                        rows={10}
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </DialogContent>
                <DialogActions className={styles.botoesDiv}>
                    <button onClick={handleClose} className={styles.button} id='cancelButton'>{t("contactFormCancel")}</button>
                    <button onClick={() => sendEmail({ name: name, email: email, message: message })} className={styles.button}>{t("contactFormContact")}</button>
                </DialogActions>
            </Dialog>

            <Toaster position='top-center' />

        </>
    );
}

export default Button;