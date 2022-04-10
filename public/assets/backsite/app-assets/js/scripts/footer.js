/*=========================================================================================
  File Name: footer.js
  Description: Template footer js.
  ----------------------------------------------------------------------------------------
  Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

//Check to see if the window is top if not then display button
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 40) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
    });

});