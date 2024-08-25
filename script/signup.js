const form = document.getElementById('sign-up')
form.addEventListener('submit',register)
    async function register(event){
        event.preventDefault()
        
        let username = document.getElementById('name-signup').value;
        let email = document.getElementById('email-signup').value;
        let password = document.getElementById('password-signup').value;
        
        const obj = {
            username:username,
                email:email,
                password:password
        }
        console.log(obj);
        console.log(JSON.stringify(obj));


        const result = await fetch('https://blood-donation-backend-beta.vercel.app/api/user/register',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        }).then(res => res.json())

        console.log(result);
        if(result.error){
            console.log(result.error);
            document.querySelector(".err-msg-sign-up").innerHTML = `<p>${result.error}</p>`;
        }

        
        const obj1 = {
                email:email,
                password:password
        }

        if(!result.error){
            const result1 = await fetch('https://blood-donation-backend-beta.vercel.app/api/user/login',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj1),
        }).then(res => res.json())

        console.log(result1);
        if(result1.error){
            console.log(result1.error);
            document.querySelector(".err-msg-sign-up").innerHTML = `<p>${result.error}</p>`;
    }else{
        window.location.href = "userdetails.html";
    }
    localStorage.setItem('token',result1)

        }

        

        
    }