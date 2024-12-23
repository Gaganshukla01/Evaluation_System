console.log("kese ho");
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/api/admin/details')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          const tableBody = document.querySelector('#employeeTable tbody');
          const searchInput = document.getElementById('searchInput');

          // Function to render the employee data
          const renderEmployees = (employees) => {
              tableBody.innerHTML = ''; // Clear existing rows
              employees.forEach(employee => {
                  const row = document.createElement('tr');
                  row.innerHTML = `
                      <td>${employee.empId}</td>
                      <td>${employee.name}</td>
                      <td>${employee.email}</td>
                  `;
                  tableBody.appendChild(row);
              });
          };

          // Initial render
          renderEmployees(data);

          // Search functionality
          searchInput.addEventListener('input', () => {
              const searchTerm = searchInput.value.toLowerCase();
              const filteredEmployees = data.filter(employee => 
                  employee.name.toLowerCase().includes(searchTerm)
              );
              renderEmployees(filteredEmployees);
          });
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
});



// JavaScript to handle modal functionality
document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    // Hide the modal
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        // Hide the modal if the user clicks outside of it
        document.getElementById('modal').style.display = 'none';
        document.body.classList.remove('blur');
    }
});

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;

    console.log('Employee ID:', employeeId);
    console.log('Employee Name:', employeeName);

    // Close modal 
    document.getElementById('modal').style.display = 'none';
    document.body.class; List.remove('blur');
});