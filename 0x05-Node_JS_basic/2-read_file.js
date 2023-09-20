const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n')
      .filter((line) => line.length > 0)
      .map((line) => line.split(','))
      .slice(1)
      .map((student) => ({
        firstName: student[0],
        lastName: student[1],
        age: student[2],
        field: student[3],
      }));

    const csStudents = students
      .filter((student) => student.field === 'CS')
      .map((student) => student.firstName);

    const sweStudents = students
      .filter((student) => student.field === 'SWE')
      .map((student) => student.firstName);

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
