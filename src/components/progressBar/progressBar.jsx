import React from "react";
import './progress.css';

const ProgressBar = (props) => {
    const { title, bgcolor, value } = props;

    const completed = Math.round(value);

    return (
        <>
            <h3 className="title">{title}</h3>
            <div className="myProgress">
                <div className="container">
                    <div className="filler" style={{ width: `${value}%`, backgroundColor: bgcolor }}></div>
                </div>

                <div className="flex">
                    <span className="label"></span>
                    <span className="percentage">{`${completed}%`}</span>

                </div>
            </div>
        </>
    );
};

export default ProgressBar;
