async function getUser() {
    const token = localStorage.getItem("token")
    if (token) {
      const res = await fetch("http://localhost:4000/api/getUser", {
        headers: { authorization: `Bearer ${token}` },
      });
      const movie = await res.json();
      // console.log(movie);
      // console.log(movie.usr.name);
      // console.log(movie.usr.profile);
  
      document.getElementById("nav-sign").style.display = "none"
      document.getElementById("nav-sec-2").innerHTML = `
          <div class="nav-dropdown" id="uname">${movie.usr.name}</div>
             
              <div class="dropdown" id="dropdown">
                  <button onclick="myFunction()" class="dropbtn">▼</button>
                  <div id="myDropdown" class="dropdown-content">
                    <a onclick="logoutacc()">Logout</a>
                  </div>
              </div>
      `;
      let str=[]
      // console.log(movie.data)
      movie.data.map((data)=>{
        str += `
          <a href="./pages/globalPost.html?id=${data._id}">
                  <div class="card">
                      <div><img
                              src="${data.pic[0]}"
                              alt height="250" width="200"></div>
                      <div>${data.caption} </div>
                  </div>
              </a>
        `
      })
      document.getElementById('container').innerHTML=str
    }
  }
  getUser();
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content")
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show")
        }
      }
    }
  };
  
  function logoutacc() {
    localStorage.removeItem("token")
    alert("Logout Successfully")
    window.location.reload()
  }