let eMails = ["esempio@esempio.com", "prova@prova.com", "lemonSoda@lemonSoda.com"]
let userEmail = prompt("Please type your Email here")

let userAllowed = false

for(let i = 0; i<eMails.length; i++){
    if(eMails[i] == userEmail){
        alert(`Welcome back ${userEmail}`)
        userAllowed = true
    }
}

if(userAllowed == false){
    alert(`The Email "${userEmail}" does not exist in the database`)
}