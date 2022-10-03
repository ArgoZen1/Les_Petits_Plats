// /*
// ** class pour créer la section des recettes
// */
class CreateSection {
    constructor(recipes) {
        this.recipes = recipes;
    }
    createRecipeCard() {
        const article = document.createElement('article');
        article.classList.add('container__article');
        article.setAttribute('data-id', this.recipes.id)
        const newDivImg = document.createElement('div');
        newDivImg.classList.add('container_img');
        article.appendChild(newDivImg);
        const newImg = document.createElement('img');
        Object.assign(newImg, {
            className: "img_recipe",
            src: "./asset/cuisine.webp",
            alt: "Image de la recette",
            ariaLabel: "Image de la recette"
        });
        newDivImg.appendChild(newImg);
        const newBodyDivAllText = document.createElement('div');
        newBodyDivAllText.classList.add('container_all_text');
        article.appendChild(newBodyDivAllText);
        const newBodyH2Time = document.createElement('div');
        newBodyH2Time.classList.add('container_h2_time');
        newBodyDivAllText.appendChild(newBodyH2Time);
        const newH2 = document.createElement('h2');
        newH2.textContent = this.recipes.name;
        newBodyH2Time.appendChild(newH2);
        const divPtime = document.createElement('div');
        divPtime.classList.add('container_time_icon');
        newBodyH2Time.appendChild(divPtime);
        const newPtime = document.createElement('p');
        divPtime.appendChild(newPtime);
        newBodyH2Time.appendChild(newPtime);
        divPtime.appendChild(newPtime);
        newPtime.textContent = this.recipes.time + " min";
        const newIconTime = document.createElement('img');
        Object.assign(newIconTime, {
            className: "icon_time",
            src: "./asset/clock.png",
            alt: "Icon horloge",
            ariaLabel: "Icon horloge"
        });
        divPtime.appendChild(newIconTime);
        const newDivIngrDescript = document.createElement('div');
        newDivIngrDescript.classList.add('container_description_ingredients');
        newBodyDivAllText.appendChild(newDivIngrDescript);
        const newPdivIngr = document.createElement('div');

        for (let recipeData of this.recipes.ingredients) {
            newPdivIngr.setAttribute('data-appliances', this.recipes.appliance)
            newPdivIngr.setAttribute('data-ustensils', this.recipes.ustensils)
            newPdivIngr.classList.add('p-div-ingredient');
            const newPingredient = document.createElement('p');
            newPdivIngr.appendChild(newPingredient);
            newDivIngrDescript.appendChild(newPdivIngr);
            newPingredient.textContent = recipeData.ingredient;
            if (recipeData.quantity !== undefined) {
                newPingredient.textContent += ": " + recipeData.quantity;
            }
            if (recipeData.unit !== undefined) {
                newPingredient.textContent += ": " + recipeData.unit;
            }
        }
        const newPdivDesc = document.createElement('div');
        newPdivDesc.classList.add('p-div-description');
        const newPdescription = document.createElement('p');
        newDivIngrDescript.appendChild(newPdivDesc);
        newPdivDesc.appendChild(newPdescription);
        newPdescription.textContent = this.recipes.description;
        return article;
    }
}
