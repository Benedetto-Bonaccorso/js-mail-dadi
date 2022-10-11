let playerNumber = Math.round((Math.random()*5) + 1)
let botNumber = Math.round((Math.random()*5) + 1)



function calculations(){
    if(playerNumber > botNumber){
        alert("You Won")
    } else if (playerNumber < botNumber){
        alert("You Lost")
    } else {
        playerNumber = Math.round((Math.random()*5) + 1)
        botNumber = Math.round((Math.random()*5) + 1)
        calculations()
        console.log("draw")
    }
}

calculations();