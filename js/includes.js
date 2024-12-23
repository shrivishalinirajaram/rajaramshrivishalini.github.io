function loadHTML(selector, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load " + file);
      return response.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(error => console.error(error));
}

// Load header and footer
// loadHTML('#header', 'header.html');
// loadHTML('#footer', 'footer.html');
//
