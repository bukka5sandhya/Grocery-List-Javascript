let groceryList = ["Apples","Boost Drink","Butterscotch Ice Cream","Tomato Ketchup","Dairy Milk Chocolates","Pasta"];

let groceryListContainerEle = document.getElementById("groceryListContainer");
groceryListContainerEle.classList.add("grocery-bg-container");

let groceryHeadingEle = document.createElement("h1");
groceryHeadingEle.classList.add("main-heading");
groceryHeadingEle.textContent =  "Grocery List";
groceryListContainerEle.appendChild(groceryHeadingEle);

let cardEle = document.createElement("ul");
cardEle.classList.add("inner-card");
groceryListContainerEle.appendChild(cardEle);

for(let eachItem of groceryList){
    let listItemsEle = document.createElement("li");
    listItemsEle.classList.add("items");
    listItemsEle.textContent = eachItem;
    cardEle.appendChild(listItemsEle);
}