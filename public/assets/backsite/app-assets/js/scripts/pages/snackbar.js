$('.snackbar-btn').on('click', function () {
     $(this).parent('.snackbar').removeClass('show')
   })

   $('.snackbar-toggler').on('click', function () {
     var $snackbar = $(this).next('.snackbar')

     if ($('.snackbar.show').length > 0) {
       $('.snackbar.show').removeClass('show').one('webkitTransitionEnd transitionEnd', function () {
         $snackbar.addClass(function () {
           setTimeout(function () {
             $snackbar.removeClass('show')
           }, 6000)

           return 'show'
         })
       })
     } else {
       $snackbar.addClass(function () {
         setTimeout(function () {
           $snackbar.removeClass('show')
         }, 6000)

         return 'show'
       })
     }
   });