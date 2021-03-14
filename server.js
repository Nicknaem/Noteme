console.log('my server is starting');

//import express from './node_modules/express'
//import mongoose from './node_modules/mongoose'
const express = require('express');
const mongoose = require('mongoose');

var app = express();
var server = app.listen(5000, ()=>console.log("listening to you"));


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

note.save();