function scrollAnimate(selector){
    var absOffsetTop = selector.offset().top - $(window).height();
    var scrollWin = $(window).scrollTop();
    if (scrollWin >= absOffsetTop - 50) {
        //console.log('addClass animate');
        selector.addClass('animate');
    } else {
        //console.log('removeClass animate')
        selector.removeClass('animate');
    }
};

function addSliderTrigers(secSelector, slick) {//Динамическое формирование тригеров для переключения слайдера, зависит от количества слайдов
    var itemt = '<div class="item-t"></div>';
    slick.$slides.each(function (item) {

        $(secSelector).find('.slider-trigers-r .slider-trigers-c .slider-trigers-num .count-sliders').text(slick.$slides.length);
        // $(secSelector + '.slider-trigers-r .slider-trigers-c .slider-trigers-num .count-sliders').text(slick.$slides.length);
        $(secSelector).find('.slider-trigers-r .slider-trigers-c .slider-trigers').append(itemt);
        // $(secSelector + '.slider-trigers-r .slider-trigers-c .slider-trigers').append(itemt);
    });
    $(secSelector).find('.slider-trigers-r .slider-trigers-c .slider-trigers .item-t:first-child').addClass('active');
}

function chengeNumTriggers(secSelector, slick) {//Изменение текущего номера слайдера при изменении слайда
    $(secSelector).find('.slider-trigers .item-t').removeClass('active');
    $(secSelector).find('.slider-trigers-num .accent-txt').text(slick.currentSlide+1);
    $(secSelector).find('.slider-trigers .item-t').eq(slick.currentSlide).toggleClass('active');
}

function clickTriggers(secSelector, varthis, slider) {// Обработка клика на тригер переключения слайдера
    var slideIndex = varthis.index();

    $(secSelector).find('.slider-trigers .item-t').removeClass('active');
    $(secSelector).find('.slider-trigers-num .accent-txt').text(slideIndex+1);


    varthis.toggleClass('active');
    slider[0].slick.slickGoTo(parseInt(slideIndex));
}


function CaseSliderInit(){//слайдер кейсов
    $('.case-slider').slick({
        dots: false,
        infinite: true,
        //dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="29px"><path fill-rule="evenodd" fill="rgb(25, 25, 25)" d="M8.312,14.113 C8.439,14.193 8.586,14.254 8.691,14.355 C11.471,17.043 14.246,19.734 17.022,22.425 C18.330,23.693 18.333,25.218 17.032,26.481 C16.801,26.706 16.570,26.931 16.338,27.154 C15.132,28.310 13.513,28.321 12.310,27.161 C10.079,25.010 7.858,22.850 5.633,20.695 C4.076,19.186 2.517,17.678 0.961,16.167 C-0.314,14.930 -0.310,13.108 0.972,11.865 C4.727,8.225 8.482,4.586 12.239,0.948 C13.527,-0.300 15.114,-0.299 16.400,0.944 C16.641,1.177 16.882,1.409 17.121,1.643 C18.296,2.793 18.300,4.374 17.124,5.516 C14.322,8.234 11.518,10.949 8.713,13.664 C8.606,13.766 8.478,13.848 8.360,13.940 C8.344,13.997 8.328,14.056 8.312,14.113 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="28px"><path fill-rule="evenodd" fill="rgb(25, 25, 25)" d="M9.688,13.902 C9.561,13.823 9.414,13.762 9.309,13.661 C6.529,10.977 3.754,8.288 0.978,5.600 C-0.330,4.333 -0.333,2.810 0.968,1.548 C1.199,1.324 1.430,1.099 1.662,0.877 C2.868,-0.279 4.487,-0.289 5.690,0.870 C7.921,3.018 10.142,5.175 12.367,7.328 C13.924,8.835 15.483,10.342 17.039,11.851 C18.314,13.087 18.310,14.907 17.028,16.149 C13.273,19.784 9.518,23.419 5.761,27.053 C4.473,28.299 2.886,28.299 1.600,27.057 C1.359,26.824 1.118,26.592 0.879,26.359 C-0.296,25.210 -0.301,23.631 0.877,22.490 C3.678,19.775 6.482,17.063 9.287,14.351 C9.394,14.249 9.522,14.167 9.640,14.076 C9.656,14.018 9.672,13.960 9.688,13.902 Z"/></svg>' +
        '</button>'
    });

    $(document).on('click', '.case-sec .slider-trigers .item-t', function () {
        clickTriggers('.case-sec', $(this), $('.case-slider'));
    });
}
function feedbackSliderInit(){//слайдер кейсов
    $('.feedbackSlider').slick({
        dots: false,
        infinite: true,
        //dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="29px"><path fill-rule="evenodd" fill="rgb(25, 25, 25)" d="M8.312,14.113 C8.439,14.193 8.586,14.254 8.691,14.355 C11.471,17.043 14.246,19.734 17.022,22.425 C18.330,23.693 18.333,25.218 17.032,26.481 C16.801,26.706 16.570,26.931 16.338,27.154 C15.132,28.310 13.513,28.321 12.310,27.161 C10.079,25.010 7.858,22.850 5.633,20.695 C4.076,19.186 2.517,17.678 0.961,16.167 C-0.314,14.930 -0.310,13.108 0.972,11.865 C4.727,8.225 8.482,4.586 12.239,0.948 C13.527,-0.300 15.114,-0.299 16.400,0.944 C16.641,1.177 16.882,1.409 17.121,1.643 C18.296,2.793 18.300,4.374 17.124,5.516 C14.322,8.234 11.518,10.949 8.713,13.664 C8.606,13.766 8.478,13.848 8.360,13.940 C8.344,13.997 8.328,14.056 8.312,14.113 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="28px"><path fill-rule="evenodd" fill="rgb(25, 25, 25)" d="M9.688,13.902 C9.561,13.823 9.414,13.762 9.309,13.661 C6.529,10.977 3.754,8.288 0.978,5.600 C-0.330,4.333 -0.333,2.810 0.968,1.548 C1.199,1.324 1.430,1.099 1.662,0.877 C2.868,-0.279 4.487,-0.289 5.690,0.870 C7.921,3.018 10.142,5.175 12.367,7.328 C13.924,8.835 15.483,10.342 17.039,11.851 C18.314,13.087 18.310,14.907 17.028,16.149 C13.273,19.784 9.518,23.419 5.761,27.053 C4.473,28.299 2.886,28.299 1.600,27.057 C1.359,26.824 1.118,26.592 0.879,26.359 C-0.296,25.210 -0.301,23.631 0.877,22.490 C3.678,19.775 6.482,17.063 9.287,14.351 C9.394,14.249 9.522,14.167 9.640,14.076 C9.656,14.018 9.672,13.960 9.688,13.902 Z"/></svg>' +
        '</button>'
    });

    $(document).on('click', '.feedback-sec .slider-trigers .item-t', function () {
        clickTriggers('.feedback-sec', $(this), $('.feedbackSlider'));
    });
}





