let eMails = ["esempio@esempio.com", "prova@prova.com", "lemonSoda@lemonSoda.com"]

let userEmail = prompt("Please type your Email here")

let eMailcounter = 0

for(let i = 0; i<eMails.length; i++){
    if(eMails.includes(userEmail) == false){
        eMailcounter++
    }
}

if(eMailcounter == eMails.length){
    alert(`the eMail "${userEmail}" does not exist in our database`)
} else {
    alert(`Welcome back ${userEmail}`)
}