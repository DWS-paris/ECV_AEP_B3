/* 
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', () => {

    // Déclarer un tableau wailers contenant 'Robert', 'Peter', 'Bunny', 'Lee'
    let wailers = [ 'Robert', 'Peter', 'Bunny', 'Lee', 'Julien' ]; // => :Array<String>

    // Déclarer des variables qui captent la balise H1 et UL du DOM
    let myTitle = document.querySelector('h1');
    let myList = document.querySelector('ul');

    // Modifier la contenu du titre pour y ajouter Wailers
    myTitle.innerHTML += '<i>Wailers<i>';

    // Afficher le contenu du tableau
    console.log(wailers);

    // Afficher la taille du tableau
    console.log(wailers.length);

    // Afficher la 2ème valeur du tableau
    console.log( wailers[1] );

    /* 
    Boucle FOR classique
    - Saluer les Wailers
    */
        for( let i = 0; i < wailers.length; i++ ){
            console.log( 'La valuer de i est : ' + i )
            console.log( 'Hello ' + wailers[i] );
        };
    //

    /* 
    La boucle FOR...OF
    - Afficher la liste des Wailers dans le DOM
    */
        for( let item of wailers ){
            // Pour chaque Wailer ajouter une balise LI dans la liste
            myList.innerHTML += '<li>' + item + '</li>';
        };
    //

}); // Fin de la fonction de chargement du DOM