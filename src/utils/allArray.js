// /*
// ** fonction pour récuperer les ustensiles dans un tableau
// */
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

// /*
// ** utilisation de la methode Object.assign pour pouvoir itérer sur le tableau
// */
const AllustensilsObj = Object.assign({ allUstensils })
let AllustensilsArray = AllustensilsObj.allUstensils

