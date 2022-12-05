'use strict'

// function onInit() {
//     createUsers()
// }

function onLogin(event) {
    event.preventDefault()

    const userName = document.querySelector('input[name="username"]').value

    const password = document.querySelector('input[name="password"]').value

    const logIn = checkUser(userName, password)

    if (logIn) _logIn()
    else document.querySelector('.incorrect').classList.remove('hide') 
}


function _logIn(){
    console.log('Log In')

    document.querySelector('.login').classList.add('hide')

    const elSecret = document.querySelector('.secret-content')
    const strHTML = `<h1>${(getUsername())}</h1>
                    <video width="220" height="427" controls autoplay>
                    <source src="img/secret.mp4" type="video/mp4">
                    </video> `
    elSecret.innerHTML = strHTML

    const logOutBtn = `<button onclick="onLogOut(event)">Log Out</button>`
    elSecret.innerHTML += logOutBtn

    if (isAdmin()) {
        const adminBtn = `<button onclick="onAdmin(event)">Admin</button>`
        elSecret.innerHTML += adminBtn 
    }
}


function onLogOut(event){
    console.log('Log Out')

    clearLocalStorage()

    document.querySelector('.secret-content').classList.add('hide')

    document.querySelector('.login').classList.remove('hide')
}


function onAdmin(){
    window.location.href = 'admin.html'
}