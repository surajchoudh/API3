
document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.getElementById('character-list');

    // Fetch data from the provided API
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const characters = data.results;
            characters.forEach(character => {
                const li = document.createElement('li');
                li.textContent = character.name;
                characterList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error.message));
});