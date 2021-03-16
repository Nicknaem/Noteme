import React, { useState, useEffect } from "react"
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
//import notes from '../notes'
import AddNote from './AddNote.jsx'
const axios = require('axios')



function App(){
    
    var pulledNotes = [];
    useEffect(() => {
          axios.get('/pullNotes')
          .then(function (response) {
            console.log("es movida dzma: typeof"+typeof(response.data)+"\n");
            console.log(response.data);
            pulledNotes = response.data;
            setNotes(pulledNotes);
          })
    },[]);

    const [notes,setNotes]= useState([]);
    function pullNote(newNote){
        setNotes(prevNotes =>{
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((entryNote, index) => {
                return index !== id;
            })
        })
    }

    return(
    <div>
        <Header/>
        <AddNote onAdd={pullNote}/>
        {notes.map((entryNote, index) => {
            return (
            <Note
                key={index}
                id={index}
                title={entryNote.title}
                content={entryNote.content}
                onDelete={deleteNote}
            />
            );
        })
        }

        <Footer/>
    </div>
    );
}

export default App;