$('.case-slider').on('init', function(event, slick){
    addSliderTrigers('.case-sec', slick)
});

$('.case-slider').on('swipe', function(event, slick){
    chengeNumTriggers('.case-sec', slick);
});

$('.feedbackSlider').on('init', function(event, slick){
    addSliderTrigers('.feedback-sec', slick)
});

$('.feedbackSlider').on('swipe', function(event, slick){
    chengeNumTriggers('.feedback-sec', slick);
});





$(document).on('click', '#siteless-styler', function () {//вызывается в форме при нажатии на чекбокс "Без сайта"

    if($(this).hasClass('checked')){
        $('.siteless-c .sl-r:first-child').addClass('disabled');
        $('.siteless-c .sl-r:first-child').animate({
            opacity: 0.3
        }, 300, function() {
            // Animation complete.
        });
    } else {
        $('.siteless-c .sl-r:first-child').removeClass('disabled');
        $('.siteless-c .sl-r:first-child').animate({
            opacity: 1
        }, 300, function() {
            // Animation complete.
        });
    }
});

$('.status-bar ul li').on('click', function () {
    $("html, body").animate({ scrollTop: $($(this).data().trigger).offset().top - 0}, 600);
});

$(function() {
    /*datepicker start*/

    //Календарь для выбора даты
    // var now = new Date();
    // var minDate = new Date(new Date().getTime() + 30 * 60 * 1000);//now +30 минут
    // var maxDate = new Date();
    // maxDate.setDate(maxDate.getDate()+1);//now + 1 day
    //
    // var datetime = $('.datepicker-here').datepicker({
    //     dateFormat : 'dd.mm.yyyy',
    //     minDate: minDate,
    //     maxDate: maxDate,
    //     onSelect: function(fd, d, picker) {
    //         console.log('dateSelected', $('.datepicker-here').val());
    //     }
    // });

    /*datepicker end*/


    $('.js-single-i input[type=checkbox]').on('change', function() {
        $('.js-single-i input[type=checkbox]').not(this).prop('checked', false);
    }); 
    //setInvest start
    $('select').styler({
        selectSearch: true,
    });
    $('input[type="checkbox"]').styler({
        selectSearch: true,
    });
    //setInvest end


    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

});
