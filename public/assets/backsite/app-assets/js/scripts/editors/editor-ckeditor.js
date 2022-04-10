/*=========================================================================================
    File Name: editor-ckeditor.js
    Description: CKEditor js
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, $) {
  "use strict";

  // Classic Editor
  CKEDITOR.ClassicEditor
		.create( document.querySelector( '#classic-editor' ) )
		.catch( err => {
			console.error( err.stack );
		} );

  // Inline Editor
  CKEDITOR.InlineEditor
		.create( document.querySelector( '#ckeditor-inline' ) )
		.catch( err => {
			console.error( err.stack );
    } );

  // Balloon Editor
  CKEDITOR.BalloonEditor
		.create( document.querySelector( '#balloon-editor' ) )
		.catch( err => {
			console.error( err.stack );
    } );

})(window, document, jQuery);
