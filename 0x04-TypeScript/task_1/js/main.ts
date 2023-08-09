export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attrName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};


export interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

export class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';    
  }

  displayName() {
    return `${this.firstName}`;
  }
}

// const teacher3: Teacher = {
//   firstName: 'Jai',
//   fullTimeEmployee: false,
//   lastName: 'Hindley',
//   location: 'Perth',
//   contract: false,
// };

// console.log(teacher3);

// const director1: Directors = {
//   firstName: 'Jonas',
//   lastName: 'Vingegaard',
//   location: 'Copenhagen',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

// const student: StudentClass = new StudentClass("Remco", "Evenepoel");

// // Access the properties and methods of the student
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.workOnHomework());
// console.log(student.displayName());