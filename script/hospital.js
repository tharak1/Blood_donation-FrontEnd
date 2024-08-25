fetch("https://blood-donation-backend-beta.vercel.app/api/hospital/gethospital",{
    method: 'GET',
  headers: {
      'Accept': 'application/json',
  },
}).then(function (res){return res.json();})
.then(function (hospitals){
    let genratedHTML = '';
    hospitals.forEach((hospital) => {
        genratedHTML += `
        <div class="grid">
                <div class="name">
                    <h4>${hospital.name}</h4>
                </div>
                <div class="city">
                    <h4>${hospital.city}</h4>
                </div>
                <div class="ph-no">
                    <h4>${hospital.phno}</h4>
                </div>
                <div class="email">
                    <h4>${hospital.email}</h4>
                </div>
                <div class="contact-button">
                    <button class="contact-button-but">map</button>
                </div>

        </div>`     
    })//for each
    document.querySelector(".server-data").innerHTML = genratedHTML;
//.then response
})