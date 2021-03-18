import React, { useState, useEffect } from "react"
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
//import notes from '../notes'
import AddNote from './AddNote.jsx'
const axios = require('axios')



function App(){
    
   
    useEffect(() => {
          var pulledNotes = [];

          axios.get('/pullNotes')
          .then(function (response) {
            console.log("es movida dzma: type: "+typeof(response.data)+"\n");
            console.log(response.data);
            pulledNotes = response.data;
            setNotes(prevNotes => {
                return [...prevNotes,...pulledNotes];
            });
          })
    },[]); 

    const [notes,setNotes]= useState([]);
    //setNotes([{}]);
    function pullNote(newNote){
        //amdros ID ar aqvs da tuki daamateb da washli bazashi mainc darcheba
        setNotes(prevNotes =>{
            return [...prevNotes, newNote];
        })
    }
    console.log("hello");

    function deleteNote(id){

        axios.post('/delete', {_id: id})
          .then(function (response) {
            console.log(response);
          })

        setNotes(prevNotes => {
            return prevNotes.filter((entryNote) => {
                return entryNote._id !== id;
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
                id={entryNote._id}
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