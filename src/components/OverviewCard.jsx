import React from "react";
import { chooseIcon } from "../App";
import "../sass/main.css"


const OverviewCard = (props) => (
    <div className="overview-card">
        <div className="row">
            <span className="stat-name">
                {props.statName}
            </span>
            <img src={chooseIcon(props.socialIcon)} alt="social media icon" />
        </div>
        <div className="row">
            <span className="stat-number">
                {props.statNumber}
            </span>
            <span className={props.positiveBalance ? "overview-today positive" : "overview-today negative"}>
                <img src={chooseIcon(props.arrowIcon)} alt="arrow icon" /> {props.percentaje}%
            </span>
        </div>
    </div>
);

export default OverviewCard;