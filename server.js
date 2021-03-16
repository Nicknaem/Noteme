console.log('server is running, catch me if you can');

//import express from './node_modules/express'
//import mongoose from './node_modules/mongoose'
const express = require('express');
const mongoose = require('mongoose');

var app = express();
var server = app.listen(5000, () => console.log("listening to you"));
app.use(express.json({extended: true}));

//===============================Express=================================
/*
app.post("/nika",function(request,response){ //order of req and res does matter!
  console.log(request.body);
  response.send("thankyou");
});

app.get("/nika",function(request,response){ //order of req and res does matter!
  response.send(JSON.stringify({test: 'xo'}))
});
*/


app.post("/save",function(request,response){ //order of req and res does matter!
    console.log("submitted post request:")
    console.log(request.body);

    response.send("server: movida dzma")
    const recievedNote = new Note (request.body)
    recievedNote.save();
});

app.get('/pullNotes', (req,res) => {
  console.log("sending notes to client:")
  
  Note.find(function(err,notes){
    res.send(notes)
  })
  //res.send([{title:"gamovushvi",content:"dzma"},{title:"meore",content:"dzma"}])
})


//==============================Mongoose==================================

mongoose.connect("mongodb://localhost:27017/notemeDB", {useNewUrlParser: true, useUnifiedTopology: true});

//creating schema for the collection
const noteSchema = new mongoose.Schema ({
  title: String,
  content: String
});

//creating model: telling what collection we want to have that schema
const Note = mongoose.model('Note', noteSchema);

//creating document: adding single record in Note collection based on its schema
const note = new Note ({
  title:"second note",
  content:"I dont really understand, first note was added while mongod wasnot running"
});

//note.save();
