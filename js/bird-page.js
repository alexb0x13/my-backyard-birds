let birdsContent = null;

async function loadAllBirdsContent() {
    if (birdsContent) return birdsContent;
    
    try {
        console.log('Fetching birds content...');
        const response = await fetch('../content/birds-content.json');
        if (!response.ok) {
            throw new Error(`Failed to load birds content: ${response.status} ${response.statusText}`);
        }
        birdsContent = await response.json();
        console.log('Birds content loaded successfully');
        console.log('Available bird IDs:', Object.keys(birdsContent));
        return birdsContent;
    } catch (error) {
        console.error('Error loading birds content:', error);
        return {};
    }
}

async function loadBirdPage() {
    // Get the bird ID from the current URL
    const birdId = window.location.pathname.split('/').pop().replace('.html', '');
    console.log('Current bird ID:', birdId);
    
    try {
        const content = await loadAllBirdsContent();
        console.log('Looking for bird data with ID:', birdId);
        const birdData = content[birdId];
        
        if (birdData) {
            console.log('Found bird data:', birdData.title);
            // Update the page title and header
            document.title = `${birdData.title} - My Backyard Birds`;
            document.querySelector('.bird-header h1').textContent = birdData.title;
            document.querySelector('.subtitle').textContent = birdData.scientificName || '';
            
            // Update the content
            const articleElement = document.querySelector('.bird-description');
            articleElement.innerHTML = ''; // Clear existing content
            
            // Add the full content
            if (birdData.fullContent) {
                const paragraphs = birdData.fullContent.split('\n\n');
                paragraphs.forEach(paragraph => {
                    if (paragraph.trim()) {
                        const p = document.createElement('p');
                        p.textContent = paragraph;
                        articleElement.appendChild(p);
                    }
                });
            }
        } else {
            console.error('Bird data not found for ID:', birdId);
            console.log('Available IDs:', Object.keys(content));
        }
    } catch (error) {
        console.error('Error loading bird page:', error);
    }
}
