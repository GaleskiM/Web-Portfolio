document.addEventListener("DOMContentLoaded", function() {
    // Email button click event
    const emailButton = document.getElementById("emailButton");
    if (emailButton) {
      emailButton.addEventListener("click", function() {
        window.location.href = "mailto:megangaleski@gmail.com";
      });
    }
  
    // LinkedIn button click event
    const linkedInButton = document.getElementById("linkedInButton");
    if (linkedInButton) {
      linkedInButton.addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/megan-galeski-4008822a7", "_blank");
      });
    }
  
    // Library Project button click event
    const libraryProjectButton = document.getElementById("libraryProjectButton");
    if (libraryProjectButton) {
      libraryProjectButton.addEventListener("click", function() {
        window.open("https://galeskim.github.io/Personal-Library/", "_blank");
      });
    }
  });
