// vars
let menuList = document.querySelector(".menu");
let menu = [
    {name: "rice", price: 1.50},
    {name: "gyoza", price: 1.50},
    {name: "teriyaki", price: 1.50},
    {name: "sushi", price: 1.50},
    {name: "tempura", price: 1.50},
    {name: "miso", price: 1.50},
    {name: "ramen", price: 1.50},
];

// functions
function addFood(food) {
    const foodData = document.createElement("li");
    foodData.innerText = food.name + ", Price: $" + food.price;

}

for (let i = 0; i < menu.length; i++) {
    addFood(menu[i]);
}