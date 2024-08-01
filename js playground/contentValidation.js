let hasErrors = false;

const errors = document.querySelectorAll(".error_card.input");
errors.forEach(error => error.textContent = "");

const requestError = document.querySelector("[wized='articleContentErrorDiv']")
requestError.classList.add("hidden")

// Author validation
const authorInput = document.getElementById("articleCreationAuthor");
const authorError = document.getElementById("articleCreationAuthorError");
if (!authorInput.value.trim()) {
    authorError.textContent = "Bitte geben Sie einen Absender an.";
    hasErrors = true;
}

// Header validation
const headerInput = document.getElementById("articleCreationHeader");
const headerError = document.getElementById("articleCreationHeaderError");
if (!headerInput.value.trim()) {
    headerError.textContent = "Bitte geben Sie eine Überschrift an.";
    hasErrors = true;
}

// Content validation
const contentInput = document.getElementById("articleCreationContent");
const contentError = document.getElementById("articleCreationContentError");
if (!contentInput.value.trim()) {
    contentError.textContent = "Bitte liefern Sie den Text für Ihren Artikel.";
    hasErrors = true;
}


// Form submission execute Xano Request
if (!hasErrors) {
    Wized.requests.execute("step2");
}