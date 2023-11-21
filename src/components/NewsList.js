import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css';

const NewsList = ({ news, onNewsClick }) => {
  return (
    <ul className="book-list">
      {news.map((news) => (
        <li key={news.id}>
          <div className="news-item" onClick={() => onNewsClick(news.id)}>
            <h3>{news.title}</h3>
            <p>{news.author}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onBookClick: PropTypes.func.isRequired,
};

export default NewsList;
