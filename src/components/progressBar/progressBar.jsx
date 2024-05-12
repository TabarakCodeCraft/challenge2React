import React from "react";

const ProgressBar = (props) => {
    const { title, bgcolor, value } = props;

    const containerStyles = {
        display: 'flex',
        justifyContent:"space-between",
        marginBottom: '10px' ,
        height: 27,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${value}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: "5px 10px",
        color: 'white',
        fontWeight: 'bold'
    }

    const titleStyle ={
        fontWeight:"500",
        margin: "20px 10px 10px 0",
        color: '#0E183E',
        fontSize:'16px',
        fontFamily: 'Poppins',
    };

    const completed = Math.round(value);

    return (
        <div>
            <h3 style={titleStyle}>{title}</h3>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}></span>
                    <span style={{fontFamily:"Poppins", fontWeight:"500", fontSize:"16px", marginLeft: "10px"}}>{`${completed}%`}</span>
                </div>
            </div>
    
        </div>
    );
};

export default ProgressBar;
