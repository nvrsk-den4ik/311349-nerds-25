var link = document.querySelector(".contacts-feedback");
var popup = document.querySelector(".modal-map-contact");
var feedbackModal = popup.querySelector(".modal-message");
var form = popup.querySelector("form");
var messageName = popup.querySelector("#message-name");
var messageEmail = popup.querySelector("#message-email");
var messageText = popup.querySelector("#message-text");
var close = popup.querySelector(".modal-close");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("message-name");
	storage = localStorage.getItem("message-email");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	messageName.focus();
});

close.addEventListener("click", function (evt) {   
	evt.preventDefault();
	popup.classList.remove("modal-show");
	feedbackModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			feedbackModal.classList.remove("modal-error");
		}
	}
});

form.addEventListener("submit", function (evt) {
	if (!messageName.value || !messageEmail.value || !messageText.value) {
		evt.preventDefault();
		feedbackModal.classList.remove("modal-error");
		feedbackModal.offsetWidth = feedbackModal.offsetWidth;
		feedbackModal.classList.add("modal-error");
	} else { 
		if (isStorageSupport){
			localStorage.setItem("message-name", messageName.value);
			localStorage.setItem("message-email", messageEmail.value);
		}
	}
});