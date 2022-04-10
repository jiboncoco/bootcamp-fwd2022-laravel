/*=========================================================================================
    File Name: checkbox-radio.js
    Description: Checkbox & Radio buttons with icheck, bootstrap switch & switchery etc..
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, $) {
  'use strict';
  var $html = $('html');

    /*  Checkbox & Radio Styles Starts   */
    $('.colors li').on('click', function() {
      var self = $(this);
      if (!self.hasClass('active')) {
        self.siblings().removeClass('active');

        var skin = self.closest('.skin'),
          color = self.attr('class') ? '-' + self.attr('class') : '',
          checkbox = skin.data('icheckbox'),
          radio = skin.data('iradio'),
          checkbox_default = 'icheckbox_minimal',
          radio_default = 'iradio_minimal';

        if (skin.hasClass('skin-square')) {
          checkbox_default = 'icheckbox_square';
          radio_default = 'iradio_square';
          checkbox === undefined && (checkbox = 'icheckbox_square-red', radio = 'iradio_square-red');
        }

        if (skin.hasClass('skin-flat')) {
          checkbox_default = 'icheckbox_flat';
          radio_default = 'iradio_flat';
          checkbox === undefined && (checkbox = 'icheckbox_flat-green', radio = 'iradio_flat-green');
        }

        if (skin.hasClass('skin-line')) {
          checkbox_default = 'icheckbox_line';
          radio_default = 'iradio_line';
          checkbox === undefined && (checkbox = 'icheckbox_line-blue', radio = 'iradio_line-blue');
        }

        checkbox === undefined && (checkbox = checkbox_default, radio = radio_default);

        skin.find('input, .skin-states .state').each(function() {
          var element = $(this).hasClass('state') ? $(this) : $(this).parent(),
            element_class = element.attr('class').replace(checkbox, checkbox_default + color).replace(radio, radio_default + color);
            /*console.log(element);
            console.log(element_class);*/
          element.attr('class', element_class);
        });

        skin.data('icheckbox', checkbox_default + color);
        skin.data('iradio', radio_default + color);
        self.addClass('active');
      }
    });

    $('.skin-line input').each(function(){
      var self = $(this),
        label = self.next(),
        label_text = label.text();

      label.remove();
      self.iCheck({
        checkboxClass: 'icheckbox_line-blue',
        radioClass: 'iradio_line-blue',
        insert: '<div class="icheck_line-icon"></div>' + label_text
      });
    });
    // Checkbox & Radio 2
    $('.icheck_minimal input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
    });

    // Square Checkbox & Radio
    $('.skin-square input').iCheck({
        checkboxClass: 'icheckbox_square-red',
        radioClass: 'iradio_square-red',
    });
    //Flat Checkbox & Radio
    $('.skin-flat input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
    // Polaris Checkbox & Radio
    $('.skin-polaris input').iCheck({
        checkboxClass: 'icheckbox_polaris',
        radioClass: 'iradio_polaris',
        increaseArea: '-10%'
    });
    // Futurico Checkbox & Radio
    $('.skin-futurico input').iCheck({
        checkboxClass: 'icheckbox_futurico',
        radioClass: 'iradio_futurico',
        increaseArea: '20%'
    });
    /*  Checkbox & Radio Styles Ends   */

     // Switchery
    var i = 0;
      if (Array.prototype.forEach) {

          var elems = $('.switchery');
          $.each(elems, function (key, value) {
              var $size = "",
                  $color = "",
                  $sizeClass = "",
                  $colorCode = "";
              $size = $(this).data('size');
              var $sizes = {
                  'lg': "large",
                  'sm': "small",
                  'xs': "xsmall"
              };
              if ($(this).data('size') !== undefined) {
                  $sizeClass = "switchery switchery-" + $sizes[$size];
              } else {
                  $sizeClass = "switchery";
              }

              $color = $(this).data('color');
              var $colors = {
                  'primary': "#967ADC",
                  'success': "#37BC9B",
                  'danger': "#DA4453",
                  'warning': "#F6BB42",
                  'info': "#3BAFDA"
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
          var elems1 = document.querySelectorAll('.switchery');

          for (i = 0; i < elems1.length; i++) {
              var $size = elems1[i].data('size');
              var $color = elems1[i].data('color');
              var switchery = new Switchery(elems1[i], {
                  color: '#37BC9B'
              });
          }
      }
      /*  Toggle Ends   */


})(window, document, jQuery);