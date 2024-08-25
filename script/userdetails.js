// http://localhost:5000

const form1 = document.getElementById('my-data-form')
    form1.addEventListener('submit',setData)
    let token = localStorage.getItem('token')
    console.log(token);

    async function setData(event){
        event.preventDefault();
        var title = document.getElementById("title").value;
        var firstname = document.getElementById("first_name").value;
        var lastname = document.getElementById("last_name").value;
        var gender = document.getElementById("gender").value;

        let bloodgrouplower = document.getElementById("Blood-group").value;
        let bloodgroup = bloodgrouplower.toUpperCase();
        var diseases = document.getElementById("Any-diseases").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("Address").value;
        var zipcode = document.getElementById("zip").value;
        var country = document.getElementById("country").value;
        var code = document.getElementById("code").value;
        var phoneno = document.getElementById("phone").value;
        var email = document.getElementById("your_email").value;
        var place = document.getElementById("place").value;

        const obj ={
            title,firstname,lastname,gender,bloodgroup,diseases,address
            ,zipcode,country,code,phoneno,email,place,age
        }
        console.log(obj);
        console.log(JSON.stringify(obj));
        console.log(token);
        const result = await fetch('https://blood-donation-backend-beta.vercel.app/api/userData/createUserData',{
            method:'POST',
            headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(obj),
        }).then(response => response.json())
        console.log(result);

        if(result){
            window.location.href = "dashboard.html";
        }

        // localStorage.setItem('token',result)
        //.then(response => console.log(response.token))
        //addtodev(result.token);
    }