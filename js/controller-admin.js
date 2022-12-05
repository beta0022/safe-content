'use strict'

function onAdmin() {
    renderUsers()
}

function renderUsers() {
    const users = getUsers()

    const strHTMLs = users.map(user => {
        return `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${new Date(user.lastLoginTime).getDate()}</td>
        <td>${user.isAdmin}</td>
        </tr>`
    })
    
    document.querySelector('tbody').innerHTML = strHTMLs.join('')
}


function onBack() {
    window.location.href = 'index.html'
}


function onSort(sortKey) {
    sort(sortKey)

    renderUsers()
}