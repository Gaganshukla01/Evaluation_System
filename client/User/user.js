let data = [];

async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080/api/admin/details");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    data = await response.json();
    showCard(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

const showCard = (filteredData) => {
  let card = document.getElementById("data");
  card.innerHTML = "";
  filteredData.forEach((values) => {
    let listItem = document.createElement("div");
    listItem.className = "data";
    listItem.innerHTML = `
      <li>Name: ${values.name}</li>
      <li>Emp ID: ${values.empId}</li>
      <li>Email: ${values.email}</li>
    `;
    card.appendChild(listItem);
  });
};

function filterCards() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );
  showCard(filteredData);
}

fetchData();
