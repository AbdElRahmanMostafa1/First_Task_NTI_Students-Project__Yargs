const fs = require("fs");

// Add Handler
const addStd = (id, name, grades, comment) => {
  const allStudents = loadStudents();
  let sum = 0;
  grades.forEach((deg) => (sum += deg));
  // const totalGrades = grades.reduce((a, b) => a + b);
  allStudents.push({
    id,
    name,
    grades,
    comment,
    total: sum,
  });
  saveStudents(allStudents);
};

// Delete Handler
const deleteStd = (id) => {
  const allStudents = loadStudents();
  const newAllStds = allStudents.filter((stud) => stud.id !== id);
  saveStudents(newAllStds);
};

// Read Student info
const readStd = (id) => {
  const allStds = loadStudents();
  const reqStd = allStds.find((std) => std.id === id);
  if (!reqStd) {
    return console.log(`Oops! Student with ID ${id} is't found`);
  }
  // Make first letter of the name Capital
  const editedName = reqStd.name[0].toUpperCase() + reqStd.name.slice(1);
  // If a comment is Found
  const ternaryComment = reqStd.comment && `. He is ${reqStd.comment}`;
  return console.log(
    `Student ID is ${reqStd.id}, his name is ${editedName}, also his total grades is ${reqStd.total}${ternaryComment}`
  );
};

// list All Students
const listAllStds = () => {
  const allStds = loadStudents();
  allStds.forEach((std) =>
    console.log(
      `Name: ${std.name}. Grades: ${std.grades}. Total: ${std.total}.`
    )
  );
};

// Make Obj readible to Access OR add to array
const loadStudents = () => {
  try {
    const studentBuffer = fs.readFileSync("./students.json");
    const studentJson = studentBuffer.toString();
    return JSON.parse(studentJson);
  } catch (e) {
    return [];
  }
};

// Turn Object into JSON
const saveStudents = (obj) => {
  const studentJson = JSON.stringify(obj);
  fs.writeFileSync("./students.json", studentJson);
};

module.exports = { addStd, deleteStd, readStd, listAllStds };
