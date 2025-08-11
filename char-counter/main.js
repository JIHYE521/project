const textarea = document.querySelector("#textarea");
const displayLength = document.querySelector(".char-length");
const btns = document.querySelector(".btns");

let text = "";

textarea.addEventListener("input", (e) => {
    const length = e.target.value.length;
    text = e.target.value;

    displayLength.innerText = length;
});

btns.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".btn-delete")) {
        clearText();
    }

    if (target.closest(".btn-copy")) {
        copyText(text);
    }
});

function clearText() {
    textarea.value = "";
    text = "";
    displayLength.innerText = 0;
}

function copyText(text) {
    if (!text) {
        alert("복사할 내용이 없습니다.");
        return;
    }
    window.navigator.clipboard.writeText(text).then(() => {
        alert("복사완료");
    });
}
