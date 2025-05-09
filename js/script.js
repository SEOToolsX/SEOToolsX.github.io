// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Tool data - you can expand this with all your tools
    const toolsData = [
        {
            name: "Keyword Research",
            description: "Find the best keywords for your content",
            link: "tools/keyword-research.html",
            icon: "🔍",
            category: "research"
        },
        {
            name: "Backlink Checker",
            description: "Analyze your website's backlinks",
            link: "tools/backlink-checker.html",
            icon: "🔗",
            category: "analysis"
        },
        {
            name: "Website Analyzer",
            description: "Complete website SEO analysis",
            link: "tools/website-analyzer.html",
            icon: "📊",
            category: "analysis"
        },
        {
            name: "Meta Tag Generator",
            description: "Generate perfect meta tags",
            link: "tools/meta-tag-generator.html",
            icon: "🏷️",
            category: "generators"
        },
        // Add more tools as needed
    ];
    
    // Populate all tools section
    const allToolsSection = document.querySelector('.all-tools-list');
    
    toolsData.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'tool-item';
        toolElement.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-info">
                <h3><a href="${tool.link}">${tool.name}</a></h3>
                <p>${tool.description}</p>
            </div>
        `;
        allToolsSection.appendChild(toolElement);
    });
    
    // Search functionality would go here
});
