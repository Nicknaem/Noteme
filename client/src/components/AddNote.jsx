import React, { useState } from 'react'
const axios = require('axios')
//import notes from '../notes';

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
        event.preventDefault();

        axios.post('/save', note)
          .then(function (response) {
            console.log(response);
          })

        props.onAdd(note)

        //clear input fields after adding note
        setNote({
            title: "",
            content: ""
        })
        
    }

    return (
        <div>
            <form >
                <input value={note.title} onChange={handleChange} name='title' placeholder='Title' />
                <textarea value={note.content} onChange={handleChange} name='content' placeholder="Relax and take notes ..." cols="30" rows="3"></textarea>
                <button type="submit" onClick={submitNote}>Add</button>
            </form>
        </div>
    );

}


export default AddNote;