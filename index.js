

var noir = document.getElementById("noir")

function ia() {
    var choiceia = "";
    var random = Math.floor(Math.random() * 3);
    if (random === 0){
        noir.setAttribute("src" , "img/1-pierre.jpeg")
        choiceia = "pierre"
    } else if (random === 1){
        noir.setAttribute("src" , "img/2-feuille.jpeg")
        choiceia = "feuille"
    } else {
        noir.setAttribute("src" , "img/3-ciseaux.jpeg")
        choiceia = "ciseaux"
    }
    return choiceia
}

var blanc = document.getElementById("blanc")
var newParagraph = document.createElement("p");
function game(choix){
    console.log("mon choix  :",choix)
    // recuperer le choix et affichage de l'image du choix
    if (choix === "pierre"){
        blanc.setAttribute("src" , "img/1-pierre.jpeg")
    } else if (choix === "feuille") {
        blanc.setAttribute("src" , "img/2-feuille.jpeg")
    } else if ( choix === "ciseaux") {
        blanc.setAttribute("src" , "img/3-ciseaux.jpeg")
    }
    // executer la fonction ia pour quelle fasse un choix
    var resultia = ia()
    console.log("result ia :" , resultia)
    // faire la comparaison pour savoir qui gagne
    if (choix === "pierre" && resultia === "feuille"){
        console.log("IA Gagne")
        var text = document.createTextNode("IA Gagne");
    } else if (choix === "pierre" && resultia === "pierre"){
        console.log("EGALITÉ")
        var text = document.createTextNode("egalite");
    } else if (choix === "pierre" && resultia === "ciseaux"){
        console.log("Je gagne")
        var text = document.createTextNode("je Gagne");
    } else if (choix === "feuille" && resultia === "pierre"){
        console.log("Je gagne")
        var text = document.createTextNode("je Gagne");
    } else if (choix === "feuille" && resultia === "ciseaux"){
        console.log("IA Gagne")
        var text = document.createTextNode("IA Gagne");
    } else if (choix === "feuille" && resultia === "feuille"){
        console.log("EGALITÉ")
        var text = document.createTextNode("egalite");
    } else if (choix === "ciseaux" && resultia === "ciseaux"){
        console.log("EHALITÉ")
        var text = document.createTextNode("egalite");
    } else if (choix === "ciseaux" && resultia === "pierre"){
        console.log("IA Gagne")
        var text = document.createTextNode("IA Gagne");
    } else if (choix === "ciseaux" && resultia === "feuille"){
        console.log("Je gagne")
        var text = document.createTextNode("je Gagne");
    }
    newParagraph.innerHTML = "";
    newParagraph.appendChild(text);
    var element = document.getElementById("paragraphContainer");
    element.appendChild(newParagraph);
}


// function rock() {
//     blanc.setAttribute("src" , "img/1-pierre.jpeg")
//     ia()
// }

// function feuille() {
//     blanc.setAttribute("src" , "img/2-feuille.jpeg")
//     ia()
// }

// function ciseaux() {
//     blanc.setAttribute("src" , "img/3-ciseaux.jpeg")
//     ia()
// }
