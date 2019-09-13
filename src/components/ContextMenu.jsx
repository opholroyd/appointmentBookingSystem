import React from 'react';
import { Menu, Item, Separator } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

// const onClick = ({ event, props }) => console.log(event, props);

function ContextMenu(props) {

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
    
    const OnCancelClick = (slotTime) => {
        // let cancelledAppointment = {
        //     "time" : slotTime,
        //     "firstname" : " ",
        //     "lastname" : " ",
        //     "reason" : " ",
        //     "notes" : " "
        // }
        // postApi(cancelledAppointment)
        console.log(slotTime)
        // document.location.reload()
    }
    
    const MyContextMenu = () => (
    
        <Menu id='menu_id'>
           <Item onClick={() => OnCancelClick(props.slotTimeSelection)}>Move</Item>
           <Item onClick={null}>Cancel</Item>
           <Separator />
           <Item onClick={null}>Block</Item>
        </Menu>
    );

    return (
        <>
         <MyContextMenu/>   
        </>
    )
}

export default ContextMenu
