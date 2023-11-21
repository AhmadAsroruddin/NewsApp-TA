// BookListPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewsListPage.css';

const NewsListPage = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchDefaultNews = async () => {
      try {
        const response = await fetch(
          'https://api.thenewsapi.com/v1/news/top?api_token=nW9jHTsnMOCmdgp4P2CJfTG0tzu40rmpQcD2GIkc&locale=us'
        );
        const data = await response.json();
        setNews(data.data); // Change to data.data to access the array of news items
      } catch (error) {
        console.error('Error fetching default news:', error);
      }
    };

    fetchDefaultNews();
  }, []);

  const searchNews = async () => {
    try {
      const response = await fetch(
        `https://api.thenewsapi.com/v1/news/top?api_token=nW9jHTsnMOCmdgp4P2CJfTG0tzu40rmpQcD2GIkc&search=${query}`
      );
      const data = await response.json();
      setNews(data.data); // Change to data.data to access the array of news items
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchNews();
  };

  return (
    <div>
      <h1>News List</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search News:
          <input type="text" value={query} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="news-container">
        {news.map((article) => (
          <div key={article.uuid} className="book-item">
            <div className="book-details">
              <h2>
                <Link to={`/news/${article.uuid}`}>{article.title}</Link>
              </h2>
              <p className="author-names">
                {article.source}
              </p>
              <p className="book-description">{article.description}</p>
            </div>
            <div className="book-cover">
              <img
                src={article.image_url}
                alt={article.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsListPage;
