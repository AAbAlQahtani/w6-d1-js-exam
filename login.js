const apiURL = "https://68219a21259dad2655afc28a.mockapi.io"
let username = document.getElementById("username")
let pass = document.getElementById("pass")
let email = document.getElementById("email")
let submitBtn = document.getElementById("submitBtn")


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    loginUser();
})

async function loginUser() {

    try {
        let checkUser = await fetch(`${apiURL}/login`)
        let users = await checkUser.json()
        let checker = users.some((u) => {
            return username.value == u.username.value && pass.value == u.pass.value;
        })
        if (!checker) {
            alert("username or passwors is not correct")
            return;
        }
        let response = await fetch(`${apiURL}/login`)
        let data = await response.json()
        localStorage.setItem()
        alert("username register suceiss")
        document.location.href = "./index.html"

    } catch (error) {
        console.log("register error", error)
    }
}
