document.addEventListener('DOMContentLoaded', () => {
    // Déclarer les variables
    let myButton = document.querySelector('button');
    let myLinks = document.querySelector('nav ul');
    let isOpen = false;

    // Capter le click sur le bouton
    myButton.addEventListener('click', () => {
        // Fermer si la nav est ouverte ou ouvrir si la nav est fermée
        if( isOpen ){
            // Fermer les liens : supprimer la class open
            myLinks.classList.remove('open');
        }
        else{
            // Ouvrir les liens : ajouter la class open
            myLinks.classList.add('open');
        };

        // Inverser la valeur de isOpen
        isOpen = !isOpen;
    });
});