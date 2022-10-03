let allIngredients = [];
function getIngredients() {
    recipes.forEach(el => {
        el.ingredients.forEach(allIng => {
            let dataAllIng = allIng.ingredient.toLowerCase()
            if (!allIngredients.includes(dataAllIng))
                allIngredients.push(dataAllIng)
        })
    })
}
getIngredients()


let allAppliances = [];
function getAppliances() {
    recipes.forEach(el => {

        let dataAllApp = el.appliance.toLowerCase()
        if (!allAppliances.includes(dataAllApp)) {
            allAppliances.push(dataAllApp)
        }
    })

}
getAppliances()


let allUstensils = [];
function getUstensils() {
    recipes.forEach(allUst => {
        allUst.ustensils.forEach(ust => {
            let dataAllUst = ust.toLowerCase()
            if (!allUstensils.includes(dataAllUst)) {
                allUstensils.push(dataAllUst)
            }
        })
    })
}
getUstensils()
const AllustensilsObj = Object.assign({ allUstensils })
let AllustensilsArray = AllustensilsObj.allUstensils

