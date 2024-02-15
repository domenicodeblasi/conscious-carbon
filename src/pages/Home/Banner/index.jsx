import React from "react";
import styles from "./Banner.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Banner = ({ handleClick }) => {
    return (
        <section className={styles.banner}>
            <XMarkIcon
                className={styles.bannerCloseBtn}
                onClick={handleClick}
            />
            <div className={styles.paragraphs}>
                <p>Dear user,</p>
                <p>We want to let you know that our API hasn't been updated since November 25th 2023. This means that any information you get from it might not be up-to-date. We're working to fix this problem. In the meantime, please choose dates before November 25th 2023 to make sure you get accurate data.</p>
                <p>We're sorry for any trouble this might cause and appreciate your patience and cooperation.</p>
                <p>Thanks, Conscious Carbon</p>
            </div>
        </section>
    )
}

export default Banner