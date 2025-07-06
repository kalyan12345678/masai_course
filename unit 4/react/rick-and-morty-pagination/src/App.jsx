import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const currentPage = useRef(1);

  useEffect(() => {
    fetchCharacters(currentPage.current);
  }, []);

  const fetchCharacters = async (page) => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const handlePageChange = (pageNum) => {
    currentPage.current = pageNum;
    fetchCharacters(pageNum);
  };

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>

      <div className="character-grid">
        {characters.map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages).keys()].map((num) => {
          const page = num + 1;
          return (
            <button
              key={page}
              className={`page-btn ${currentPage.current === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
