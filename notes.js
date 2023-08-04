var fs = require("fs");

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};

var addNote = function (title, body) {
  let notes = fetchNotes();
  let note = { title, body };

  let double = notes.filter((note) => note.title === title);

  if (double.length > 0) {
    console.log("Alert: Note Already Added");
  } else {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNote(note);
  }
};

let logNote = function (note) {
  console.log("********************************");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log("********************************");
};

module.exports = {
  addNote,
};
