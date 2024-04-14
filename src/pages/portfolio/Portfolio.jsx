import React from 'react';
import styles from './portfolio.module.css'
import Cards from '../../components/Cards/Cards';


function Portfolio() {
    return (
        <>
            <main className={styles.containerPortfolio}>
                <Cards/>

                
            </main>
        </>
    );
}

export default Portfolio;