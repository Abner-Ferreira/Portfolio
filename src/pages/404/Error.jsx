import React from 'react'
import styles from './error.module.css'
import { useTranslation } from 'react-i18next'

export default function Error() {

  const { t } = useTranslation()

  return (
    <>
      <main className={styles.container}>
        <div className={styles.verticalBar}></div>
        <div className={styles.info}>
          <h1 className={styles.mainTxt}>{t('errorMainTxt')}</h1>
          <p className={styles.secondTxt}>{t('errorSecondTxt')}</p>
        </div>

      </main>
    </>
  )
}
