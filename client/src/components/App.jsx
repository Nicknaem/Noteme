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
          //pulling notes from db
          axios.get('/pullNotes')
          .then(function (response) {
            console.log("es movida dzma: type: "+typeof(response.data)+"\n");
            console.log(response.data);
            pulledNotes = response.data;
            setNotes(prevNotes => {
                return [...pulledNotes];
            });
          })
    },[]); 

    const [notes,setNotes]= useState([]);
    //setNotes([{}]);
    

    function pullNote(newNote){

        axios.post('/save', newNote)
          .then(function (response) {
            console.log(response);
          })

        var pulledNotes = [];
        //pulling notes from db
        axios.get('/pullNotes')
        .then(function (response) {
        console.log("es movida dzma: type: "+typeof(response.data)+"\n");
        console.log(response.data);
        pulledNotes = response.data;
            setNotes(pulledNotes);
        })


        //amdros ID ar aqvs da tuki daamateb da washli bazashi mainc darcheba
        //sanam bazastan gveqneboda kavshiri ase xdeboda
        /*
        setNotes(prevNotes =>{
            return [...prevNotes, newNote];
        })
        */
    }
    console.log("hello");

    function deleteNoteFromArray(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((entryNote) => {
                return entryNote._id !== id;
            })
        })
    }

    function fade(id) {
        setNotes(prevNotes => {
            console.info(prevNotes);
            prevNotes.forEach(function (item) {
                if (item._id === id) item.fade = true;
            }) 
            var note = [...prevNotes]; 
            return note;
        });
    }
    function deleteNote(id){

        axios.post('/delete', {_id: id})
          .then( (response) => {
              console.log(response);
            if(response.status == 200){
                //find note instance by id and changei its visibility state
                fade(id);
            }
          })


          
        /*
        setNotes(prevNotes => {
            return prevNotes.filter((entryNote) => {
                return entryNote._id !== id;
            })
        })
        */
    }

    
    return(
    <div>
        <Header/>
        <AddNote onAdd={pullNote}/>
        {
            notes.map((entryNote, index) => {
                return (
                <Note
                    key={entryNote._id}
                    id={entryNote._id}
                    title={entryNote.title}
                    content={entryNote.content}
                    onDelete={deleteNote}
                    fade={entryNote.fade ? true : false}
                    deleteNoteFromArray={deleteNoteFromArray}
                />
                );
            })
        }

        <Footer/>
    </div>
    );
}

export default App;