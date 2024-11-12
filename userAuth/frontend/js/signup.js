document.getElementById('form').addEventListener('submit',async function(event) {
  event.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const cpass = document.getElementById('confirm-password').value;
  const phone = document.getElementById('phone').value;

  console.log(name,email,phone,pass,cpass)

  const res=await fetch('http://localhost:4000/api/adduser',{
      method:"POST",
      headers:{"content-Type":'application/json'},
      body:JSON.stringify({name,email,phone,pass,cpass})
  })
  console.log(res);
  
  const data=await res.json()
  if(res.status==201){
      alert(data.msg)
      window.location.href="./login.html"
  }
  else{
      alert(data.msg)
  }
})

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const phone = document.getElementById('phone').value;
  const gender = document.getElementById('gender').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
  } else {
    alert(`Signup successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}`);
  }
});
