import React, { useEffect } from "react";
import green from "./images/green_light.png";
import amber from "./images/yellow_light.png";
import red from "./images/red_light.png";

const SummaryPage = ({ painLevel, waitTime, onReset }) => {
    const getColor = (level) => {
        if (level >= 1 && level <= 3) {
            return "green";
        } else if (level >= 4 && level <= 7) {
            return "amber";
        } else if (level >= 8 && level <= 10) {
            return "red";
        } else {
            return "unknown";
        }
    };

    const getImage = (color) => {
        if (color === "green") {
            return green;
        } else if (color === "amber") {
            return amber;
        } else if (color === "red") {
            return red;
        } else {
            return null;
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            onReset(); // Move to next patient
        }, 5000);

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, [onReset]);

    const color = getColor(painLevel);
    const image = getImage(color);

    return (
        <div>
            <h1>Summary and Wait Time</h1>
            <p>Pain Level: {painLevel}</p>
            <p>Severity: {color}</p>
            {image && <img src={image} alt={color} className = 'lights'/>}
            <p>Estimated Wait Time: {waitTime} minutes</p>
        </div>
    );
};




export default SummaryPage;
