// character.js
const params = new URLSearchParams(window.location.search);
const charId = params.get('id');
const detailDiv = document.getElementById('characterDetail');

async function fetchCharacterDetails() {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
  const data = await res.json();
  const episodes = data.episode.map(ep => `<li>${ep.split('/').pop()}</li>`).join('');

  detailDiv.innerHTML = `
    <img src="${data.image}" alt="${data.name}" />
    <h2>${data.name}</h2>
    <p>Status: ${data.status}</p>
    <p>Species: ${data.species}</p>
    <p>Type: ${data.type || 'Unknown'}</p>
    <p>Gender: ${data.gender}</p>
    <p>Origin: ${data.origin.name}</p>
    <p>Location: ${data.location.name}</p>
    <p>Episodes (${data.episode.length}): <ul>${episodes}</ul></p>
  `;
}
fetchCharacterDetails();

setInterval(() => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  document.getElementById('clock').textContent = `${timeStr} ${dateStr}`;
}, 1000);
