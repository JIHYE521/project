const section = document.querySelector("section");
const displayNum = document.querySelector(".num");

let num = 0;

function displayNumber() {
    displayNum.textContent = num;
}

section.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    if (btn.classList.contains("btn-minus")) num--;
    if (btn.classList.contains("btn-add")) num++;
    if (btn.classList.contains("btn-reset")) num = 0;

    displayNumber();
});

displayNumber();
