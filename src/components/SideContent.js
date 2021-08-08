import React from 'react';
import styles from '../styles/components/SideContent.module.scss'

export function SideContent() {
    return(
        <div className={styles.sideContentContainer}>
            <img src="image.svg" alt="Users"></img>
        </div>
    )
}