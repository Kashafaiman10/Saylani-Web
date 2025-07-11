 let students = [];

    function addStudent() {
      const nameInput = document.getElementById("studentName");
      const marksInput = document.getElementById("studentMarks");
      const name = nameInput.value.trim();
      const marks = parseFloat(marksInput.value.trim());

      if (name === "" || isNaN(marks)) {
        alert("Please enter valid name and marks.");
        return;
      }

      students.push({ name, marks });
      nameInput.value = "";
      marksInput.value = "";
      updateStudentTable();
      updateAverage();
    }

    function updateStudentTable() {
      const tbody = document.getElementById("studentTableBody");
      tbody.innerHTML = "";

      students.forEach((student, index) => {
        const row = document.createElement("tr");
        if (student.marks < 40) {
          row.classList.add("low-score");
        }

        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.marks}</td>
          <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;

        tbody.appendChild(row);
      });
    }

    function updateAverage() {
      const total = students.reduce((sum, student) => sum + student.marks, 0);
      const average = students.length ? (total / students.length).toFixed(2) : 0;
      document.getElementById("averageDisplay").innerText = `Average Grade: ${average}`;
    }

    function deleteStudent(index) {
      students.splice(index, 1);
      updateStudentTable();
      updateAverage();
    }