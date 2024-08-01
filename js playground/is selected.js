<script>
function handlePlanSelection(containerId, btnId) {
    // Remove selected class from all containers
    document.querySelectorAll('.cp-select-crd').forEach(container => {
        container.classList.remove('is-selected');
    });

    // Remove selected class from all labels and reset text
    document.querySelectorAll('.button.is-radio').forEach(label => {
        label.classList.remove('is-selected');
        const span = label.querySelector('.button-radio_text');
        if (span) {
            span.textContent = "Auswählen"; // Reset the text for all labels
        }
    });

    // Add selected class to the container
    const container = document.getElementById(containerId);
    if (container) {
        container.classList.add('is-selected');
    } else {
        console.error(`Container with id="${containerId}" not found.`);
    }

    // Add selected class to the label and change the text
    const label = document.getElementById(btnId);
    if (label) {
        label.classList.add('is-selected');
        const span = label.querySelector('.button-radio_text');
        if (span) {
            span.textContent = "Ausgewählt"; // Change text to indicate selection
        }
    } else {
        console.error(`Label with id="${btnId}" not found.`);
    }
}
</script>