/* 
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', () => {

    /* 
    - Demander à l'utilisateur de choisir une note
    - Stocker dans un tableau les notes ajoutées par l'utilisateur
    - Calculer la moyenne des notes
        - faire une boucle pour additionner toutes les notes
        - diviser le total des notes par le nombre de notes
    */

    /* 
    Déclarations
    */
        // Variables du DOM
        let addNote = document.querySelector('#addNote');
        let displayAverage = document.querySelector('.displayAverage');
        let noteList = document.querySelector('#noteList');
        let result = document.querySelector('p');

        // Variables du script
        let notes = [];
        let total = 0;
    //

    /* 
    Lancer l'IHM
    */
        // Capter le clic sur le bouton addNote pour ajouter une note
        addNote.addEventListener( 'click', () => {
            // Demander à l'utilisateur d'ajouter une note sur 20
            let newNote = prompt('Ajouter une note sur 20');
            console.log( +newNote );
            console.log( typeof +newNote );

            // Convertir un texte en entier (ex. : '12' devient 12)
            let convertedNote = +newNote;

            // Verifierr la valeur
            if( isNaN(convertedNote) ){ // La valeur n'est pas un nombre (Note A Number)
                alert('Ajouter un entier !!');
            }
            else if( convertedNote > 20 ){ // La valeur est au-dessus de 20
                alert('Ajouter une note de 0 à 20');
            }
            else{
                // La valeur est bonne, ajouter la dans un tableau
                notes.push( convertedNote );
                console.log( notes );
            }
        });
    //

}); // Fin de la fonction de chargement du DOM