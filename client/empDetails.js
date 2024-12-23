// JavaScript to handle modal functionality
document
  .getElementById("addEmployeeBtn")
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
  });

document.querySelector(".close").addEventListener("click", function () {
  // Hide the modal
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("modal")) {
    // Hide the modal if the user clicks outside of it
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("blur");
  }
});

document
  .getElementById("employeeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const employeeId = document.getElementById("employeeId").value;
    const employeeName = document.getElementById("employeeName").value;

    console.log("Employee ID:", employeeId);
    console.log("Employee Name:", employeeName);

    // Close modal
    document.getElementById("modal").style.display = "none";
    document.body.class;
    List.remove("blur");
  });

document.addEventListener("DOMContentLoaded", () => {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const employeeName = urlParams.get("name"); // Get the name from the URL

  // Set the employee name in the header
  if (employeeName) {
    document.getElementById("employeeNameHeader").textContent = employeeName;
    document.getElementById("employeeNameInput").value = employeeName; // Pre-fill the input field
  }

  // The rest of your existing code...
});

// http://localhost:8080/api/users/feedback

// sending data from form to api



// Select the form element
const employeeForm = document.getElementById('employeeForm');

// Add an event listener for the form submission
employeeForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Gather the form data
    const formData = new FormData(employeeForm);
    
    // Create an object to hold the data in the desired order
    const feedbackData = {
        forEmployee: formData.get('forEmployee'), // Employee Name
        fromuser: formData.get('fromuser'),       // Interviewer Name
        rating: formData.get('rating'),           // Rating
        interviewType: formData.get('interviewType'), // Interview Type
        feedback: formData.get('feedback'),       // Feedback
        tech: formData.get('tech')                 // Technical Skills
    };

    // Send the data to the API
    fetch('http://localhost:8080/api/users/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData) // Convert the object to JSON
    })
    .then(response => {
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return response.json(); // Parse JSON response
        } else {
            return response.text(); // Parse as text if not JSON
        }
    })
    .then(data => {
        console.log('Success:', data); // Handle success
        // Optionally, you can reset the form or show a success message
        window.location.href = "empDetails.html";
        employeeForm.reset();
    })
    .catch(error => {
        console.error('Error:', error); // Handle error
        console.log("nhi hua, in error block");
    });
});