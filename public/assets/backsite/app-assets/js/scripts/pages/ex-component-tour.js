/*=========================================================================================
    File Name: ex-component-tour.js
    Description: Tour.
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {
  displayTour();
  $(window).resize(displayTour)
  // tour initialize
  var tour = new Shepherd.Tour({
    defaultStepOptions: {
      classes: 'tour-container shadow-md bg-purple-dark',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });
  //  tour step added here - Step 1
  tour.addStep({
    title: 'Here is your mega menu.',
    attachTo: {
      element: '.mega-dropdown',
      on: 'bottom'
    },
    buttons: [{
      action: function () {
        return this.cancel();
      },
      text: "Skip",
      classes: 'btn',
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next',
      classes: 'btn',
    }
    ],
    id: 'welcome'
  });
  // step 2
  tour.addStep({
    title: 'Here is page title.',
    attachTo: {
      element: '.breadcrumb-item.active',
      on: 'bottom'
    },
    buttons: [

      {
        action: function () {
          return this.cancel();
        },
        text: "Skip",
        classes: 'btn',
      },

      {
        action: function () {
          return this.back();
        },
        text: "Previous",
        classes: 'btn',
      },
      {
        action: function () {
          return this.next();
        },
        text: 'Next',
        classes: 'btn',
      },
    ]
  });

  // step 3
  tour.addStep({
    title: 'Check your notifications from here.',
    attachTo: {
      element: '.dropdown-notification .nav-link-label',
      on: 'bottom'
    },
    buttons: [

      {
        action: function () {
          return this.cancel();
        },
        text: "Skip",
        classes: 'btn',
      },

      {
        action: function () {
          return this.back();
        },
        text: "Previous",
        classes: 'btn',
      },
      {
        action: function () {
          return this.next();
        },
        text: 'Finish',
        classes: 'btn',
      },
    ]
  });


  // function to remove tour on small screen
  function displayTour() {
    window.resizeEvt;
    if ($(window).width() > 770) {
      $('#tour').on("click", function () {
        clearTimeout(window.resizeEvt);
        tour.start();
      })
    } else {
      $('#tour').on("click", function () {
        clearTimeout(window.resizeEvt);
        tour.cancel()
        window.resizeEvt = setTimeout(function () {
          alert("Tour only works for large screens!");
        }, 250);;
      })
    }
  }
});
