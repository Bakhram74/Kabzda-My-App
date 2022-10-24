import React, {FC, useState} from 'react';
import {truncate} from "fs";

type OnOffPropsType = {
    setColor: (isOn: boolean) => void
    isOn: boolean
}

const OnOff: FC<OnOffPropsType> = ({setColor, isOn}) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: 'inline-block',
        backgroundColor: isOn ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "2px",
        padding: "2px",
        display: 'inline-block',
        backgroundColor: isOn ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: isOn ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {
                setColor(true)
            }}>on
            </div>
            <div style={offStyle} onClick={() => setColor(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;