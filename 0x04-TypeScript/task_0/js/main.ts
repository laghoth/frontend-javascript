import "../styles.css";

interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: student = {
  firstName: "othmane",
  lastName: "laghlimi",
  age: 29,
  location: "kelaa des sraghna",
};
const student2: student = {
  firstName: "mohammed",
  lastName: "laghlimi",
  age: 33,
  location: "marrakech",
};

const studentsList: student[] = [student1, student2];

const table = document.createElement("table");
table.className = "table-auto border border-collapse border-gray-300 w-full";

const headerRow = document.createElement("tr");
headerRow.innerHTML = `
  <th class="border px-4 py-2">First Name</th>
  <th class="border px-4 py-2">Location</th>
`;
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td class="border px-4 py-2">${student.firstName}</td>
      <td class="border px-4 py-2">${student.location}</td>
    `;
  table.appendChild(row);
});

document.body.appendChild(table);
