document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion_button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Toggle active state for clicked button
      button.classList.toggle("active");

      // Toggle visibility of the corresponding content
      const content = button.nextElementSibling;
      if (content.classList.contains("show")) {
        content.classList.remove("show");
      } else {
        // Hide all content sections first
        document
          .querySelectorAll(".accordion_content")
          .forEach((item) => item.classList.remove("show"));
        content.classList.add("show");
      }
    });
  });
});
