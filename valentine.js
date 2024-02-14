function openEnvelope() {
    var envelope = document.getElementById('envelope');
    envelope.style.animation = 'openEnvelope 1s ease forwards'; // Trigger CSS animation to open the envelope
    
    setTimeout(function() {
        // Create and animate love hearts
        for (var i = 0; i < 10; i++) {
            createHeart();
        }
    }, 1000); // Wait for 1 second before creating hearts
}

function createHeart() {
    var heart = document.createElement('div');
    heart.classList.add('heart');
    
    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);
    
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(function() {
        heart.remove(); // Remove the heart after animation ends
    }, 1000); // Heart animation duration
}
