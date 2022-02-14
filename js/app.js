$(document).ready(function () {

    // Ползунок

    $(".point").on("click", function (e) {
        let getTotalPoints = $(".point").length,
            getIndex = $(this).index();
        getCompletedIndex = $(".point--active").index();
        $(".bar__fill").css("width", (getIndex - 1) / (getTotalPoints - 1) * 100 + '%'),
            $(".bar__fill-mobile").css("height", (getIndex - 1) / (getTotalPoints - 1) * 100 + '%')
        if (getIndex => getCompletedIndex) {
            $(".point--active").addClass("point--complete").removeClass("point--active");
            $(this).addClass("point--active");
            $(this).prevAll().addClass("point--complete");
            $(this).nextAll().removeClass("point--complete");
        }
    });

    function classFunction() {
        if ($('body').width() < 600) {
            $('.bar__fill').removeClass('bar__fill').addClass('bar__fill-mobile');
        }
        else {
            $('.bar__fill-mobile').removeClass('bar__fill-mobile').addClass('bar__fill');
        }
    }

    classFunction();
    $(window).resize(classFunction);


    // Слайдер

    $('.cooperation__slider').slick({
        dots: true,
    });

    $('.slider__review').slick({
        dots: true,
        adaptiveHeight: true,
    });

    // Слайдер

    $('#reed').on("click", function () {
        $('.main__review').addClass('visible');
        $('.bottom').addClass('hide');
        $('.slider__review').slick('setPosition');
    })


    // Скролл к блокам

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 1000)
    })


})