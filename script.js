let url = "https://x-colors.yurace.pro/api/random"

async function changeColor(){


   await fetch(url)
  .then(response => {
    
    if (!response.ok) {
      throw new Error(`Network response was not ok (status ${response.status})`);
    }
    
    return response.json();
  })
  .then(data => {
   
    console.log(data);
    document.getElementById("color").style.backgroundColor = data.hex;
  })
  .catch(error => {
    
    console.error('Fetch error:', error);
  });

 
}