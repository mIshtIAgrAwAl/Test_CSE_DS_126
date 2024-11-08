async function fetchdata(){
    try{
        let response= await fetch("https://api.github.com/users?per_page=10")
        let data= await response.json()
        data.forEach(element => {
            let h3=document.createElement('h3');
            h3.textContent=element.login;
            let top=document.getElementById('top');
            top.appendChild(h3);       
        });    
    }
    catch(error){
        console.log(error)
    }}
    fetchdata();