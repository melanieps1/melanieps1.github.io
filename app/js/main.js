var submitBtn = document.getElementsByClassName('submitBtn').disabled = true;
var formEmail = document.getElementById('formEmail');

document.onreadystatechange = function() {
	if (document.readyState === "interactive") {
		formEmail.addEventListener("blur", contactSubmit);
	}
};

function contactSubmit(submitBtn) {
	if (formName !== '' && formEmail !== '') {
		disabled = false;
	} else {
		disabled = true;
	}
}