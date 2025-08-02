import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const isFavorite = favorites.includes(Number(id));

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const toggleFavorite = () => {
    setFavorites(prev => {
      const updated = prev.includes(Number(id))
        ? prev.filter(favId => favId !== Number(id))
        : [...prev, Number(id)];

      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{recipe.name}</h2>
        <button
          onClick={toggleFavorite}
          style={{
            fontSize: '1.8rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <img src={recipe.image} alt={recipe.name} />
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>

      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p><strong>Instructions:</strong></p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
