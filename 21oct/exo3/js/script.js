/* 
Attendre le chargement du DOM
*/
document.addEventListener('DOMContentLoaded', () => {

    // Déclarer une variable color dont la valeur est 'vert'
    let color = 'vert'; // => :String

    /* 
    Utilisation du switch
    */
        switch( color ){
            case 'vert':
                console.log('Vert se dit Green en anglais');
                break;

            case 'jaune':
                console.log('Jaune se dit Yellow en anglais')
                break;

            case 'rouge':
                console.log('Rouge se dit Red en anglais');
                break;

            default:
                console.log('Je ne connais pas cette couleur');
                break;
        };
    //

}); // Fin de la fonction de chargement du DOM