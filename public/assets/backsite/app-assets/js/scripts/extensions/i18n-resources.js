/*=========================================================================================
    File Name: resources.js
    Description: internationalization library translate using resources
    --------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


$(document).ready(function () {

  /**********************************************
  *           Translate Using Resources         *
  **********************************************/

  i18next.addResourceBundle('en_p', 'translation', {
    key: "At ourselves direction believing do he departure. Celebrated her had sentiments understood are projection set. Possession ye no mr unaffected remarkably at. Wrote house in never fruit up. Pasture imagine my garrets an he. However distant she request behaved see nothing. Talking settled at pleased an of me brother weather."
  });

  i18next.addResourceBundle('fr_p', 'translation', {
    key: "À nous-mêmes la direction croyant qu'il part. Célébrée ses sentiments avaient compris sont ensemble de projection. Possession ye no mr unffected remarquablement à. Écrit la maison dans jamais les fruits vers le haut. Pâturage imaginez mes guêtres et lui. Quelle que soit sa distance, elle se demande de ne rien voir. Parler réglé au plaisir d'un de mes frères temps."
  });

  i18next.addResourceBundle('pt_p', 'translation', {
    key: "Em nós mesmos, acreditando que ele partiria. Celebrava seus sentimentos compreendidos eram projeção ajustada. Possessão ye não mr afetado notavelmente em. Escreveu casa em nunca frutificar. Pasture imagine meus garrets um ele. Por mais distante que ela se comportasse, não via nada. Falando resolvido em um prazer de meu tempo irmão."
  });

  i18next.addResourceBundle('de_p', 'translation', {
    key: "An uns selbst gerichtet glaubt er den Abgang. Gefeiert, dass sie Gefühle verstanden hatte, sind Projektionssätze. Besitzt du nicht Herr unberührt bemerkenswert an. Schrieb Haus in nie Früchte. Weide stell dir meine Mansarden vor und er. Wie fern sie sich auch benahm, sieh nichts. Das Reden beruhigte sich bei erfreutem Wetter meines Bruders."
  });


  // Navbar Language Click Event
  $('#lng-resources').on('click', '.lng-nav li a', function () {
    var $this = $(this);
    var selected_lng = $this.data('lng');

    // Change language
    i18next.changeLanguage(selected_lng, function (err, t) {
      // resources have been loaded
      $('.translate-text').localize();
    });

    // Set Active Class in navigation
    $this.parent('li').siblings('li').children('a').removeClass('active');
    $this.addClass('active');

    // Change lang in dropdown
    $('#lng-resources').find('.lng-dropdown .dropdown-menu a').removeClass('active');
    var drop_lng = $('#lng-resources').find('.lng-dropdown .dropdown-menu a[data-lng="' + selected_lng + '"]').addClass('active');
    $('#lng-resources #dropdown-active-item').html(drop_lng.html());
  });


  // Dropdown Language Change Event
  $('#lng-resources').on('click', '.lng-dropdown .dropdown-menu a', function () {
    var $this = $(this);
    var selected_lng = $this.data('lng');

    // Change language
    i18next.changeLanguage(selected_lng, function (err, t) {
      // resources have been loaded
      $('.translate-text').localize();
    });

    // Set Active Class in navigation
    $('#lng-resources .lng-nav li a').removeClass('active');
    $('#lng-resources .lng-nav li a[data-lng="' + selected_lng + '"]').addClass('active');

    // Change lang in dropdown
    $('#lng-resources').find('.lng-dropdown .dropdown-menu a').removeClass('active');
    $this.addClass('active');
    $('#lng-resources #dropdown-active-item').html($this.html());
  });

});
