class App {
    constructor() {
        this.containerCard = document.querySelector('.container__card');
        this.getContainerBox = document.querySelector('.ingredients-content')
        this.classUlappl = document.querySelector('.appliances-content')
        this.classUlUst = document.querySelector('.ustensils-content')
    }
    async main() {
        let arrayAppliances = []

        recipes.forEach(recipe => {
            // creation de la section des recettes
            const TemplateCard = new CreateSection(recipe);
            this.containerCard.appendChild(TemplateCard.createRecipeCard());
            // creation de ce que va contenir la box ingredients

            const TemplateLiIng = new CreateLiBoxIng(recipe)
            this.getContainerBox.appendChild(TemplateLiIng.createContainerIngLi());

            // creation de ce que va contenir la box appareils
            if (!arrayAppliances.includes(recipe.appliance)) {
                arrayAppliances.push(recipe.appliance)
                const TemplateLiAppl = new CreateLiBoxAppl(recipe)
                this.classUlappl.appendChild(TemplateLiAppl.createContainerApplLi());
            }
            // creation de ce que va contenir la box Ustensiles


        });
    }
}
const app = new App();
app.main();