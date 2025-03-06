// Function to scroll to a specific bird card
function scrollToBirdCard() {
    const hash = window.location.hash.slice(1); // Remove the # from the hash
    if (!hash) return;
    
    console.log('Looking for bird card:', hash);
    const cardLink = document.querySelector(`a[href="birds/${hash}.html"]`);
    if (cardLink) {
        console.log('Found bird card, scrolling...');
        cardLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a highlight effect
        cardLink.style.transition = 'background-color 0.5s';
        cardLink.style.backgroundColor = '#fff3cd';
        setTimeout(() => {
            cardLink.style.backgroundColor = '';
        }, 2000);
    } else {
        console.log('Bird card not found for hash:', hash);
    }
}

// Initialize when the page loads
window.addEventListener('load', scrollToBirdCard);
// Also handle hash changes
window.addEventListener('hashchange', scrollToBirdCard);
