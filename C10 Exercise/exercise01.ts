// vars
interface Food {
    name:string;
    price:number;
}
const menuList = document.querySelector(".menu");
let menu:Food[] = [
    {name: "rice", price: 1.00},
    {name: "gyoza", price: 3.50},
    {name: "teriyaki", price: 6.00},
    {name: "sushi", price: 4.00},
    {name: "tempura", price: 3.50},
    {name: "miso", price: 1.75},
    {name: "ramen", price: 5.00},
];

// functions
function addFood(food: Food) {
    const foodData = document.createElement("li");
    foodData.innerText = food.name + ", Price: $" + food.price.toFixed(2);
    menuList.appendChild(foodData);
    console.log(food);
}

for (let i = 0; i < menu.length; i++) {
    addFood(menu[i]);
}