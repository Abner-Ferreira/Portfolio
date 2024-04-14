import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineDownload } from "react-icons/ai";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import TypeWriter from "typewriter-effect";
import abner from "../../assets/Abner.png";
import Button from '../../components/Button/Button';
import styles from "./home.module.css";
import { PortfolioContext } from '../../contexts/PortfolioContexto';





function Home() {

    const { t } = useTranslation()

    const { skills } = useContext(PortfolioContext)

    return (
        <>

            <main className={styles.containerHome}>
                <div className={styles.containerInfo}>

                    <div className={styles.apresentation}>

                        <h1>{t("introductionHome")}</h1>
                        <h1 id={styles.name}>{t("nameIntroduction")}</h1>
                    </div>

                    <div className={styles.writing}>
                        <TypeWriter className={styles.writing}
                            onInit={(typewriter) => {

                                typewriter
                                    .typeString(t("habilities"))
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(t("habilities2"))
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(t("habilities3"))
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(t("habilities4"))
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(t("habilities5"))
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start()
                            }} options={{
                                loop: true
                            }}
                        />
                    </div>




                    <div className={styles.introduction}>
                        <p>{t("summary")}</p>
                        <p>{t("summary2")}</p>
                    </div>


                    <div className={styles.iconContainer}>
                        {skills.map(logo => (
                            <div>
                                <img src={logo.icon} alt="" key={logo.name} className={styles.icon} title={logo.name}/>

                            </div>
                        ))}
                    </div>

                    <div className={styles.divBtn}>


                        <Button title={t("btnHire")} variant={"normal"} />
                        <Button variant={"outline download"} title={t("btnDownloadResume")} icon={<AiOutlineDownload />} />


                    </div>



                    <div className={styles.divSociais}>
                        <a href="https://github.com/Abner-Ferreira" target='_blank'>
                            <BsGithub size={22} /> {t("socialGithub")}
                        </a>
                        <a href="https://www.linkedin.com/in/abner-ferreira/" target='_blank'>
                            <BsLinkedin size={22} /> {t("socialLinkedin")}
                        </a>
                        <a href="https://www.instagram.com/abnerferr_/" target='_blank'>
                            <BsInstagram size={22} /> {t("socialInstagram")}
                        </a>
                    </div>






                </div>



                <div className={styles.divImg}>
                    <img src={abner} alt="Abner's Image" />
                </div>




            </main>
        </>
    );
}

export default Home;