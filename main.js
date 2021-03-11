// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (user){
    return user.userRole === 'ADMIN'
}

function getEmail(user){
    return (user.firstName + '.' +user.lastName + "@codeimmersives.com").toLowerCase()
}

function getPlaylistLength(playList){
    return playList.songs.length

}

function getHardestHomework(arrObj){
    if (arrObj.length === 0) {return ""}

    let hardestHW = arrObj[0].name
    let minScore = arrObj[0].averageScore


    for (const eachObj of arrObj){
        if (eachObj.averageScore < minScore){  
            minScore =  eachObj.averageScore 
            hardestHW =  eachObj.name   
        }
    }
    return hardestHW
}

function createPhonebook(name, number){
    const phoneBook = {
    }
        for (let i = 0;i < name.length; i++){
        phoneBook[name[i]] = number[i]
        }
    console.log(phoneBook)
    return phoneBook
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};