const apiURL = "https://68219a21259dad2655afc28a.mockapi.io"
let username = document.getElementById("username")
let pass = document.getElementById("pass")
let email = document.getElementById("email")
let submitBtn = document.getElementById("submitBtn")


submitBtn.addEventListener("click", async (e)=> {
e.preventDefault();
let user = {username:username.value, pass : pass.value ,email: email.value}
createUser(user);
})

async function createUser(user){

    try {
        let checkUser = await fetch(`${apiURL}/login`)
if (username.value<=4){
    alert("username must be at least five characters")
return;
}
if (pass.value<=4){
    alert("pass must be at least seven characters")
return;
}
let users = await checkUser.json()
let userExist = users.some((u)=>{
    return username.value == u.username.value && email.value == u.email.value;
})
if(userExist){
    alert ("user already exist")
    return;
}
let response = await fetch(`${apiURL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username : "username.value",
            email: "username.value",
            pass:  "username.pass"
        })
    });
let data = await response.json()

// fetch(`${apiURL}/login`, {
//   method: 'POST',
//   body: JSON.stringify({
//     username: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

alert("username register suceiss")
document.location.href = "./index.html"



    } catch (error) {
        console.log("register error", error)
    }



}
