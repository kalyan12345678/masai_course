// script.js
const gallery = document.getElementById('characterGallery');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentPage = 1;

async function fetchCharacters(page = 1) {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await res.json();
  gallery.innerHTML = data.results.map(char => `
    <div class="card">
      <a href="character.html?id=${char.id}" target="_blank">
        <img src="${char.image}" alt="${char.name}" />
        <h3>${char.name}</h3>
        <p>${char.species}</p>
        <p>Status: ${char.status}</p>
      </a>
    </div>
  `).join('');
}

nextBtn.onclick = () => { currentPage++; fetchCharacters(currentPage); };
prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; fetchCharacters(currentPage); } };

fetchCharacters();

setInterval(() => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  document.getElementById('clock').textContent = `${timeStr} ${dateStr}`;
}, 1000);