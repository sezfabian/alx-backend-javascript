interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Draco',
  lastName: 'Malfoy',
  age: 17,
  location: 'Slytherin'
}

const student2: Student = {
  firstName: 'Luna',
  lastName: 'Lovegood',
  age: 15,
  location: 'Ravenclaw'
}

const studentList: [Student, Student] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableCellElement = row.insertCell(0);
const th2: HTMLTableCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First name</b>");
th2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
studentList.map((student) => {
	const newRow: HTMLTableRowElement = body.insertRow();
	const firstNameRow: HTMLTableCellElement = newRow.insertCell();
	const locationRow: HTMLTableCellElement = newRow.insertCell();
	firstNameRow.innerHTML = student.firstName;
	locationRow.innerHTML = student.location;
})
