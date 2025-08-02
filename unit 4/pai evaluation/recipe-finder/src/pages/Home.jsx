import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes')
      .then(res => setRecipes(res.data.recipes))
      .catch(err => console.error(err));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const filteredRecipes = showFavoritesOnly
    ? recipes.filter(recipe => favorites.includes(recipe.id))
    : recipes;

  return (
    <div style={{ padding: '1rem' }}>
      <button
        onClick={() => setShowFavoritesOnly(prev => !prev)}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        {showFavoritesOnly ? 'Show All Recipes' : 'Show Favorites Only'}
      </button>

      <div className="recipe-grid">
        {filteredRecipes.length === 0 ? (
          <p>No recipes to show.</p>
        ) : (
          filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              toggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
