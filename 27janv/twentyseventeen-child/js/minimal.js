/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {
        /* 
        Déclarations
        */
            const apiUrl = 'http://localhost:8888/wp-json/wp/v2';
            const myHeader = document.querySelector('header');
            const myTitle = document.querySelector('header h1');
            const aboutSection = document.querySelector('#about');
            const projectList = document.querySelector('#projects ul');
        //

        /* 
        Fonctions
        */
            // Fonction pour récupérer le contenu de la page d'accueil
            const getPageContent = ( endpoint ) => {
                // Utilisation de l'API Fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

                fetch(`${apiUrl}/${endpoint}`)
                .then( apiResponse => {
                    // Vérifier la requête
                    if( apiResponse.ok ){
                        // Convertir la réponse en JSON
                        return apiResponse.json();
                    };
                })
                .then( jsonData => {
                    // Vérifier le paramêtre endpoint
                    if( endpoint === 'pages/2' ){
                        // Contenu de la page d'accueil
                        myTitle.innerHTML = jsonData.title.rendered;
                        myHeader.innerHTML += jsonData.content.rendered;
                    }
                    else if( endpoint === 'pages/20' ){
                        // Contenu de la page about
                        aboutSection.innerHTML += `
                            <h2>${jsonData.title.rendered}</h2>
                            ${jsonData.content.rendered}
                        `;
                    }
                    else if( endpoint === 'posts?filter=minimal-robot' ){
                        // Afficher les articles
                        for( let item of jsonData ){
                            projectList.innerHTML += `
                                <li><img src="${item.fimg_url}" alt="Image"></li>
                            `;
                        }
                    }
                })
                .catch( apiError => {
                    console.log(apiError);
                });
            };
        //

        /* 
        Lancer IHM
        */
            getPageContent('pages/2');
            getPageContent('pages/20');
            getPageContent('posts?filter=minimal-robot');
        //
    });
//