const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");
const allLinks = JSON.parse(localStorage.getItem("link_list")) || [];
const BASE_URL = "https://opengraph.io/api/1.1/site";
const API_KEY = "bab0bba2-cad3-4578-af13-4bcd33a8d592";

input.addEventListener("focus", focusInput);
overlay.addEventListener("click", endFocus);
form.addEventListener("submit", createLink);
linkList.addEventListener("click", removeLink);

function focusInput() {
    body.classList.add("focus-form");
}
function endFocus() {
    if (body.classList.contains("focus-form")) {
        body.classList.remove("focus-form");
    }
}
async function createLink(e) {
    e.preventDefault();
    if (!input.value) return;
    const link = await fetchURLMetaData(input.value);
    allLinks.push(link);
    populateLinkList(allLinks);
    saveLinkList(allLinks);
    form.reset();
    /*
    const url = input.value;
    const linkContainer = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.className = "link";
    newLink.innerText = url;
    newLink.href = url;
    newLink.target = "_blank"
    linkContainer.appendChild(newLink);
    linkList.appendChild(linkContainer);
    form.reset();
    */
}
function removeLink(e) {
    if (!e.target.matches(".close-btn")) return;
    const idx = e.target.parentNode.dataset.index;
    console.log("idx:", idx);

    allLinks.splice(idx, 1);
    populateLinkList(allLinks);
    saveLinkList(allLinks);
}
function populateLinkList(links = []) {
    linkList.innerHTML = links.map((link, idx) => `<li data-index=${idx} > <a class="link" href=${link.url} target="_blank">${link.title}</a> <button class="close-btn">&times;</button></li>`).join("");
}
function saveLinkList(links = []) {
    localStorage.setItem("link_list", JSON.stringify(links));
}
async function fetchURLMetaData(url) {
    const res = await fetch(`${BASE_URL}/${encodeURIComponent(url)}?app_id=${API_KEY}`);
    const data = await res.json();
    if (data.code < 0 || data.code >= 300) alert("Error with that URL");
    return {title: data.hybridGraph.title, image: data.hybridGraph.image, url};
}

populateLinkList(allLinks);