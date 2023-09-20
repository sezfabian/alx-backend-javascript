const fs = require('fs');

function countStudents(path) {
  try {
    const file = fs.readFileSync(path, 'utf-8');
    const lines = file.split('\n');
    const count = lines.length - 1;
    const CSlist = [];
    const SWElist = [];

    for (const line of lines) {
      const student = line.split(',');
      if (student[3] === 'CS') {
        CSlist.push(` ${student[0]}`);
      }
      if (student[3] === 'SWE') {
        SWElist.push(` ${student[0]}`);
      }
    }
    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${CSlist.length}. List:${CSlist}`);
    console.log(`Number of students in SWE: ${SWElist.length}. List:${SWElist}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
