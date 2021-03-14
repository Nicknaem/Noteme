import React, { useState } from 'react'
import notes from '../notes';

function AddNote(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

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
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input value={note.title} onChange={handleChange} name='title' placeholder='Title' />
                <textarea value={note.content} onChange={handleChange} name="content" placeholder="Relax and take notes ..." cols="30" rows="3"></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );

}


export default AddNote;