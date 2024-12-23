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
                        <td>
                            <button class="view-details-btn" onclick="window.location.href='../empDetails.html?name=${employee.name}'">
                                View Details
                            </button>
                        </td>
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