let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

/*
    Exo 1
 */

let paraPomme = document.getElementById('index-pomme');
paraPomme.innerHTML = pomme.lastIndexOf('p').toString();

/*
    Exo 2
*/

let lastIndex = document.getElementById('last-index-m');
lastIndex.innerHTML = pomme.lastIndexOf('m').toString();

/*
    Exo 3
 */

if (pomme.startsWith('Elle')) {
    alert('Elle est belle ma pomme ! Commence par elle');
}

/*
    Exo 4
 */

if (pomme.endsWith('!')) {
    alert('Elle est belle ma pomme ! Se termine par un point d\'exclamation');
}

/*
    Exo 5
 */

let idPomme = document.getElementById('pomme');
idPomme.innerHTML = pomme.substring(18, 23);

/*
    Exo 6
 */

let oneLine = document.getElementById('one-line');

for (let i = 0; i < pomme.length; i++) {
    console.log(pomme[i])
    oneLine.innerHTML += pomme[i] + "<br/>";
}