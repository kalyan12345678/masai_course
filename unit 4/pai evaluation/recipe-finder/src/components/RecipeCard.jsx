import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe, isFavorite, toggleFavorite }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="card-link">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <div className="recipe-info">
          <h3 className="recipe-title">{recipe.name}</h3>
          <p className="recipe-cuisine">Cuisine: {recipe.cuisine}</p>
        </div>
      </Link>

      <button
        className="fav-icon"
        onClick={() => toggleFavorite(recipe.id)}
        aria-label="Toggle Favorite"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default RecipeCard;
