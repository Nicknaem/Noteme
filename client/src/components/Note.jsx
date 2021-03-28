import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Zoom } from '@material-ui/core';

function Note(props){
    const [noteVisible, setVisible] = useState(true);

    function handleClick(){
        setTimeout(()=>{
            console.log();
            props.onDelete(props.id)
        }, 200);
       
    }
    
    return(
    <Zoom in={true} timeout={300}>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteOutlineIcon/></button>
        </div>
    </Zoom>
    );
}

export default Note;