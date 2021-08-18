import React from 'react';
import styles from '../styles/components/SideContent.module.scss'

import Image from "next/image"

export function SideContent() {
    return(
        <div className={styles.sideContentContainer}>
            <Image src="/image.svg" width={500} height={900} alt="Users" />
        </div>
    )
}