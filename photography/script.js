var contactButton = document.querySelector('.contact-button');
var popupFormWrapper = document.querySelector('.popup-form-wrapper');
var popupForm = document.querySelector('.popup-form');
var closeFormButton = document.querySelector('.popup-form .close-button');
var popupMessageWrapper = document.querySelector('.popup-message-wrapper');
var popupMessage = document.querySelector('.popup-message');
var closeMessageButton = document.querySelector('.popup-message .close-button');

// Open the popup form when the contact button is clicked
contactButton.addEventListener('click', function() {
    popupFormWrapper.style.display = 'flex';
});

// Close the popup form when the close button is clicked
closeFormButton.addEventListener('click', function(event) {
  event.preventDefault();
  popupFormWrapper.style.display = 'none';
});

// Submit the form when the submit button is clicked
popupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Do some form validation here if necessary
    // Display the popup message
    popupMessageWrapper.style.display = 'flex';
    // Hide the form
    popupFormWrapper.style.display = 'none';
});
  // Close the popup message when the close button is clicked
  closeMessageButton.addEventListener('click', function(event) {
    event.preventDefault();
    popupMessageWrapper.style.display = 'none';
});




const knowMoreBtn = document.getElementById("know-more-btn");
const additionalInfo = document.getElementById("additional-info");

knowMoreBtn.addEventListener("click", function() {
  if (additionalInfo.style.display === "none") {
    additionalInfo.style.display = "block";
    knowMoreBtn.innerHTML = "Show Less";
  } else {
    additionalInfo.style.display = "none";
    knowMoreBtn.innerHTML = "Know More";
  }
});

