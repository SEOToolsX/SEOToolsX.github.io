// Keyword Density Checker
function analyzeText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const words = inputText.match(/\b\w+\b/g) || [];
    const wordCount = words.length;

    const wordFrequency = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    let resultHTML = `Keyword Frequency:\n\n`;
    for (const [word, frequency] of Object.entries(wordFrequency)) {
        resultHTML += `${word}: ${frequency} times (${((frequency / wordCount) * 100).toFixed(2)}%)\n`;
    }

    document.getElementById('result').innerText = resultHTML;
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

// Copy Functionality
function copyResult(elementId) {
    const resultElement = document.getElementById(elementId);
    const textToCopy = resultElement.innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => alert("Copied to clipboard!"))
        .catch(() => alert("Failed to copy!"));
}
