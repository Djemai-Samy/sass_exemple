console.log("dom.js loaded!");
console.dir(document);

//Selectionner des éléments:
//Selectionner des élément par leurs balises.
let listeA = document.getElementsByTagName("a");
console.log("listeA : ", listeA)

//Selectionner des élément par classes:
let listClassLinks = document.getElementsByClassName('links');
console.log("listeClassLinks : ", listClassLinks)

//Selectionner un élement par identifiant:
let htmlLink = document.getElementById('html')
console.log("htmlLink", htmlLink)

//Afficher directement les balises p.
let getEByBalise = (balise) => document.getElementById(balise)
let listP = getEByBalise('jsP')
console.log(listP)

//Selectionner les éléments avec les selecteurs CSS:
let image = document.querySelectorAll('img')
console.log("image : ", image);

let cssLink = document.querySelector('#css')
console.log("link css : ", cssLink);

//Modifier les éléments:
let premierP = listP;
premierP.textContent = "Un paragraphe modifié depuis le <strong>Javascript</strong> !"
premierP.innerHTML = "Un paragraphe modifié depuis le <strong>Javascript</strong> !"
// premierP.outerHTML="<div>Un paragraphe modifié depuis le <strong>Javascript</strong> !</div>"

//Modifier le inline style:
premierP.style.backgroundColor = "rgba(200,200,200, 0.5)";

//Augmenter la taille de la police:
premierP.style.fontSize = '20px';
premierP.classList.add("blueText");


class Link{
    constructor(name, url, color){
        this.name = name;
        this.url = url;
        this.color=color;
    }
}

let listCours = [
    new Link("HTML", "https://developer.mozilla.org/fr/docs/Web/HTML", "#E65127"),
    new Link("CSS", "https://developer.mozilla.org/fr/docs/Web/CSS/Reference", "royalblue"),
    new Link("Javascript", "https://developer.mozilla.org/fr/docs/Web/JavaScript", "#E7A328"),
    new Link("SASS", "https://sass-lang.com/", "purple"),
]
let links = document.querySelector('.links')
for(let i = 0; i < listCours.length; i++){
    let cour = listCours[i];
    let newA = document.createElement("a");
    newA.textContent = `Documentation ${cour.name}`
    newA.style.color = cour.color;
    newA.href = cour.url
    newA.target = "_blank"
    links.append(newA);
}

document.querySelector('#click').addEventListener("click" , function(){
    let textInput = document.querySelector('#textInput');
    alert("Je suis cliqué :" + textInput.value)
})

//Ajouter un evenement a l'image pour afficher "image cliqué".
document.querySelector(".headerImage").addEventListener('click', function(){
    alert("Image cliquée")
})
