$(document).ready(function () {
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

    $('.cooperation__slider,.slider__review').slick({

    });

})