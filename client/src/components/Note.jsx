import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Collapse, Zoom } from '@material-ui/core';
import { TransitionGroup } from 'react-transition-group';

function Note(props){

    const [isVisible, setVisible] = useState(true);
    function handleClick(){
//deleting=changing note visibility state without checking server responce
        // setVisible(false);
        props.onDelete(props.id)
//setTimeout(()=>{ }, 200);

    }
    useEffect(function() {
        console.info('test');
        if (props.fade === true) {
            setVisible(false);
            setTimeout(function() {props.deleteNoteFromArray(props.id)}, 1000);
        }
    })
    return(
        <div className='halfWidth'>
        <Collapse orientation={'horizontal'} in={isVisible} timeout={250} >
          <Zoom in={isVisible} timeout={200}> 
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={handleClick}><DeleteOutlineIcon/></button>
            </div>
            </Zoom> 
           </Collapse>
         </div>
    );
}

export default Note;