// PARTIE 1 
// 1 
let exo1 = document.querySelector('h1')
exo1.innerText = "Les attributs class et id"

// 2
let exo2 = document.querySelector('h2')
exo2.innerText = "Exercice 2 partie A"

// 3
let exo3 = document.querySelectorAll('h2')[1]
exo3.innerText = "Exercice 2 partie B"

// 4
let exo4 = document.querySelector('p')
exo4.innerHTML = " L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> "

// 5 
let exo5 = document.querySelectorAll('p')[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"



// PARTIE 2.1
// 6
exo1.setAttribute("id","bigTitle")

// 7
let myDiv = document.querySelector('div')
myDiv.classList.add("container")
// OU 
// myDiv.setAttribute("class", "container")

// 8 
let exo8 = document.querySelectorAll('h2')
// pas obligé de transformer en tableau car queryselector transforme en NodeList

exo8.forEach(element => {
    element.setAttribute('class', 'title')
    // OU 
    // element.classList.add('title')
});

// 9
let allP = Array.from(document.querySelectorAll('p'))
// Ici on a transformé en une ligne le allP en tableau directement

allP.forEach(el => {
    el.classList.add('text')
});

// PARTIE 2.2
// 10
let sec = document.querySelectorAll('section')

sec[0].setAttribute('class','margin-bottom border-black padding')
// 11
sec[1].setAttribute('class','margin-bottom border-black padding')

// 12
let exo12 = sec[1].querySelector('div')
exo12.style.height = "20px"
exo12.style.width= "20px"
exo12.style.backgroundColor = "blue"
exo12.style.borderBottom = "1px solid red"
// OU
// div12.style.cssText="width:20px; height:20px; background-color:blue; border:25px dashed grey;";