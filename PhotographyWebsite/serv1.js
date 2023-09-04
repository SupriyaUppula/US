const buttons = document.querySelectorAll(".see-more-btn");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", function() {
    window.location.href = `another-page-${index + 1}.html`;
  });
});
