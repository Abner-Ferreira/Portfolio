import { projects } from '../../services/projects';
import styles from './card.module.css'
import { useTranslation } from 'react-i18next';

function Cards() {

  const { t } = useTranslation()

  return (
    <>
      <main className={styles.containerCard}>
        {projects.map(projeto => (
          <div key={projeto.name} className={styles.card}>
            <div className={styles.cover}>
              <img src={projeto.image} alt={projeto.name} />
              <div className={styles.details}>
                <p>{projeto.name}</p>
                <div className={styles.miniLang}>
                  {projeto.technologies.map(tech => (
                    <img src={tech.src} alt={tech.name} title={tech.name} key={tech.name}/>
                  ))}
                </div>
              </div>
            </div>
            <div>

            </div>
            <div className={styles.moreDetails}>
              <span>{t("projectDate")} {projeto.date}</span>
              <a href={projeto.link} target='_blank'> Project </a>
              <a href={projeto.github} target='_blank'> Github </a>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default Cards;