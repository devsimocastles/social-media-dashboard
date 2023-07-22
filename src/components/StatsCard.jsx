import React from "react";
import { chooseIcon } from "../App";
import "../sass/main.css"


const StatsCard = (props) => (
    <div className="stat-card-container">
        <div className={"color-bar "+props.socialIcon}></div>
        <p>
            <img src={chooseIcon(props.socialIcon)} alt="Social Media Icon" className="social-icon" />
            {props.user}
        </p>
        <p className="followers-cantity">{props.followers}</p>
        <p className="followers-title">{props.socialIcon != "yt" ? "FOLLOWERS" : "SUSCRIBERS"}</p>
        <p className={props.positiveBalance ? "followers-status positive" : "followers-status negative"}><img src={chooseIcon(props.arrow)} alt="arrow icon"/>{props.newFollowers} Today</p>
    </div>
);

export default StatsCard;