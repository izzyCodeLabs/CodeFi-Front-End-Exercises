const randomButton = document.querySelector(".btn-primary");

const randomize = () => {
    let color = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${color}`
}

randomButton.addEventListener("click", randomize);