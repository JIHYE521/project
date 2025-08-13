const form = document.querySelector(".multiply__form");
const userInput = document.querySelector(".multiply__input");
const displayQuiz = document.querySelector(".quiz");
const displayAnswer = document.querySelector(".answer");
const score = document.querySelector(".score");
const tries = document.querySelector(".tries");

const state = {
    a: null,
    b: null,
    score: 0,
    tries: 0,
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userAnswer = userInput.value;
    userInput.value = "";
    checkMultiply(userAnswer);
    state.tries++;
    tries.innerText = state.tries;
    makeMultiply();
});

userInput.addEventListener("input", (e) => {
    let value = e.target.value;
    value = e.target.value.replace(/[^0-9]/g, "");

    if (value.startsWith("0")) {
        value = value.replace(/^0+/, "");
    }

    e.target.value = value;
});

function makeMultiply() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    state.a = a;
    state.b = b;
    displayQuiz.innerText = `${a} x ${b}`;
    userInput.value = "";
    userInput.focus();

    console.log(state);
}

function checkMultiply(answer) {
    if (answer === "") return;
    const userNum = Number(answer);
    if (Number.isNaN(userNum)) return;

    const correctAnswer = state.a * state.b;
    console.log(correctAnswer);

    if (userNum === correctAnswer) {
        state.score++;
        score.innerText = state.score;
    }
}

makeMultiply();
