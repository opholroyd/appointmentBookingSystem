import React from 'react';
import ColumnTitles from './ColumnTitles';
import '../css/Header.css';

function SessionHeader(props) {
    let doctor = "ROWE, Ben (Dr)";

    //fetch doctors name

   

    return (
        <div className="session-container">
            <div className="inner-container">
            <h5>{doctor}</h5>
            <select id="slotTime" onChange={ props.sessionHandler } >
                <option value={null} >Choose a slot</option>
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
            </select>
        </div>
        <ColumnTitles />
        </div>
    )
}

export default SessionHeader
