const express = require('express');
const path = require('path');

const api = require('./routes/index.js');
// const notesApi = require('./routes/notes.js');

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// http://localhost:3001/api
app.use('/api', api);


app.use(express.static('public'));

// GET Route for homepage
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for feedback page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);









// // POST Route for submitting feedback
// app.post('/api/notes', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to submit feedback`);

//   // Destructuring assignment for the items in req.body
//   const { noteTitle, noteText } = req.body;

//   // If all the required properties are present
//   if (noteTitle && noteText) {
//     // Variable for the object we will save
//     const newNote = {
//       noteTitle,
//       noteText,
//       note_id: uuid(),
//     };

//     readAndAppend(newNote, './db/db.json');

//     const response = {
//       status: 'success',
//       body: newFeedback,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting feedback');
//   }
// });



















app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

