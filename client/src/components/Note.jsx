import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Zoom } from '@material-ui/core';

function Note(props){

    const [isVisible, setVisible] = useState(true);
    function handleClick(){
//deleting=changing note visibility state without checking server responce
        setVisible(false);
        props.onDelete(props.id)
//setTimeout(()=>{ }, 200);

    }
    
    return(
    <Zoom in={isVisible} timeout={300}>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteOutlineIcon/></button>
        </div>
    </Zoom>
    );
}

export default Note;