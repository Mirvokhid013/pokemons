"use strict";

let elList = document.querySelector(".pokemons");
elList.classList.add("flex");


pokemons.forEach((item) => {
    let elItem = document.createElement("li");
    //* Add Img
    let elImg = document.createElement("img");
    elImg.src = item.img;
    elImg.classList.add("img");
    //* Add Name
    let elName = document.createElement("h3");
    elName.classList.add("mauto");
    elName.textContent = `Name : ${item.name}`;
    //* Add Weight and Height
    let elWrapperBmi = document.createElement("div");
    let elWeight = document.createElement("p");
    elWeight.textContent = `Weight : ${item.weight}`;
    let elHeight = document.createElement("p");
    elHeight.textContent = `Height : ${item.height}`;
    elWrapperBmi.append(elWeight, elHeight);
    elWrapperBmi.classList.add("flex-wrapper");
    //* Add Weaknesses
    let listElement = document.createElement("ul");
    let titleElement = document.createElement("strong");
    titleElement.classList.add("mauto");
    titleElement.classList.add("color-blue");
    titleElement.textContent = 'Weaknesses : '
    item.weaknesses.forEach((element) => {
        let itemElement = document.createElement("li");
        itemElement.textContent = element;
        listElement.append(itemElement);
    })

    // listElement.classList.add("style-list");
    
    elItem.append(elImg, elName, elWrapperBmi,titleElement, listElement);
    elItem.classList.add("item");
    elList.append(elItem);
    console.log(item);
})
