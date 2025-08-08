const btnMinus = document.querySelector(".btn-minus");
const btnAdd = document.querySelector(".btn-add");
const btnReset = document.querySelector(".btn-reset");
const displayNum = document.querySelector(".num");

let num = 0;

btnMinus.addEventListener("click", () => {
    num--;
    displayNum.innerText = num;
});

btnAdd.addEventListener("click", () => {
    num++;
    displayNum.innerText = num;
});

btnReset.addEventListener("click", () => {
    num = 0;
    displayNum.innerText = num;
});
