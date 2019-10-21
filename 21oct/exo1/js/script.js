/* 
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', () => {

    /* 
    Déclaration de variables
    */
        let first = 'Hello';
        const birthDate = 1979;

        console.log(first, birthDate);
    //

    /* 
    Types de variables
    */
        let myString = 'Julien Noyer'; // => :String
        let myInteger = 1234567890; // => :Integer
        let myFloat = 534.876; // => :Float
        let myBoolean = true; // => :Boolean
        let myArray =  [ 'Du texte', 876876, false, 9786.76, myString ]; // => :Array

        console.log(myString, myInteger, myFloat, myBoolean);
        console.log(myArray);

        let myTag = document.querySelector('h1');
        myTag.textContent = myString;
        console.log(myTag);
    //


}); // Fin de la fonction de chargement du DOM