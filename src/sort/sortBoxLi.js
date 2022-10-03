// /*
// ** fonction pour trier l'affichage des li en fonction des lettres tapées dans l'input
// */
let filterIngrdts;
let searchInputIgrdts = document.querySelector('.ingredients-input');
function sortInputIgrdts() {

    filterIngrdts = searchInputIgrdts.value.toLowerCase().removeAccents();
    let liValue;
    let liList = document.querySelectorAll('.ingredients-li');
    for (let AllLi of liList) {
        liValue = AllLi.textContent.removeAccents();
        if (filterIngrdts.length > 1) {
            if (liValue.toLowerCase().indexOf(filterIngrdts) > -1) {
                AllLi.style.display = "block";
            }
            else {
                AllLi.style.display = "none";
            }
        }
        if (filterIngrdts.length <= 1) {
            AllLi.style.display = "block";
        }
    }
}
searchInputIgrdts.addEventListener('keyup', () => {
    sortInputIgrdts();
});

let filterAplliances;
let searchInputAplliances = document.querySelector('.appliances-input');
function sortInputAplliances() {

    filterAplliances = searchInputAplliances.value.toLowerCase().removeAccents();
    let liValue;
    let liList = document.querySelectorAll('.appliance-li');
    for (let AllLi of liList) {
        liValue = AllLi.textContent.removeAccents();
        if (filterAplliances.length > 1) {
            if (liValue.toLowerCase().indexOf(filterAplliances) > -1) {
                AllLi.style.display = "block";
            }
            else {
                AllLi.style.display = "none";
            }
        }
        if (filterAplliances.length <= 1) {
            AllLi.style.display = "block";
        }
    }
}
searchInputAplliances.addEventListener('keyup', () => {
    sortInputAplliances();
});

let filterUstensils;
let searchInputUstensils = document.querySelector('.ustensils-input');
function sortInputUstensils() {

    filterUstensils = searchInputUstensils.value.toLowerCase().removeAccents();
    let liValue;
    let liList = document.querySelectorAll('.ustensils-li');
    for (let AllLi of liList) {
        liValue = AllLi.textContent.removeAccents();
        if (filterUstensils.length > 1) {
            if (liValue.toLowerCase().indexOf(filterUstensils) > -1) {
                AllLi.style.display = "block";
            }
            else {
                AllLi.style.display = "none";
            }
        }
        if (filterUstensils.length <= 1) {
            AllLi.style.display = "block";
        }
    }
}
searchInputUstensils.addEventListener('keyup', () => {
    sortInputUstensils();
});

