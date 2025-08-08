const body = document.body;
const btnChange = document.querySelector(".btn-change");
const copyBtns = document.querySelector(".copyBtns");
const btnCopyHex = document.querySelector(".btn-copy-hex");
const btnCopyRgb = document.querySelector(".btn-copy-rgb");

let currentRGB = "";
let currentHex = "";

btnChange.addEventListener("click", () => {
    const { r, g, b } = makeRGBColor();
    currentRGB = `RGB(${r},${g},${b})`;
    currentHex = rgbToHex(r, g, b);

    body.style.backgroundColor = currentRGB;
});

copyBtns.addEventListener("click", (e) => {
    const copyBtn = e.target.closest("button");
    if (!copyBtn || !copyBtns.contains(copyBtn)) return;

    if (copyBtn.classList.contains("btn-copy-hex")) {
        copyCode(currentHex);
    } else if (copyBtn.classList.contains("btn-copy-rgb")) {
        copyCode(currentRGB);
    }
});

copyBtns.addEventListener("mouseover", (e) => {
    const copyBtn = e.target.closest("button");
    if (!copyBtn || !copyBtns.contains(copyBtn)) return;

    const icon = copyBtn.querySelector(".fa-copy");
    if (icon) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    }
});

copyBtns.addEventListener("mouseout", (e) => {
    const copyBtn = e.target.closest("button");
    if (!copyBtn || !copyBtns.contains(copyBtn)) return;

    const icon = copyBtn.querySelector(".fa-copy");
    if (icon) {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    }
});

function copyCode(code) {
    if (!code) {
        alert("색상 변경을 먼저 해주세요!");
        return;
    }
    window.navigator.clipboard.writeText(code).then(() => {
        alert("복사완료");
    });
}

function makeRGBColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
