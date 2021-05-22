import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import React from "react";

type prop = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export default function Profile({...prop}: prop) {
    return (
        <img
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            alt="profile_image"
            {...prop}
        />
    )
}