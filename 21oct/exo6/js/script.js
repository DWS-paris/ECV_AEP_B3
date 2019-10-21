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
        let subTitle = document.querySelector('h2');
        let addNote = document.querySelector('#addNote');
        let displayAverage = document.querySelector('.displayAverage');
        let noteList = document.querySelector('#noteList');
        let result = document.querySelector('p');

        // Variables du script
        let notes = [];
        let total = 0;
    //

    /* 
    Fonctions
    */
        let setAverage = () => {
            // Mettre à 0 le total de notes
            total = 0;
            
            // Boucle sur la tableau notes
            for( let item of notes ){
                total += item;
            };

            // Calculer la moyenne
            subTitle.innerHTML += ' <em>' + total / notes.length + ' sur 20</em>';

            // Ajouter la class open sur la balise subTitle
            subTitle.classList.add('open');
        };
    //

    /* 
    Lancer l'IHM
    */
        // Capter le clic sur le bouton addNote pour ajouter une note
        addNote.addEventListener( 'click', () => {
            // Retirer la class open sur la balise subTitle
            subTitle.classList.remove('open');

            // Changer le contenu de la balise
            subTitle.innerHTML = 'La moyennne est de :';

            // Demander à l'utilisateur d'ajouter une note sur 20
            let newNote = prompt('Ajouter une note sur 20');
            console.log( +newNote );
            console.log( typeof +newNote );

            // Convertir un texte en entier (ex. : '12' devient 12)
            let convertedNote = +newNote;

            // Verifier la valeur
            if( isNaN(convertedNote) ){ // La valeur n'est pas un nombre (NaN : Note a Number)
                alert('Ajouter un entier !!');
            }
            else if( convertedNote > 20 ){ // La valeur est au-dessus de 20
                alert('Ajouter une note de 0 à 20');
            }
            else{
                // La valeur est bonne, ajouter la dans un tableau
                notes.push( convertedNote );

                // Ajouter la note dans la liste
                noteList.innerHTML += '<li>' + convertedNote + ' sur 20</li>';

                // Vérifier s'il y a au moins deux notes dans la tableau
                if( notes.length >= 2 ){
                    // Ajouter la class open sur la balise displayAverage
                    displayAverage.classList.add('open');
                };
            }
        });

        // Capter le clic sur la balise .displayAverage
        displayAverage.addEventListener( 'click', () => {
            // Appeler la fonction pour calculer la moyenne
            setAverage();
        });
    //

}); // Fin de la fonction de chargement du DOM