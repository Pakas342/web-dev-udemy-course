function addBorderOnClick() {
  // Get all elements with class "category-radio-button-wrapper"
  const wrappers = document.querySelectorAll('.category-radio-button-wrapper');

  // Iterate over each wrapper and add a click event listener
  wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function(event) {
      // Remove border from all elements with class "category-radio-button-wrapper"
      document.querySelectorAll('.category-radio-button-wrapper').forEach(wrapper => {
        wrapper.style.borderColor = ''; // Reset border color
      });
      
      // Add border to the clicked element
      this.style.border = '2px solid #005491';
    });
  });
}

// Call the function to add event listeners
addBorderOnClick();


// Call the function to add event listeners
addRedBorderOnClick();