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








document.addEventListener('DOMContentLoaded', () => {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const employeeName = urlParams.get('name'); // Get the name from the URL

    // Set the employee name in the header
    if (employeeName) {
        document.getElementById('employeeNameHeader').textContent = employeeName;
        document.getElementById('employeeNameInput').value = employeeName; // Pre-fill the input field
    }

    // The rest of your existing code...
});