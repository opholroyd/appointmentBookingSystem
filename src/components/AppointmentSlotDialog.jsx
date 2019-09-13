import React from 'react'
import '../css/AppointmentDialogStyling.css'

function AppointmentSlotDialog(props) {

    let Firstname = document.getElementById('firstName')
    let Lastname = document.getElementById('lastname')
    let Reason = document.getElementById('reasonInput')
    let Notes = document.getElementById('text')

    const postApi = (formData) => {
        fetch('https://localhost:44342/api/values', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
          
      });
    }

    const submitBox = () => {
        let formData = {
                "time" : props.slotTimeSelection, 
                "firstname" : Firstname.value,
                "lastname": Lastname.value,
                "reason": Reason.value,
                "notes" : Notes.value
        }
        postApi(formData)
        document.location.reload()
    }

    const closeBox = () => {
        let CancelButton = document.getElementById('booking-container')
        CancelButton.style.visibility = "hidden"
    }

    return (
        <div id="booking-container">
            <div className="booking-area">
                <h1 className='text'>Book a Slot</h1>
                <p className="name text">Patient Name</p>
                <input id="time"></input>
                <div className="name-container">
                    <input id="firstName" className="patientName" type="text" placeholder="First Name" required="yes"></input>
                    <input id="lastname" className="patientName" type="text" placeholder="Last Name" required="yes"></input>
                </div>
                <p className="reasonText text">Reason</p>
                <textarea className="inputs" id="reasonInput" type="text" required="yes"></textarea>
                <p className="notesText text" >Notes</p>
                <textarea type="inputs" rows="3" id="text" ></textarea>
        </div>
        <div className="buttons-container">
            <button className="buts" onClick={closeBox}>Cancel</button>
            <button className="buts" onClick={submitBox}>Submit</button>
        </div>
    </div>
    )
}

export default AppointmentSlotDialog
