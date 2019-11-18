/* 
Attendre le chargement du DOM
*/
    document.addEventListener( 'DOMContentLoaded', () => {
        // Créer une variable contenant la balise BODY
        let myBody = document.querySelector('body');

        // Créer une variable contenant la balise H2
        let myTitle = document.querySelector('h2');

        // Créer une variable contenant les boutons du DOM
        let myButtons = document.querySelectorAll('button'); // Tableau de boutons
        
        // Faire une boucle sur le tableau de boutons
        for( let button of myButtons ){
            // Capter le click sur le bouton
            button.addEventListener( 'click',  () => {
                // Récupérer la valeur de l'attribut ID
                let selectedColor = button.getAttribute('id');

                // Supprimer toutes les class de la balise BODY
                myBody.classList.remove( 'green', 'yellow', 'red' );

                // Vérifier que selectedColor n'est pas égal à stop
                if( selectedColor != 'stop' ){
                    // Ajouter la class sur la balise BODY
                    myBody.classList.add( selectedColor );
                };

                // Utiliation de SWITCH pour écrire la bonne couleur
                switch( selectedColor ){
                    case 'green':
                        // Modifier le contenu HTML de la balise H2
                        myTitle.innerHTML = 'la couleur est <em>verte</em>';
                        break;

                    case 'yellow':
                        // Modifier le contenu HTML de la balise H2
                        myTitle.innerHTML = 'la couleur est <em>jaune</em>';
                        break;

                    case 'red':
                        // Modifier le contenu HTML de la balise H2
                        myTitle.innerHTML = 'la couleur est <em>rouge</em>';
                        break;
                    
                    default:
                        // Modifier le contenu HTML de la balise H2
                        myTitle.innerHTML = 'Aucune couleur';
                };
            });
        };

    });
//