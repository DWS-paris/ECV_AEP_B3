/* 
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', () => {

    // Décclaration d'une fonction twice
    let twice = ( numberParam ) => {
        console.log( numberParam * 2 );
    };

    twice( 2 );
    twice( 6453 );
    twice( 87 );

}); // Fin de la fonction de chargement du DOM