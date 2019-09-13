import React, { useState } from 'react';
import './App.css';
import SessionHeader from './components/SessionHeader';
import AppointmentSlotDialog from './components/AppointmentSlotDialog';
import GridData from './components/GridData';
import ContextMenu from './components/ContextMenu';

function App() {
  const [session, setSession] = useState(15); 
  const [time, setTime] = useState("");

  const handleSlotChange = e => {
    setSession(e.target.value)
    console.log(session)
  }

  const slotClick = (clickTime) =>
  {
    setTime(clickTime)
    document.getElementById('booking-container').style.visibility = "visible"
  }

  return ( 
    <div className="App">
        <SessionHeader sessionHandler = {handleSlotChange} />
        <GridData slotTimeSelection = {slotClick}/>
        <AppointmentSlotDialog slotTimeSelection = {time}/>
        <ContextMenu slotTimeSelection = {time}/>
     </div>
  )
}

export default App

//template strings in react
//{"TEST"+VAR}

