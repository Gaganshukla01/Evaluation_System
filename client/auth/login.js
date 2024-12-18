document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      email: email,
      password: password,
    };
    console.log(data);

    try {
      // Send a POST request to the API
      const response = await fetch("http://localhost:8090/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);

      console.log("Response status:", response.status);

      if (response.ok) {
        window.location.href = "./home.html";
      } else {
        const error = await response.json();
        alert("Login failed: " + error.message);
      }
    } catch (error) {
      console.error("Error aa gyaaa:", error);
      alert("Login failed: Enter valid email or password");
    }
  });
