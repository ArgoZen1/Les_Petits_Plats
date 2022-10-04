const searchInput = document.getElementById('inputSort');
let titleValue;
class SearchForm {
    constructor() {
        this.filter = searchInput.value.toLowerCase().removeAccents()
        this.allArticle = document.querySelectorAll('article');
        this.allTitle = document.querySelectorAll('h2');
    }

    search() {
        // this.allArticle.forEach(article => {
        for (let indexArticle of this.allArticle) {
            titleValue = indexArticle.textContent.removeAccents()
            if (this.filter.length > 2) {
                if (titleValue.toLowerCase().includes(this.filter)) {
                    indexArticle.style.display = "block"
                } else {
                    indexArticle.style.display = "none"
                }
            }
            if (this.filter.length <= 2) {
                indexArticle.style.display = "block"
            }
        }
    }
}

searchInput.addEventListener('keyup', () => {
    // let iterations = 500;
    // console.time('Function #2 boucle for of, 500 iterations');
    // for (let i = 0; i < iterations; i++) {
    const SearchF = new SearchForm()
    SearchF.search()
    // }
    // console.timeEnd('Function #2 boucle for of, 500 iterations')
});

