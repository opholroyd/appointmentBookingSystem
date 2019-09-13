import React, {useEffect, useState} from 'react'
import 'react-contexify/dist/ReactContexify.min.css';
import { MenuProvider } from 'react-contexify';

function GridData(props) {
    const [patientData, patients] = useState([]);

    useEffect(() => {
        if(true){
        fetch("https://localhost:44342/api/values")
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson)
          patients(myJson)
        })
    }
    //   loadChecker(false)
    }, [patients]);

    const appointmentSlotTime = (time) => {
        props.slotTimeSelection(time);
        
    }

    let showData = patientData.map(data =>
        <MenuProvider id="menu_id" className="grid-row"  onDoubleClick = {() => appointmentSlotTime(data.time)} key={data.patientID}>
          <div className="time grid-row-style" id={data.time}>{data.time}</div>
          <div className="patient grid-row-style">{data.lastName.toUpperCase() + ", " + data.firstName}</div>
          <div className="reason grid-row-style">{data.reason}</div>
          <div className="notes grid-row-style">{data.notes}</div>
        </MenuProvider>
       )
    return showData
}

export default GridData
