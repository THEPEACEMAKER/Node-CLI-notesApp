var fs = require("fs");

var addNote = function (title, body) {
  let note = { title, body };

  fs.writeFileSync("notes.txt", JSON.stringify(note));
  logNote(note);
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
