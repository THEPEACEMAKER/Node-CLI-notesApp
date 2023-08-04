const yargs = require("yargs");
const { addNote, readNote, listNotes } = require("./notes");

// Create add command
yargs.command({
  command: "add",
  describe: "Add New Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, // Required
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },

  // Function for your command
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, // Required
      type: "string",
    },
  },

  // Function for your command
  handler(argv) {
    readNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List All Notes",

  handler(argv) {
    listNotes();
  },
});

yargs.parse(); // To set above changes
