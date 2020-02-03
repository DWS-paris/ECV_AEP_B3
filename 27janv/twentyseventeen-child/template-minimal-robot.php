<?php
/**
 * Template Name: Minimal Robot
 * Template Post Type: page
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php the_title(); ?></title>
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/minimal.css">
</head>
    <body>
        <header>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/noun_1194453_cc.svg" alt="<?php the_title(); ?>">

            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>

            <h1><?php the_title(); ?></h1>
            <?php
                // Récupération des variables de l'article
                while ( have_posts() ) : the_post();
                    the_content();
                endwhile;
            ?>
        </header>

        <main class="maxWidth">
            <section>
                <!-- Récupéré le contenu du post ID 20 -->
                <?php
                    // Créer une variable pour l'ID du post
                    $aboutPost = get_post(20); 
                    // Créer une variable pour le titr du post
                    $aboutTitle = $aboutPost->post_title;
                    // Créer une variable pour le contenu du post
                    $aboutContent = $aboutPost->post_content;
                    // Afficher le titre du post dans une balise H2
                    echo "<h2>".$aboutTitle."</h2>";
                    // Afficher le contenu du post
                    echo $aboutContent;
                ?>
            </section>

            <section>
                <!-- Récupéré le contenu du post ID 47 -->
                <?php
                    // Créer une variable pour l'ID du post
                    $projectPost = get_post(47); 
                    // Créer une variable pour le titr du post
                    $projectTitle = $projectPost->post_title;
                    // Afficher le titre du post dans une balise H2
                    echo "<h2>".$projectTitle."</h2>";
                ?>

                <!-- Récupérer la liste d'article d'une catégorie -->
                <ul>
                    <?php query_posts('cat=2&orderby=post_title&order=ASC'); while (have_posts()) : the_post(); ?>
                        <!-- Boucle PHP -->
                        <li><img src="<?php echo get_the_post_thumbnail_url() ?>" alt="<?php the_title(); ?>"></li>
                    <?php endwhile; ?>
                </ul>
            </section>

            <section>
                <!-- Récupéré le contenu du post ID 22 -->
                <?php
                    // Créer une variable pour l'ID du post
                    $contactPost = get_post(22); 
                    // Créer une variable pour le titr du post
                    $contactsTitle = $contactPost->post_title;
                    // Créer une variable pour le contenu du post
                    $contactContent = $contactPost->post_content;
                    // Afficher le titre du post dans une balise H2
                    echo "<h2>".$contactsTitle."</h2>";
                    // Afficher le contenu du post
                    echo $contactContent;
                ?>

                <!-- Utiliser la fonction do_shortcode() pour exécuter un code court -->
                <?php echo do_shortcode( '[contact-form-7 id="24"]' ); ?>
            </section>
        </main>

        <footer>
            <p>Under WTFPL Licence, #2018 Julien Noyer</p>
        </footer>
    </body>
</html>