let youscore = 0;
let compscore = 0;

let choeses = document.querySelectorAll(".couse");

let winnerbtn = document.querySelector("#msg-btn")

let userscorepera = document.querySelector(".user-score");
let compscorepera = document.querySelector(".comp-score");



let compgnret = () => {
    let compgame = ["wrok", "peper", "sizer"]
    let gnretcompchoes = Math.floor(Math.random() * 3)
    return compgame[gnretcompchoes];
}


choeses.forEach((chois) => {
    chois.addEventListener("click", () => {
        let yorchois = chois.getAttribute("id")
        let compchois = compgnret();
        console.log(`our choeses ${yorchois}`)
        console.log(`comp choeses ${compchois}`)

        if (yorchois == compchois) {
            gamedrow();
        } else {
            let winner = true;
            if (yorchois == "wrok") {
                if (compchois == "peper") {
                    winner = false;
                } else {
                    winner = true;
                }
            } else if (yorchois == "peper") {
                if (compchois == "sizer") {
                    winner = false;
                }
                else {
                    winner = true
                }
            } else if (yorchois == "sizer") {
                if (compchois == "work") {
                    winner = false;
                } else {
                    winner = true;
                }
            }
            wiinershow(winner);
        }

    })
})


//gaem drow function

let gamedrow = () => {
    winnerbtn.innerText = "Game was Draw. Play again";
    winnerbtn.style.backgroundColor = "black";
    winnerbtn.style.color = "greenyellow";
    console.log("game was drow");


}


//wiinershow function

let wiinershow = (winner) => {
    if (winner) {
        youscore++;
        winnerbtn.innerText = "You win!";
        winnerbtn.style.backgroundColor = "green";
        winnerbtn.style.color = "black";
        // console.log("you are winner");
        userscorepera.innerText = `${youscore}`;


    } else {
        compscore++;
        winnerbtn.innerText = "You lose.";
        winnerbtn.style.backgroundColor = "red";
        winnerbtn.style.color = "black";
        // console.log("comp is winner");
        compscorepera.innerText = `${compscore}`;

    }

}