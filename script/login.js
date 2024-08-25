let token = localStorage.getItem('token')
console.log(token);

const form1 = document.getElementById('login')
    form1.addEventListener('submit',login)

    async function login(event){
        event.preventDefault()
        
        let email = document.getElementById('email-login').value;
        let password = document.getElementById('password-login').value;
        
        const obj = {
                email:email,
                password:password
        }
        console.log(obj);
        console.log(JSON.stringify(obj));
        const result = await fetch('https://blood-donation-backend-beta.vercel.app/api/user/login',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then(response => response.json())
        console.log(result);

        if(result.error){
            console.log(result.error);
            document.querySelector(".err-msg-login").innerHTML = `<p>${result.error}</p>`;
        }else{
            window.location.href = "dashboard.html";
        }

        localStorage.setItem('token',result)
        //.then(response => console.log(response.token))
        //addtodev(result.token);
    }