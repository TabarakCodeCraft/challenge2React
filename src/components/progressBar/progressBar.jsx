import React from "react";
import './progress.css';

const ProgressBar = ({ title, bgcolor, value }) => {


    const percentage = Math.round(value);

    return (
        <>
            <h3 className="title">{title}</h3>
            <div className="myProgress">
                <div className="container">
                    <div className="filler" style={{ width: `${value}%`, backgroundColor: bgcolor }}></div>
                </div>

                <div className="flex">
                    <span className="label"></span>
                    <span className="percentage">{`${percentage}%`}</span>

                </div>
            </div>
        </>
    );
};

export default ProgressBar;
