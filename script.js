let url = "https://x-colors.yurace.pro/api/random"

async function changeColor(){


   await fetch(url)
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Network response was not ok (status ${response.status})`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data here
    console.log(data);
    document.getElementById("color").style.backgroundColor = data.hex;
  })
  .catch(error => {
    // Handle errors here
    console.error('Fetch error:', error);
  });

 
}