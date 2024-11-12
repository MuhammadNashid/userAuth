document.getElementById('form').addEventListener('submit',async function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    
    console.log(email,pass)

    const res=await fetch('http://localhost:4000/api/login',{
        method:"POST",
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify({email,pass})
    })
    console.log(res);
    
    const data=await res.json()
    console.log(data)
    
    if(res.status==200){
        localStorage.setItem('token', data.token)
        window.location.href="../index.html"
    }
    else{
        alert(data.msg)
    }
 })