import React, { useState } from "react"
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
//import notes from '../notes'
import AddNote from './AddNote.jsx'



function App(){

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