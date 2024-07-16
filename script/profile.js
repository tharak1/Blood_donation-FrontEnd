const deleteacc = document.querySelector(".delete-button-btn");

deleteacc.addEventListener("click",()=>{
    localStorage.removeItem('token');

    window.location.href = "login-signup.html";

})