import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error('Error fetching todos:', err));
  }, []);

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const startIndex = (currentPage - 1) * todosPerPage;
  const currentTodos = todos.slice(startIndex, startIndex + todosPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="App">
      <h1>Todos Pagination</h1>

      <ul className="todo-list">
        {currentTodos.map(todo => (
          <li key={todo.id}>
            <span>{todo.id}. </span>
            {todo.title}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>

        {[...Array(totalPages).keys()].map((_, idx) => {
          const page = idx + 1;
          return (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
