/* 
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', () => {

    
    // Déclarer une variable age dont la valeur est 17
    let age = 87;

    /* 
        - SI (if) age est supérieur ou égale à 18, afficher 'Majeur' dans la console
        - OU SI (else if) age est supérieur ou égale à 70, afficher 'Senior' dans la console
        - SINON (else) afficher 'Mineur' dans la console
    */
        if( age >= 70 ){
            console.log('Sénior');
        }
        else if( age >= 18 ){
            console.log('Majeur');
        }
        else{
            console.log('Mineur');
        };

        console.log( age >= 18 );
    //

}); // Fin de la fonction de chargement du DOM