const yargs = require("yargs");

const studentFun = require("./studentFun");

// Add Student
yargs.command({
  command: "add",
  describe: "Add a student",
  builder: {
    id: {
      describe: "ID for Student",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "Student's Name",
      demandOption: true,
      type: "string",
    },
    grades: {
      describe: "Student's degrees",
      demandOption: true,
      type: "array",
    },
    comment: {
      describe: "Comment on a student",
      type: "string",
    },
  },
  handler(argv) {
    studentFun.addStd(argv.id, argv.name, argv.grades, argv.comment);
  },
});

// Delete a student
yargs.command({
  command: "delete",
  describe: "Delete a student by Id",
  builder: {
    id: {
      demandOption: true,
      describe: "ID to delete a student",
      type: "number",
    },
  },
  handler(argv) {
    studentFun.deleteStd(argv.id);
  },
});

// Read Student Info
yargs.command({
  command: "read",
  describe: "Read Student Info",
  builder: {
    id: {
      describe: "ID to read student Info",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    studentFun.readStd(argv.id);
  },
});

// List All Students
yargs.command({
  command: "list",
  describe: "List All Students",
  handler(argv) {
    studentFun.listAllStds();
  },
});

console.log(yargs.argv);
// yargs.parse();
