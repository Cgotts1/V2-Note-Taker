const notes = require("express").Router();
const { query } = require("express");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// GET Route for retrieving all the notes
//http://localhost:3001/api/notes
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => {
    console.log(JSON.parse(data));
    res.json(JSON.parse(data));
  });
});

// POST Route for a new UX/UI note
notes.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully 🚀`);
  } else {
    res.error("Error in adding note");
  }
});

module.exports = notes;
