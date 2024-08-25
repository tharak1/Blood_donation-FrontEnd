let bloodGroupSelector = document.getElementById("bloodgroup");
let bloodGroup = document.getElementById("bloodgroup").value;
console.log(bloodGroup);


if(bloodGroup === 'noneselected'){
    fetch(`https://blood-donation-backend-beta.vercel.app/api/userData/getUserdata`,{
    method: 'GET',
  headers: {
      'Accept': 'application/json', 
  },
}).then(function (res){return res.json();})
.then(function (donors){
    let genratedHTML = '';
    donors.forEach((donor) => {
        genratedHTML += `
        <div class="grid">
                <div class="name">
                    <h4>${donor.firstname}</h4>
                </div>
                <div class="blood-group">
                    <h4>${donor.bloodgroup}</h4>
                </div>
                <div class="ph-no">
                    <h4>${donor.phoneno}</h4>
                </div>
                <div class="age">
                    <h4>${donor.age}</h4>
                </div>
                <div class="email">
                    <h4>${donor.email}</h4>
                </div>
                <div class="contact-button">
                    <button class="contact-button-but">Contact</button>
                </div>

        </div>`     
    })//for each
    document.querySelector(".server-data").innerHTML = genratedHTML;
//.then response
})
}









bloodGroupSelector.addEventListener("change",()=>{

    let ans = ''
    let bloodGroup = document.getElementById("bloodgroup").value;
    
    if(bloodGroup !== 'noneselected'){
        if(bloodGroup.length == 2){
            if(bloodGroup[1]==='+'){
                ans = bloodGroup[0] + '%2B';
            }
            else{
                ans = bloodGroup[0] + '%2D';
            }
        }
        if(bloodGroup.length == 3){
            if(bloodGroup[2]==='+'){
                ans = bloodGroup[0] + bloodGroup[1] +'%2B';
            }
            else{
                ans = bloodGroup[0] + bloodGroup[1] +'%2D';
            }
        }
    }
    


fetch(`https://blood-donation-backend-beta.vercel.app/api/userData/getUserdata?bloodgroup=${ans}`,{
    method: 'GET',
  headers: {
      'Accept': 'application/json', 
  },
}).then(function (res){return res.json();})
.then(function (donors){
    let genratedHTML = '';
    donors.forEach((donor) => {
        genratedHTML += `
        <div class="grid">
                <div class="name">
                    <h4>${donor.firstname}</h4>
                </div>
                <div class="blood-group">
                    <h4>${donor.bloodgroup}</h4>
                </div>
                <div class="ph-no">
                    <h4>${donor.phoneno}</h4>
                </div>
                <div class="age">
                    <h4>${donor.age}</h4>
                </div>
                <div class="email">
                    <h4>${donor.email}</h4>
                </div>
                <div class="contact-button">
                    <button class="contact-button-but">Contact</button>
                </div>

        </div>`     
    })//for each
    document.querySelector(".server-data").innerHTML = genratedHTML;
//.then response
})

});