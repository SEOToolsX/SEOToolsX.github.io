// Using CORS proxy (create free account at https://cors-anywhere.herokuapp.com/)
fetch(`https://cors-anywhere.herokuapp.com/${url}`)
  .then(response => response.text())
  .then(html => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const title = doc.querySelector('title')?.innerText;
    const description = doc.querySelector('meta[name="description"]')?.content;
    // Display results...
  });
