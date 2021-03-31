import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Zoom , Fab, Collapse, Fade} from '@material-ui/core';
const axios = require('axios')

//import notes from '../notes';

function AddNote(props){

    const [note, setNote] = useState({
        title: '',
        content: '',
        color: '',
        tags: ''
    })

    const [isExpanded,setExpanded] = useState(false);

    function handleChange(event){
        const {name, value} = event.target

        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }

    function submitNote(event){
        event.preventDefault();

        props.onAdd(note)

        //clear input fields after adding note
        setNote({
            title: '',
            content: '',
            color: '',
            tags: '' 
        })
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note" >

                {/* or isExpanded && input  */}
                {/* or isExpanded ? input : null  transitions doesnot work in this case because "<input>" is not rendered */}
                <Collapse in={isExpanded}>
                    <input onFocus="this.placeholder = ''" className='note-title'
                        value={note.title} 
                        onChange={handleChange} 
                        name='title' 
                        placeholder='Title' 
                    /> 
                </Collapse> 
        
                

                <textarea 
                    value={note.content} 
                    onChange={handleChange} 
                    name='content' 
                    placeholder="Relax and take notes ..." 
                    cols="30" 
                    // rows={isExpanded ? 3 : 1}
                    style={isExpanded ? {height:"4em"} : {height:"1.5em"}}
                    onClick={expand}>
                </textarea>

                <Zoom in={isExpanded} timeout={400}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );

}


export default AddNote;