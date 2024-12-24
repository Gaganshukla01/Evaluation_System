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

    // console.log("Employee ID:", employeeId);
    // console.log("Employee Name:", employeeName);

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
        // console.log('Success:', data); // Handle success
        // Optionally, you can reset the form or show a success message
        // window.location.href = "empDetails.html?name=${employee.name}";
        window.location.reload();
        employeeForm.reset();
    })
    .catch(error => {
        console.error('Error:', error); // Handle error
        // console.log("nhi hua, in error block");
    });
});






const fetchFeedbackData = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const forEmployee = urlParams.get("name"); // Get the name from the URL

    console.log("this is in frontene " + forEmployee);
    
    // Fetch feedback data from the API
    const response = await fetch(`http://localhost:8080/api/users/feedbackDetails`);
    
    console.log(response);
    
    // Check if the response is OK (status code 200)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const feedbackData = await response.json(); // Parse the JSON response

    // Filter feedback data based on forEmployee
    const filteredFeedbackData = feedbackData.filter(feedback => feedback.forEmployee === forEmployee);

    // Get the table body element
    const tbody = document.querySelector('#employeeTable tbody');
    tbody.innerHTML = ''; // Clear any existing rows

    // Populate the table with filtered feedback data
    filteredFeedbackData.forEach(feedback => {
        const row = document.createElement('tr'); // Create a new table row

        // Create and append cells for each piece of feedback data
        const interviewerCell = document.createElement('td');
        interviewerCell.textContent = feedback.fromuser; // Assuming fromuser is the interviewer's name
        row.appendChild(interviewerCell);

        const ratingCell = document.createElement('td');
        ratingCell.textContent = feedback.rating; // Assuming rating is a number or string
        row.appendChild(ratingCell);

        const interviewTypeCell = document.createElement('td');
        interviewTypeCell.textContent = feedback.interviewType; // Assuming interviewType is a string
        row.appendChild(interviewTypeCell);

        const feedbackCell = document.createElement('td');
        feedbackCell.textContent = feedback.feedback; // Assuming feedback is a string
        row.appendChild(feedbackCell);

        // Append the row to the table body
        tbody.appendChild(row);
    });
  } catch (error) {
      console.error('Error fetching feedback data:', error);
  }
};

// Call the function to fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchFeedbackData);