
// /*
// ** fonction pour trier l'affichage des li en fonction des lettres tapées dans l'input
// */
let filterIngrdts2;
let searchInputIgrdts2 = document.getElementById('inputSort');
function sortInputIgrdts2() {

    filterIngrdts2 = searchInputIgrdts2.value.toLowerCase().removeAccents();
    let liValue;
    let liList = document.querySelectorAll('.ingredients-li');
    for (let AllLi of liList) {
        liValue = AllLi.textContent.removeAccents();
        if (filterIngrdts2.length > 1) {
            if (liValue.toLowerCase().indexOf(filterIngrdts2) > -1) {
                AllLi.style.display = "block";
            }
            else {
                AllLi.style.display = "none";
            }
        }
        if (filterIngrdts2.length <= 1) {
            AllLi.style.display = "block";
        }
    }
}
searchInputIgrdts2.addEventListener('keyup', () => {
    sortInputIgrdts2();
});

let filterAplliances2;
let searchInputAplliances2 = document.getElementById('inputSort');
function sortInputAplliances2() {

    filterAplliances2 = searchInputAplliances2.value.toLowerCase().removeAccents();
    let liValue;
    let liList = document.querySelectorAll('.appliance-li');
    for (let AllLi of liList) {
        liValue = AllLi.textContent.removeAccents();
        if (filterAplliances2.length > 1) {
            if (liValue.toLowerCase().indexOf(filterAplliances2) > -1) {
                AllLi.style.display = "block";
            }
            else {
                AllLi.style.display = "none";
            }
        }
        if (filterAplliances2.length <= 1) {
            AllLi.style.display = "block";
        }
    }
}
searchInputAplliances2.addEventListener('keyup', () => {
    sortInputAplliances2();
});

let filterUstensils2;
let searchInputUstensils2 = document.getElementById('inputSort');
function sortInputUstensils2() {

    filterUstensils2 = searchInputUstensils2.value.toLowerCase().removeAccents();
    let liValue;
    let liList = document.querySelectorAll('.ustensils-li');
    for (let AllLi of liList) {
        liValue = AllLi.textContent.removeAccents();
        if (filterUstensils2.length > 1) {
            if (liValue.toLowerCase().indexOf(filterUstensils2) > -1) {
                AllLi.style.display = "block";
            }
            else {
                AllLi.style.display = "none";
            }
        }
        if (filterUstensils2.length <= 1) {
            AllLi.style.display = "block";
        }
    }
}
searchInputUstensils2.addEventListener('keyup', () => {
    sortInputUstensils2();
});
