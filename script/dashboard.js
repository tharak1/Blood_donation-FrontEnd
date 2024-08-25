let token = localStorage.getItem('token')
const call = async()=>{
    const result = await fetch('https://blood-donation-backend-beta.vercel.app/api/userData/getCurrentUserdata',{
            method:'GET',
            headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
            },
        }).then(response => response.json())
        console.log(result);

if(result[0].profileimageurl){
    document.querySelector(".logo").innerHTML = `
    <img src=${result[0].profileimageurl} alt="assets/user.png">
    <span class="nav-item">${result[0].firstname}</span>`;

    document.querySelector(".profile-image-holder").innerHTML = `
    <img src=${result[0].profileimageurl} alt="assets/user.png">
    `;

}
else{
    document.querySelector(".logo").innerHTML = `
    <img src="assets/user.png" alt="assets/user.png">
    <span class="nav-item">${result[0].firstname}</span>
    `;

    document.querySelector(".profile-image-holder").innerHTML = `
    <img src="assets/user.png" alt="assets/user.png">
    `;
}


document.querySelector(".user-info").innerHTML = `
    
<div class="user-container">


<div class="grid ">
  <div class="name">
      <h4>Name :</h4>
  </div>
  <div class="server-responce">
      <h4>${result[0].firstname}</h4>
  </div>
</div>

<div class="grid ">
<div class="email">
    <h4>email :</h4>
</div>
<div class="server-responce">
    <h4>${result[0].email}</h4>
</div>
</div>

<div class="grid ">
<div class="blood-group">
  <h4>Blood group :</h4>
</div>
<div class="server-responce">
  <h4>${result[0].bloodgroup}</h4>
</div>
</div>
</div>
    `;




}


call();

const logout = document.querySelector(".logout");

logout.addEventListener("click",()=>{
    window.location.href = "login-signup.html";
    localStorage.removeItem('token');
});