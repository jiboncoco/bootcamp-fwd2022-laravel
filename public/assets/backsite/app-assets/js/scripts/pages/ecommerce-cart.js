// Shopping Cart 

$(document).ready(function() {
	$(".touchspin").TouchSpin({ min: 1, max: 10});

	$(".use-bill-address").click(function() {
		console.log('clicked');
	});
});

(function() {
	'use strict';

	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');

		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();