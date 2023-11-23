const toggleButton = document.getElementById('dark');

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});


const favoriteButton = document.getElementById('favoriteButton');
const tap = document.getElementById('favorite-tap');

favoriteButton.addEventListener('click', function () {
    tap.style.display = (tap.style.display === 'none' || tap.style.display === '') ? 'block' : 'none';
});