
$( document ).ready(function() {

    //Переключение меню
    function showContents(e) {

        if(e.target.textContent != 'Home' && !e.target.classList.contains('aside-menu-item-1')) $('.about .contents').hide();
        
        $('.about .about-menu ul li a').removeClass('active');
        e.target.classList.add('active');

        $('.aside-menu-item').removeClass('active');
        e.target.classList.add('active');

        $.each($('.aside-menu-item'), (i, el) => {
            $(el).css({
                'background-image': `${$(el).css('background-image').replace(/white/gi, 'black')}`
            })
        });

        $(e.target).css('background-image', $(e.target).css('background-image').replace(/black/gi, 'white'));
        
        switch(true) {
            case e.target.textContent == 'About me' || e.target.classList.contains('aside-menu-item-2'): $('.about-content').show();
            break;
            case e.target.textContent == 'Resume' || e.target.classList.contains('aside-menu-item-3'): $('.resume-content').show();
            break;
            case e.target.textContent == 'Portfolio' || e.target.classList.contains('aside-menu-item-4'): $('.portfolio-content').show();
            break;
            case e.target.textContent == 'Testimonials' || e.target.classList.contains('aside-menu-item-5'): $('.testimon-content').show();
            break;
            case e.target.textContent == 'Contact' || e.target.classList.contains('aside-menu-item-6'): $('.contact-content').show();
            break;
        }

        if(window. innerWidth < 601) {
            showMenu();
        }
    }

    $('.about .about-nav ul li a').click((e) => {
        showContents(e);
    });

    $('.aside-menu-item').click((e) => {
        showContents(e);
    });

    // Hover
    $('.aside-menu-item').mouseover((e) => {
        if(!$(e.target).hasClass('active')) {
            $(e.target).css('background-image', $(e.target).css('background-image').replace(/black/gi, 'white'));
            
        }
    });
    $('.aside-menu-item').mouseleave((e) => {
        if(!$(e.target).hasClass('active')) {
            $(e.target).css('background-image', $(e.target).css('background-image').replace(/white/gi, 'black'));
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

    let isActiveMenu = false;

    function showMenu() {
        if(isActiveMenu) {
            $('.about-nav').animate({
                'left': '-55rem'
            }, 500);

            $('.hamburger div:nth-child(1)').css({
                'transform': 'rotate(0deg) translateY(0rem)'
            });
            $('.hamburger div:nth-child(2)').css({
                'display': 'block'
            });
            $('.hamburger div:nth-child(3)').css({
                'transform': 'rotate(0deg) translateY(0rem)'
            });
        } else {
            $('.about-nav').animate({
                'left': '0'
            }, 500);

            $('.hamburger div:nth-child(1)').css({
                'transform': 'rotate(45deg) translateY(0.98rem)'
            });
            $('.hamburger div:nth-child(2)').css({
                'display': 'none'
            });
            $('.hamburger div:nth-child(3)').css({
                'transform': 'rotate(-45deg) translateY(-0.98rem)'
            });
        }
        
        isActiveMenu = !isActiveMenu;
    }

    $('.hamburger').click(() => {
        showMenu();
    });
});