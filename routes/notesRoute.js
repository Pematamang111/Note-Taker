//dependencies
const router = require('express').Router();
const fs = require('fs');
const uuid = require('../helper/uuid');
const { error } = require('console');

router.get('/api/notes', (req, res) => {
    //for user
    res.json(`${req.method} was received to get notes.`)
    //for terminal
    console.log(`${req.method} was received to get notes.`)
})

router.post('/api/notes', (req, res) => {
    console.log(`${req.method} was received to see if console shows notes.`);

  // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

  // If all the required properties are present
    if (title && text) {
    // Variable for the object we will save
    const newNote = {
        title,
        text,
        note_id: uuid()
    };

    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
       if(err) throw err;

       const notesArray = JSON.parse(data);
       notesArray.push(newNote);
       
       const newNoteString = JSON.stringify(newNote);

    fs.writeFile('./db/db.json', newNoteString, (err) => 
        err? console.error(error) : console.log('new note is added.')
    );
    })

    const response = {
        status : 'success',
        body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
}else {
    res.status(500).json('error in posting note');
}
});

//delete the notes
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync('db/db.json', 'utf-8');
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
    })
    
    fs.writeFileSync('db/db.json', JSON.stringify(newNotes))
    res.json('deleted');
})


module.exports = router;