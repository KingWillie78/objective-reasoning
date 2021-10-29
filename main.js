// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (user){
    return user.userRole === 'ADMIN'
}

function getEmail(user){
    return (user.firstName + '.' +user.lastName + "@gmail.com").toLowerCase()
}

function getPlaylistLength(playList){
    return playList.songs.length
}

function getHardestHomework(homework){
    if (homework.length === 0) {return ""}

    let hardHW = homework[0].name
    let minScore = homework[0].averageScore
    for (const grade of homework){
        if (grade.averageScore < minScore){  
            minScore =  grade.averageScore 
            hardHW =  grade.name   
        }
    }
    return hardHW
}

function createPhonebook(name, number){
    const contact = {
    }
        for (let i = 0;i < name.length; i++){
        contact[name[i]] = number[i]
        }
    console.log(contact)
    return contact
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