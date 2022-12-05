'use strict'

const STORAGE_KEY = 'usersDB'

var gUsers

createUsers()


function checkUser(userName, password) {
    const user = gUsers.find(user => user.username === userName && user.password === password)

    if(user) {
        updateLoginTime(user)
        saveToStorage('currUser', user)
    } 

    return user
}


function createUsers() {
    gUsers = loadFromStorage(STORAGE_KEY)
    
    gUsers = [
            _createUser('u100' ,'John', 'snow', true),
            _createUser('u101' ,'Mika', 'food', false),
            _createUser('u102', 'Osso', '1234', false),
        ]

    saveToStorage(STORAGE_KEY, gUsers)
}


function _createUser(id, username, password, isAdmin) {
    return {
        id,
        username,
        password,
        lastLoginTime: _timeStamp,
        isAdmin,
    }
}


function getUsername(){
    return loadFromStorage('currUser').username
}


function isAdmin(){
    return loadFromStorage('currUser').isAdmin
}


function updateLoginTime(user){
    user.lastLoginTime = _timeStamp()
}


function getUsers(){
    return gUsers
}


function sort(sortKey){
    if(sortKey === 'username') gUsers.sort((user1, user2) => user1.username.localeCompare(user2.username))

    else gUsers.sort((user1, user2) => user1.lastLoginTime - user2.lastLoginTime)

}


function _timeStamp(){
    var timeStamp = new Date()

    var timeStampFormat = timeStamp.getHours()+
    ":"+timeStamp.getMinutes()+
    ":"+timeStamp.getSeconds()+
    " "+timeStamp.getDate()+
    "."+(timeStamp.getMonth()+1)+
    "."+timeStamp.getFullYear()

    return timeStampFormat
}