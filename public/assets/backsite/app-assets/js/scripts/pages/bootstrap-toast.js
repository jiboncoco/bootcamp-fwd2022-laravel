$('.toast-toggler').on('click', function () {
  $(this).next('.toast').prependTo('.toast-bs-container .toast-position').toast('show');
});

$('.placement').on('click', function () {
  $('.toast-placement').toast('show');
  $('.toast-placement .toast').toast('show');
});

// $('.toast-toggler').on('click', function () {
//   var $toast = $(this).next('.toast')

//   if ($('.toast.show').length > 0) {
//     $('.toast.show').removeClass('show').one('webkitTransitionEnd transitionEnd', function () {
//       $toast.addClass(function () {
//         setTimeout(function () {
//           $toast.removeClass('show')
//         }, 6000)

//         return 'show'
//       })
//     })
//   } else {
//     $toast.addClass(function () {
//       setTimeout(function () {
//         $toast.removeClass('show')
//       }, 6000)

//       return 'show'
//     })
//   }
// })