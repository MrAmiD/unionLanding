function scrollAnimate(selector){
    var absOffsetTop = selector.offset().top - $(window).height();
    var scrollWin = $(window).scrollTop();
    if (scrollWin >= absOffsetTop - 100) {
        //console.log('addClass animate');
        selector.addClass('animate');
    } else {
        //console.log('removeClass animate')
        selector.removeClass('animate');
    }
};
function CaseSliderInit(){//слайдер на главной странице
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
        var slideIndex = $(this).index();
        // $( '.main-slider' ).slickGoTo( parseInt(slideIndex) );

        var slider = $('.case-slider');

        $('.case-sec .slider-trigers .item-t').removeClass('active');
        $('.case-sec .slider-trigers-num .accent-txt').text(slideIndex+1);
        $(this).toggleClass('active');
        slider[0].slick.slickGoTo(parseInt(slideIndex));

    });

}

$('.case-slider').on('init', function(event, slick){

    var itemt = '<div class="item-t"></div>';

    slick.$slides.each(function (item) {
        $('.case-sec .slider-trigers-r .slider-trigers-c .slider-trigers-num .count-sliders').text(slick.$slides.length);
        $('.case-sec .slider-trigers-r .slider-trigers-c .slider-trigers').append(itemt);
    });
    $('.case-sec .slider-trigers-r .slider-trigers-c .slider-trigers .item-t:first-child').addClass('active')

});

$('.case-slider').on('swipe', function(event, slick){
    $('.case-sec .slider-trigers .item-t').removeClass('active');
    $('.case-sec .slider-trigers-num .accent-txt').text(slick.currentSlide+1);
    $('.case-sec .slider-trigers .item-t').eq(slick.currentSlide).toggleClass('active');

});

function feedbackSliderSliderInit(){//слайдер на главной странице
    $('.feedback-slider').on('init', function(slick){
        console.log('.feedback-slider init was hit');

        $('.feedback-slider .slick-slide').each(function(index){
            $(this).attr('data-mh',$('.feedback-slider .slick-slide')[index].clientHeight+26);
        });

        heightFeedback();

    });

    $('.feedback-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        heightFeedback();
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="29px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M7.852,14.105 C7.972,14.185 8.110,14.246 8.209,14.347 C10.835,17.037 13.456,19.732 16.078,22.426 C17.313,23.695 17.316,25.222 16.087,26.487 C15.869,26.712 15.651,26.937 15.432,27.160 C14.292,28.318 12.763,28.328 11.627,27.167 C9.521,25.014 7.423,22.852 5.322,20.694 C3.851,19.183 2.379,17.673 0.909,16.161 C-0.295,14.922 -0.291,13.098 0.919,11.854 C4.466,8.210 8.013,4.567 11.560,0.925 C12.777,-0.324 14.275,-0.324 15.490,0.921 C15.717,1.154 15.945,1.387 16.171,1.621 C17.281,2.771 17.285,4.355 16.174,5.498 C13.528,8.219 10.879,10.937 8.230,13.655 C8.129,13.758 8.008,13.839 7.897,13.931 C7.882,13.989 7.867,14.047 7.852,14.105 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="28px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M9.148,13.895 C9.028,13.816 8.890,13.755 8.791,13.653 C6.165,10.969 3.544,8.281 0.922,5.593 C-0.313,4.326 -0.316,2.803 0.913,1.541 C1.131,1.317 1.349,1.092 1.568,0.869 C2.708,-0.286 4.237,-0.296 5.373,0.863 C7.479,3.011 9.577,5.168 11.678,7.321 C13.149,8.828 14.621,10.335 16.091,11.843 C17.295,13.080 17.291,14.900 16.081,16.142 C12.534,19.777 8.987,23.412 5.440,27.046 C4.223,28.292 2.725,28.292 1.510,27.049 C1.283,26.817 1.055,26.585 0.829,26.352 C-0.281,25.203 -0.285,23.624 0.826,22.483 C3.472,19.768 6.121,17.056 8.770,14.345 C8.871,14.242 8.992,14.160 9.103,14.069 C9.118,14.011 9.133,13.953 9.148,13.895 Z"/></svg>' +
        '</button>'
    });
}

$(document).on('click', '#siteless-styler', function () {

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
