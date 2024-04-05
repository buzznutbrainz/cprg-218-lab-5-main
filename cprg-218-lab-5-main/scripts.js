document.addEventListener('DOMContentLoaded', () => {
  // Function to navigate to the specified path
  const navigateTo = (path) => {
    window.location.href = path;
  };

  // Function to add click event listeners to buttons, navigating to the specified path when clicked
  const addButtonListener = (buttonId, path) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => navigateTo(path));
    } else {
      console.error(`Button with ID ${buttonId} not found.`);
    }
  };

  // Adding listeners to buttons, with paths for each card type or external link for the UNO rules
  addButtonListener('skip-info-button', 'cardDetails/skipCard.html');
  addButtonListener('reverse-info-button', 'cardDetails/reverseCard.html');
  addButtonListener('draw-info-button', 'cardDetails/drawCard.html');
  // Directly pointing to the official UNO rules website for uno-rules-button
  addButtonListener('uno-rules-button', 'https://www.letsplayuno.com/support/rules.html');
});
