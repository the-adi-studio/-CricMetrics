document.addEventListener('DOMContentLoaded', () => {
    // 1. Core DOM Selections Node Map
    const filterButtons = document.querySelectorAll('.filter-btn');
    const playerCards = document.querySelectorAll('.player-card');
    const celebrationButtons = document.querySelectorAll('.celebration-btn');
    
    const modalOverlay = document.getElementById('moment-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    const modalImg = document.getElementById('modal-img');
    const modalMomentTitle = document.getElementById('modal-moment-title');
    const modalPlayerTitle = document.getElementById('modal-player-title');
    const modalStadium = document.getElementById('modal-stadium');
    const modalAgainst = document.getElementById('modal-against');
    const modalSeries = document.getElementById('modal-series');

    // 2. Real-Time Dynamic List Array Filter Logic
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedRole = button.getAttribute('data-role');
            
            playerCards.forEach(card => {
                if (selectedRole === 'all' || card.classList.contains(selectedRole)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 20);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px) scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 250);
                }
            });
        });
    });

    // 3. Modal Parameter Routing Pipeline Engine (Popup View Trigger)
    celebrationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Traverse up DOM trees to pull core player details safely
            const parentCard = btn.closest('.player-card');
            const playerName = parentCard.getAttribute('data-name');
            
            // Extract analytical dataset configuration maps straight from element attributes
            const celebrationImage = btn.getAttribute('data-celebration-img');
            const momentTitle = btn.getAttribute('data-moment');
            const venueStadium = btn.getAttribute('data-stadium');
            const opponentTeam = btn.getAttribute('data-against');
            const seriesName = btn.getAttribute('data-series');

            // Inject dataset properties directly into corresponding Modal viewport elements
            modalPlayerTitle.textContent = playerName;
            modalImg.src = celebrationImage;
            modalImg.alt = `${playerName} Celebration`;
            modalMomentTitle.textContent = momentTitle;
            modalStadium.textContent = venueStadium;
            modalAgainst.textContent = opponentTeam;
            modalSeries.textContent = seriesName;

            // Launch modal display overlay viewport container states
            modalOverlay.classList.add('active');
        });
    });

    // 4. Modal Structural Close Termination Mechanics
    const terminateModalView = () => { modalOverlay.classList.remove('active'); };
    closeModalBtn.addEventListener('click', terminateModalView);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) terminateModalView(); });
});