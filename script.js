// Keyword Density Checker
function analyzeText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const words = inputText.match(/\b\w+\b/g) || [];
    const wordCount = words.length;

    const wordFrequency = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    let resultHTML = `<h3>Keyword Frequency:</h3>`;
    for (const [word, frequency] of Object.entries(wordFrequency)) {
        resultHTML += `<p>${word}: ${frequency} times (${((frequency / wordCount) * 100).toFixed(2)}%)</p>`;
    }

    document.getElementById('result').innerHTML = resultHTML;
}

// Meta Tag Generator
function generateMetaTags() {
    const title = document.getElementById('metaTitle').value;
    const description = document.getElementById('metaDescription').value;

    const metaTags = `
        <meta name="title" content="${title}">
        <meta name="description" content="${description}">
    `;

    document.getElementById('metaTagsResult').innerText = metaTags;
}

// Content Idea Generator
const contentIdeas = [
    "10 Tips for Better SEO",
    "How to Improve Website Speed",
    "Top 5 Tools for Digital Marketing",
    "Beginner's Guide to Keyword Research"
];

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * contentIdeas.length);
    document.getElementById('contentIdea').innerText = contentIdeas[randomIndex];
      }
