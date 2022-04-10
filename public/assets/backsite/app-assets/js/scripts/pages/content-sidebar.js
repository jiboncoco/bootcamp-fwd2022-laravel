/*=========================================================================================
    File Name: content-sidebar.js
    Description: Invoices list datables configurations
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {
    /***********************************
    *        js of small Slider        *
    ************************************/

    var sm_options = {
        start: [1000,3500],
        behaviour: 'drag',
        connect: true,
        tooltips: [wNumb({
            decimals: 0
        }), wNumb({
            decimals: 0
        })],
        range: {
            'min': 100,
            'max': 5000
        }
    };
    var smallSlider = document.getElementById('small-slider');
    noUiSlider.create(smallSlider, sm_options);


    /*************************************
    *        Default Score Rating        *
    **************************************/
    $.fn.raty.defaults.path = '../../../app-assets/images/raty/';

    $('#score-rating').raty({
        readOnly: true,
        score: 4.5
    });

    if($(".sidebar-sticky").length){
        var headerNavbarHeight,
            footerNavbarHeight;

        // Header & Footer offset only for right & left sticky sidebar
        if($("body").hasClass('content-right-sidebar') || $("body").hasClass('content-left-sidebar')){
            headerNavbarHeight = $('.header-navbar').height();
            footerNavbarHeight = $('footer.footer').height();
        }
        // Header & Footer offset with padding for detached right & left dsticky sidebar
        else{
            headerNavbarHeight = $('.header-navbar').height()+24;
            footerNavbarHeight = $('footer.footer').height()+10;
        }

        $(".sidebar-sticky").sticky({
            topSpacing: headerNavbarHeight,
            bottomSpacing: footerNavbarHeight
        });

    }
});