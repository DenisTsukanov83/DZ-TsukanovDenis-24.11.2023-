
$( document ).ready(function() {

    //Переключение меню

    $('.about .about-nav ul li a').click((e) => {
        e.preventDefault();
        $('.about .contents').hide();
        $('.about .about-menu ul li a').removeClass('active');
        e.target.classList.add('active');
        
        switch(true) {
            case e.target.textContent == 'About me': $('.about-content').show();
            break;
            case e.target.textContent == 'Resume': $('.resume-content').show();
            break;
            case e.target.textContent == 'Testimonials': $('.testimon-content').show();
            break;
            case e.target.textContent == 'Contact': $('.contact-content').show();
            break;
            case e.target.textContent == 'Portfolio': $('.portfolio-content').show();
            break;
        }
    });

    // Переключение Portfolio

    $('.portfolio-nav ul li a').click((e) => {
        e.preventDefault();
        $('.portfolio-nav ul li a').removeClass('active').addClass('not-active');
        e.target.classList.remove('not-active');
        e.target.classList.add('active');
        $('.portfolio-grid').hide();
        $('.portfolio-grid').removeClass('grid');

        switch(true) {
            case e.target.textContent == 'All': $('.portfolio-grid-all').addClass('grid');
            break;
            case e.target.textContent == 'Graphic design': $('.portfolio-grid-graphic').addClass('grid');
            break;
            case e.target.textContent == 'Web design': $('.portfolio-grid-web').addClass('grid');
            break;
            case e.target.textContent == 'Photography': $('.portfolio-grid-photography').addClass('grid');
            break;
        }
    });

    // Открытие меню

    $('.hamburger').click((e) => {
        console.log($('.about-menu'))
        $('.about-nav').animate({
            'left': '0'
        }, 500)
    })
});