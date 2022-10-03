// /*
// ** fonction pour ajouter un tag el le trier en fonction de chaque ingredients dans un article.
// */
function createTag() {
    let allArticle = document.querySelectorAll('article')
    let allPingrdts = document.querySelectorAll('.p-div-ingredient')
    let getContainerTag = document.querySelector('.research-tag')
    let liList = document.querySelectorAll('li')
    let arrayTag = []

    liList.forEach(oneLi => {
        oneLi.addEventListener('click', (e) => {

            let tagItem = document.createElement("div")
            tagItem.classList.add('tag-item')
            getContainerTag.appendChild(tagItem)

            let spanTag = document.createElement('span')
            spanTag.classList.add('text-tag')
            tagItem.append(spanTag)

            let img = document.createElement("img")
            Object.assign(img, {
                className: "close-btn",
                src: "./asset/close.svg",
                alt: "croix de l'image"
            })
            tagItem.appendChild(img)

            let spanContent = spanTag.innerText = oneLi.innerText.toLowerCase().removeAccents()

            arrayTag.push(spanContent)
            console.log(arrayTag)
            test(arrayTag, allArticle, allPingrdts, img, tagItem, spanContent)


        })
    })
}
createTag()
function test(arrayTag, allArticle, allPingrdts, img, tagItem, spanContent) {
    console.log(arrayTag)
    for (let i = 0; i < allArticle.length; i++) {
        let pIgrdtsValue = allPingrdts[i].innerText.removeAccents()
        let dataAppli = allPingrdts[i].dataset.appliances.removeAccents()
        let dataUsten = allPingrdts[i].dataset.ustensils.removeAccents()

        pIgrdtsValue = pIgrdtsValue.concat(dataAppli)
        pIgrdtsValue = pIgrdtsValue.concat(dataUsten)
        console.log(pIgrdtsValue)
        if (arrayTag.every((currentValue) => pIgrdtsValue.toLowerCase().includes(currentValue))) {

            allArticle[i].style.display = "grid";
        }
        else {
            allArticle[i].style.display = "none";
        }

        img.addEventListener('click', (e) => {
            tagItem.remove()
            for (let j = 0; j < arrayTag.length; j++) {
                if (arrayTag[j] == spanContent) {
                    arrayTag.splice(j, 1)
                    test(arrayTag, allArticle, allPingrdts, img, tagItem, spanContent)
                    break
                }

            }
        })
    }
}
