// Infinite Carousel Animation with Fading Images
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carouselTrack');
    
    if (track) {
        // Clone the cards multiple times for seamless infinite scroll
        const originalCards = Array.from(track.children);
        const cards = track.innerHTML;
        // Repeat cards 8 times to ensure smooth infinite scrolling
        track.innerHTML = cards + cards + cards + cards + cards + cards + cards + cards;
        
        // Get all cards after cloning
        const allCards = Array.from(track.querySelectorAll('.carousel-card'));
        
        // Function to toggle between before/after images
        function animateCard(card) {
            // Random delay between 0-2 seconds
            const randomDelay = Math.random() * 2000;
            
            setTimeout(() => {
                setInterval(() => {
                    card.classList.toggle('show-after');
                }, 1500); // Toggle every 1.5 seconds
            }, randomDelay);
        }
        
        // Start animation for each card
        allCards.forEach(card => {
            animateCard(card);
        });
    }
    
    // App Store link - will be updated later
    const appStoreLink = document.getElementById('appStoreLink');
    if (appStoreLink) {
        appStoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('App Store link will be added once the app is live!');
        });
    }
});
