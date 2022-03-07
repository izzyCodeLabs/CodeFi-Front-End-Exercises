const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");
const allLinks = [];

input.addEventListener("focus", focusInput);
overlay.addEventListener("click", endFocus);
form.addEventListener("submit", createLink);

function focusInput() {
    body.classList.add("focus-form");
}
function endFocus() {
    if (body.classList.contains("focus-form")) {
        body.classList.remove("focus-form");
    }
}
function createLink(e) {
    e.preventDefault();
    const url = input.value;

    const linkContainer = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.className = "link";
    newLink.innerText = url;
    newLink.href = url;
    newLink.target = "_blank"
    allLinks.push(url);
    linkContainer.appendChild(newLink);
    linkList.appendChild(linkContainer);
    form.reset();
}