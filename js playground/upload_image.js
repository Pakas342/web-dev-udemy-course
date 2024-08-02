function setupImageInput(imageInput) {
    const container = imageInput.closest('.image-input-container');
    const uploadButton = container.querySelector('.button.is-outline');
    const removeButton = container.querySelector('.button.is-remove');

    function formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' bytes';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
        else return (bytes / 1048576).toFixed(2) + ' MB';
    }

    uploadButton.addEventListener('click', (e) => {
        e.preventDefault();
        imageInput.click();
    });

    imageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const infoTextContent = file.name + " (" + formatFileSize(file.size) + ")";
            removeButton.textContent = infoTextContent;
            uploadButton.classList.add('hidden');
            removeButton.classList.remove('hidden');
        }
    });

    removeButton.addEventListener('click', (e) => {
        e.preventDefault();
        imageInput.value = '';
        removeButton.classList.add('hidden');
        uploadButton.classList.remove('hidden');
    });
}

document.querySelectorAll('input[type="file"][accept="image/*"]').forEach(setupImageInput);
