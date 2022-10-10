const searchInput = document.getElementById('inputSort');
let titleValue;

class SearchForm {
    constructor() {
        this.filter = searchInput.value.toLowerCase().removeAccents()
        this.allArticle = document.querySelectorAll('article');
        this.allTitle = document.querySelectorAll('h2');
    }

    search() {
        this.allArticle.forEach(article => {
            titleValue = article.textContent.removeAccents()
            if (this.filter.length > 2) {
                if (titleValue.toLowerCase().includes(this.filter)) {
                    article.style.display = "block"
                } else {
                    article.style.display = "none"
                }
            }
            if (this.filter.length <= 2) {
                article.style.display = "block"
            }
        })
    }

}
searchInput.addEventListener('keyup', () => {

    // let iterations = 500;
    // console.time('Function #2 boucle foreach, 500 iterations');
    // for (let i = 0; i < iterations; i++) {

    const SearchF = new SearchForm()
    SearchF.search()
    // }
    // console.timeEnd('Function #2 boucle foreach, 500 iterations')
});

