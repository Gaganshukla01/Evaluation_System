document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get the values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validation for email
    if (!email.endsWith('@yash.com')) {
        document.getElementById('emailError').textContent = 'Email must end with @yash.com';
        isValid = false; // Mark as invalid
    }

    // Validation for password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        isValid = false; // Mark as invalid
    }

    if (!isValid) {
        return; // Stop form submission if validation fails
    }

    // Create the data object
    const data = {
        username: username,
        email: email,
        password: password,
        role: "TP"
    };
    console.log(data);

    try {
        // Send a POST request to the API
        const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log('Response status:', response.status); 
        window.location.href = 'login.html';
        
        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
        } else {
            const error = await response.json();
            console.error('Error:', error);
            alert('Registration failed: ' + error.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});