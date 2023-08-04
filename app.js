const yargs = require("yargs");
const { addNote, readNote } = require("./notes");

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

// Create add command
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

yargs.parse(); // To set above changes
