'use strict';
(function() {
    function createDots() {
        const count = document.querySelectorAll("#tefal-optigrill .main-fourth__slide-text-template").length;
        const dotsContainer = document.querySelector("#tefal-optigrill .main-fourth__slide-dots");
        for (let i = 1; i <= count; i++)  {
            let dot = document.createElement('div');
            dot.classList.add("main-fourth__slide-dot");
            dot.setAttribute("data-template", i);
            dotsContainer.appendChild(dot);
            if(i == 1) {
                dot.classList.add("main-fourth__slide-dot_active");
            }
        }
    }
document.addEventListener("DOMContentLoaded", function(e) {
    document.addEventListener("click", function(e) {
        for (let target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches("#tefal-optigrill .main-third__slider-tab")) {
                if(!target.classList.contains("main-third__slider-tab_active")) {
                    document.querySelector("#tefal-optigrill .main-third__slider-tab_active").classList.remove("main-third__slider-tab_active");
                    target.classList.add("main-third__slider-tab_active");
                    const container = document.querySelector("#tefal-optigrill .main-third__slide");
                    const id = target.getAttribute("data-slide");
                    const template = target.closest("#tefal-optigrill .main-third__slider-container").querySelector("template[data-slide='"+id+"']");
                    container.innerHTML =  template.innerHTML;
                }
            }
        }
    });
    createDots();
    document.addEventListener("click", function(e) {
        for (let target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches(".main-fourth__interactive-item")) {
                if(!target.classList.contains("main-fourth__interactive-item_disable")) {
                    document.querySelector("#tefal-optigrill .main-fourth__interactive-item_active").classList.remove("main-fourth__interactive-item_active");
                    target.classList.add("main-fourth__interactive-item_active");
                    document.querySelector(".main-fourth__slide-dot_active").classList.remove("main-fourth__slide-dot_active");
                    const container = document.querySelector("#tefal-optigrill .main-fourth__slide-text");
                    const id = target.getAttribute("data-template");
                    document.querySelector("#tefal-optigrill .main-fourth__slide-dot[data-template='"+id+"']").classList.add("main-fourth__slide-dot_active");
                    const template = target.closest("#tefal-optigrill .main-fourth__slider").querySelector("template[data-template='"+id+"']");
                    container.innerHTML = template.innerHTML;
                }
            }
        }
    });
    document.addEventListener("click", function(e) {
        for (let target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches("#tefal-optigrill .main-fourth__slide-dot")) {
                if(!target.classList.contains("main-fourth__slide-dot_active")) {
                    document.querySelector("#tefal-optigrill .main-fourth__slide-dot_active").classList.remove("main-fourth__slide-dot_active");
                    target.classList.add("main-fourth__slide-dot_active");
                    document.querySelector("#tefal-optigrill .main-fourth__interactive-item_active").classList.remove("main-fourth__interactive-item_active");
                    const container = document.querySelector("#tefal-optigrill .main-fourth__slide-text");
                    const id = target.getAttribute("data-template");
                    document.querySelector("#tefal-optigrill .main-fourth__interactive-item[data-template='"+id+"']").classList.add("main-fourth__interactive-item_active");
                    const template = target.closest("#tefal-optigrill .main-fourth__slider").querySelector("template[data-template='"+id+"']");
                    container.innerHTML = template.innerHTML;
                }
            }
        }
    });
});
$(document).ready(function () {
    $('#tefal-optigrill .main-fifth__slider-outer').slick({
        slidesToShow: 4,
        arrows: false,
        variableWidth: true
    });
    $('#tefal-optigrill .main-fifth__arrow_left').click(function () {
        $('#tefal-optigrill .main-fifth__slider-outer').slick("slickPrev");
    });
    $('#tefal-optigrill .main-fifth__arrow_right').click(function () {
        $('#tefal-optigrill .main-fifth__slider-outer').slick("slickNext");
    });

    $('#tefal-optigrill .main-sixth__slider').slick({
        slidesToShow: 3,
        arrows: false,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    dots: true
                }
            }
        ]
    });
    $('#tefal-optigrill .main-sixth__arrow_left').click(function () {
        $('#tefal-optigrill .main-sixth__slider').slick("slickPrev");
    });
    $('#tefal-optigrill .main-sixth__arrow_right').click(function () {
        $('#tefal-optigrill .main-sixth__slider').slick("slickNext");
    });

    $('#tefal-optigrill .main-eighth__slider').slick({
        slidesToShow: 3,
        arrows: false,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
    $('#tefal-optigrill .main-eighth__arrow_left').click(function () {
        $('#tefal-optigrill .main-eighth__slider').slick("slickPrev");
    });
    $('#tefal-optigrill .main-eighth__arrow_right').click(function () {
        $('#tefal-optigrill .main-eighth__slider').slick("slickNext");
    });

    if($(window).width() < 1170) {
        $('#tefal-optigrill .main-second__slider-mobile').slick({
            slidesToShow: 3,
            arrows: false,
            adaptiveHeight: true,
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
        $('#tefal-optigrill .main-second__arrow_left').click(function () {
            $('#tefal-optigrill .main-second__slider-mobile').slick("slickPrev");
        });
        $('#tefal-optigrill .main-second__arrow_right').click(function () {
            $('#tefal-optigrill .main-second__slider-mobile').slick("slickNext");
        });
    }
    if($(window).width() < 768) {
        $('#tefal-optigrill .main-seventh__container').slick({
            slidesToShow: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: false,
            variableWidth: true,
        });
    }

    let $threeSixty = $('#tefal-optigrill .main-second__image');
    $threeSixty.threeSixty({
        // horizontal OR vertical
        dragDirection: 'horizontal',
        // use arrow keys
        useKeys: true,
        // is draggable?
        draggable: true
    });
    $("#tefal-optigrill .main-fourth__slide-article_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $("#tefal-optigrill .main-fourth__tabs").slick({
        slidesToShow: 4,
        variableWidth: true,
        arrows: false
    });
    $("#tefal-optigrill .main-fourth__arrow").click(function () {
        $("#tefal-optigrill .main-fourth__tabs").slick("slickNext");
    });
    $("#tefal-optigrill .main-fourth__tabs").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $("#tefal-optigrill .main-fourth__slider_mobile-hide").removeClass("main-fourth__slider_mobile-hide");
        const container = document.querySelector("#tefal-optigrill .main-fourth__slider-outer");
        const template = document.querySelector("#tefal-optigrill .main-fourth__template[data-tab='"+nextSlide+"']");
        container.innerHTML = template.innerHTML;
        $("#tefal-optigrill .main-fourth__slide-article_slider").slick({
            slidesToShow: 3,
            infinite: false,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1169,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        createDots();
    });
    $("#tefal-optigrill .main-fourth__tab").click(function () {
        $("#tefal-optigrill .main-fourth__tabs").slick("slickGoTo", $(this).attr("data-slick-index"));
    });
    $('#tefal-optigrill .main-fourth').on("click", ".main-fourth__slide-descriptor a", function (e) {
        e.preventDefault();
        let aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
        $("#tefal-optigrill .main-fifth__slider-outer").slick("slickGoTo", $(this).attr("data-slide"));
    });
    $('#tefal-optigrill .main-second').on("click", "a.main-second__item", function (e) {
        e.preventDefault();
        let aid = $(this).attr("href");
        let slide = $(this).attr("data-slide");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
        document.querySelector("#tefal-optigrill .main-third__slider-tab_active").classList.remove("main-third__slider-tab_active");
        document.querySelector("#tefal-optigrill .main-third__slider-tab[data-slide='"+slide+"']").classList.add("main-third__slider-tab_active");
        const container = document.querySelector("#tefal-optigrill .main-third__slide");
        const template = document.querySelector("#tefal-optigrill .main-third__slider-container").querySelector("template[data-slide='"+slide+"']");
        container.innerHTML =  template.innerHTML;
    });
    $('#tefal-optigrill .header, #tefal-optigrill .firstscreen').on("click", "a", function (e) {
        let aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });
    $("#tefal-optigrill .header-sandwich").click(function () {
        $(this).toggleClass("header-sandwich_active");
        $('#tefal-optigrill .header-menu__drop').toggleClass("header-menu__drop_active");
    });
});
})();