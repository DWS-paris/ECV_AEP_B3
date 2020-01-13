/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {
        /* 
        Déclarations
        */
            const myForm = document.querySelector('form');
            const userEmail = document.querySelector('#userEmail');
            const userPassword = document.querySelector('#userPassword');
            const showPassword = document.querySelector('#showPassword');
            let passwordIsHidden = true;
        //

        /* 
        Méthodes / Fonctions
        */
            const getFormSubmit = () => {
                // Capter la soumission du formulaire
                myForm.addEventListener('submit', (event) => {
                    // Bloquer le comportement par defaut du formulaire
                    event.preventDefault();

                    /* 
                    Vérifier les champs du formulaire
                    */
                        if( 
                            userEmail.value !== 'test@test.com' &&
                            userPassword.value !== 'azertyuiop'
                        ){
                            console.log('Utilisateur inconnu');
                        }   
                        else{
                            console.log('Utilisateur connecté');

                            // Vider les champs du formulaire
                            myForm.reset()
                        };
                    //
                })
            }

            const togglePassword = () => {
                showPassword.addEventListener('click', () => {
                    if(passwordIsHidden){
                        // Modifier l'attribbut type de userPassword
                        userPassword.setAttribute('type', 'password')
                    }
                    else{
                        // Modifier l'attribbut type de userPassword
                        userPassword.setAttribute('type', 'text')
                    }

                    // Inverser la valeur de passwordIsHidden
                    passwordIsHidden = !passwordIsHidden;
                })
            }
        //

        /* 
        Lancere l'IHM
        */
            getFormSubmit();
            togglePassword();
        //
    })
//