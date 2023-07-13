

const handoptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
}

let SCORE = 0;

// function pickUserHand(){
// }

// or new way to write in es6

const pickUserHand = (hand) => {
    console.log(hand);
    //hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // show the next page with hand you picked

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user pick
    document.getElementById("userPickImage").src = handoptions[hand];


    // if (hand =="paper") {
    //     document.getElementById("userPickImage").src ="/assets/Paper.png"
    // }

    let cpHand = pickComputerHand();
    referee(hand,cpHand)
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    // console.log(hands[1])  --> this use to pick paper
    let cpHand = hands[Math.floor(Math.random() * 3)]

    console.log("CPHAND", cpHand);
    // get computer pick
    document.getElementById("computerPickImage").src = handoptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {

    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE !!!")
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN !!!")
        setScore(SCORE + 1)
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }
};

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText=score;
}

const restartGame =() =>{
    //show current page
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    
    // hide the next page with hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}