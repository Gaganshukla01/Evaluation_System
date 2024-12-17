
async function fetchData() {
    try {
        const response = await fetch(''); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        console.log('Data received:', data);e
        console.log('Stored API Data:', apiData);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


const showCard=()=>{
    fetchData()
    let card=document.getElementById("data")
    card.innerHTML= "" ;
    data.forEach(values=>{
        let listItem=document.createElement("div")
        listItem.className="data"
        listItem.innerHTML=`
         <li>Name:${values.Name}</li>
         <li>Age:${values.Age}</li>
         <li>Tech:${values.Tech}</li>
         <li>Role:${values.Role}</li>
        `
        card.appendChild(listItem)
    })
    
}