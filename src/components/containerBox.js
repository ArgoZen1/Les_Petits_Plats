let getContainerBox = document.querySelector('.select__sorting')
let classUlIgrdts = document.querySelector('.ingredients-content') // selection des ul ingredientsappliances-content
let classUlappl = document.querySelector('.appliances-content')
let classUlUst = document.querySelector('.ustensils-content')
let arrayIngredients = []

// /*
// ** Class pour créer le container des li de la box ingredients
// */
class CreateLiBoxIng {
    constructor(recipes) {
        this.recipes = recipes;
    }
    createContainerIngLi() {

        for (let recipeData of this.recipes.ingredients) {
            if (!arrayIngredients.includes(recipeData.ingredient)) {
                arrayIngredients.push(recipeData.ingredient)
                let createLiIgrdts = document.createElement('li')
                createLiIgrdts.classList.add('ingredients-li');
                createLiIgrdts.textContent = recipeData.ingredient

                return createLiIgrdts
            }
        }
    }
}
// /*
// ** Class pour créer le container des li de la box Appareils
// */
class CreateLiBoxAppl {
    constructor(recipes) {
        this.recipes = recipes;
    }
    createContainerApplLi() {

        let createLiAppl = document.createElement('li')
        createLiAppl.classList.add('appliance-li');
        createLiAppl.textContent = this.recipes.appliance
        return createLiAppl

    }
}
// /*
// ** fonction pour créer le container des li de la box Ustensiles
// */
function createContainerUstLi() {
    for (let Ustensiles of AllustensilsArray) {
        let createLiUstLi = document.createElement('li')
        createLiUstLi.classList.add('ustensils-li');
        classUlUst.appendChild(createLiUstLi)
        createLiUstLi.textContent = Ustensiles
    }
}
createContainerUstLi()

// /*
// ** fonctions pour pouvoir ouvrir et fermer l'input au bouton et sur l'input 
// */
function OpenCloseInput() {

    let containerInput = document.getElementById('Ingredients-Selection')
    containerInput.addEventListener('click', (e) => {
        e.preventDefault()
        if (classUlIgrdts.style.display === "none") {
            classUlIgrdts.style.display = "flex";
        }
        else {
            console.log('dans le else');
            classUlIgrdts.style.display = "none";
        }
    })
}
OpenCloseInput()

function OpenCloseInput2() {

    let containerInput = document.getElementById('Appareils-Selection')
    containerInput.addEventListener('click', (e) => {
        e.preventDefault()
        if (classUlappl.style.display === "none") {
            classUlappl.style.display = "flex";
        }
        else {
            console.log('dans le else');
            classUlappl.style.display = "none";
        }
    })
}
OpenCloseInput2()

function OpenCloseInput3() {

    let containerInput = document.getElementById('Ustensils-Selection')
    containerInput.addEventListener('click', (e) => {
        e.preventDefault()
        if (classUlUst.style.display === "none") {
            classUlUst.style.display = "flex";
        }
        else {
            console.log('dans le else');
            classUlUst.style.display = "none";
        }
    })
}
OpenCloseInput3()