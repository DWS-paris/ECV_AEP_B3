<?php
/**
 * Template Name: Minimal Robot JS
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

            <h1></h1>
        </header>

        <main class="maxWidth">
            <section id="about">
                
            </section>

            <section id="projects">
                <h2>Some projects</h2>
                <ul></ul>
            </section>

            <section id="contacts">
                
            </section>
        </main>

        <footer>
            <p>Under WTFPL Licence, #2018 Julien Noyer</p>
        </footer>

        <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/minimal.js"></script>
    </body>
</html>