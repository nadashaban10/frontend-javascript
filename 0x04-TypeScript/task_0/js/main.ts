interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student ={
    firstName: "nada",
    lastName: "shaban",
    age: 20,
    location: "cairo"

}
const Student2: Student ={
    firstName: "sara",
    lastName: "mahmoud",
    age: 22,
    location: "egypt"

}

let studentsList: Student[] = [Student1, Student2]

const body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;
const table: HTMLTableElement =  document.createElement("table");
const tableHeader: HTMLTableRowElement = document.createElement("tr");

const headerName: HTMLTableCellElement = document.createElement("th");
headerName.textContent = "first Name";

const headerLocation: HTMLTableCellElement = document.createElement("th");
headerLocation.textContent = "Location";

tableHeader.appendChild(headerName);
tableHeader.appendChild(headerLocation);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
  
    const cellName: HTMLTableCellElement = document.createElement("td");
    cellName.textContent = student.firstName;
  
    const cellLocation: HTMLTableCellElement = document.createElement("td");
    cellLocation.textContent = student.location;
  
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    table.appendChild(row);
  });
  
  body.appendChild(table);
