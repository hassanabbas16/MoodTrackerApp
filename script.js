document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    // Hide input container and show mood cards
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.style.transition = 'opacity 1s, transform 1s';
    inputContainer.style.opacity = 0;
    inputContainer.style.transform = 'scale(0.9)';

    setTimeout(() => {
        inputContainer.classList.add('hidden');
        showMoodCards();
    }, 1000);
});

function showMoodCards() {
    const moodCardsContainer = document.getElementById('moodCardsContainer');
    moodCardsContainer.classList.remove('hidden');

    const moods = ['happy', 'sad', 'excited', 'angry'];
    const moodCards = moods.map(mood => {
        const card = document.createElement('div');
        card.classList.add('mood-card');
        card.dataset.mood = mood;
        card.innerHTML = `<h3>${capitalize(mood)}</h3>`;
        card.addEventListener('click', () => selectMood(mood));
        return card;
    });

    // Append mood cards to the container
    moodCards.forEach(card => moodCardsContainer.appendChild(card));
}

function selectMood(mood) {
    const greeting = `Hello! You're feeling ${mood}!`;
    let suggestion = '';
    let backgroundImage = '';

    switch (mood) {
        case 'happy':
            suggestion = 'You seem to be in a great mood! Spread the joy!';
            backgroundImage = 'url("assets/happy.jpg")';
            break;
        case 'sad':
            suggestion = 'Don’t worry, tomorrow is a new day.';
            backgroundImage = 'url("assets/sad.jpeg")';
            break;
        case 'excited':
            suggestion = 'Your excitement is contagious!';
            backgroundImage = 'url("assets/excited.jpg")';
            break;
        case 'angry':
            suggestion = 'Take deep breaths, things will calm down.';
            backgroundImage = 'url("assets/angry.jpg")';
            break;
    }

    // Change the background image
    document.body.style.backgroundImage = backgroundImage;

    // Display the greeting and suggestion
    document.getElementById('greeting').innerText = greeting;
    document.getElementById('suggestions').innerText = suggestion;

    // Transition out mood cards and show the glass morph box
    const moodCardsContainer = document.getElementById('moodCardsContainer');
    moodCardsContainer.style.opacity = 0;

    setTimeout(() => {
        moodCardsContainer.classList.add('hidden');
        document.getElementById('outputSection').classList.remove('hidden');
    }, 1000);
}

// Utility function to capitalize mood names
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
