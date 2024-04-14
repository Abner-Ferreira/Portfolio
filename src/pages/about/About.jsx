import React from 'react';
import { useTranslation } from 'react-i18next';
import abner from "../../assets/AbnerPixar.jpg";
import Button from "../../components/Button/Button";
import styles from "./about.module.css";

function About() {

    const { t } = useTranslation()

    return (
        <>
            <main className={styles.containerAbout}>

                <div className={styles.containerImg}>
                        <img src={abner} alt="photo Abner" />
                </div>


                <div className={styles.containerIntroduction}>
                    <h1>{t("titleAbout")}</h1>
                    <p>{t("introductionAbout")}</p>
                    <p>{t("introductionAbout2")}</p>

                    <Button title={t("btnSeePortfolio")} variant={"normal"} />
                </div>
            </main>

        </>
    );
}

export default About;