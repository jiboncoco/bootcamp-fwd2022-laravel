/*=========================================================================================
	File Name: account-setting.js
	Description: Account setting.
	----------------------------------------------------------------------------------------
	Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
	Author: Pixinvent
	Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {
  // language select
  var languageselect = $("#languageselect2").select2({
    dropdownAutoWidth: true,
    width: '100%'
  });
  // music select
  var musicselect = $("#musicselect2").select2({
    dropdownAutoWidth: true,
    width: '100%'
  });
  // movies select
  var moviesselect = $("#moviesselect2").select2({
    dropdownAutoWidth: true,
    width: '100%'
  });
  // birthdate date
  $('.birthdate-picker').pickadate({
    format: 'mmmm, d, yyyy'
  });
});
(function (window, document, $) {
  'use strict';
  // Input, Select, Textarea validations except submit button
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  // Switchery
  var i = 0;
  if (Array.prototype.forEach) {
    var elems = $(".switchery");
    $.each(elems, function (key, value) {
      var $size = "",
        $color = "",
        $sizeClass = "",
        $colorCode = "";
      $size = $(this).data("size");
      var $sizes = {
        lg: "large",
        sm: "small",
        xs: "xsmall"
      };
      if ($(this).data("size") !== undefined) {
        $sizeClass = "switchery switchery-" + $sizes[$size];
      } else {
        $sizeClass = "switchery";
      }

      $color = $(this).data("color");
      var $colors = {
        primary: "#967ADC",
        success: "#37BC9B",
        danger: "#DA4453",
        warning: "#F6BB42",
        info: "#3BAFDA"
      };
      if ($color !== undefined) {
        $colorCode = $colors[$color];
      } else {
        $colorCode = "#37BC9B";
      }

      var switchery = new Switchery($(this)[0], {
        className: $sizeClass,
        color: $colorCode
      });
    });
  } else {
    var elems1 = document.querySelectorAll(".switchery");

    for (i = 0; i < elems1.length; i++) {
      var $size = elems1[i].data("size");
      var $color = elems1[i].data("color");
      var switchery = new Switchery(elems1[i], {
        color: "#37BC9B"
      });
    }
  }
})(window, document, jQuery);