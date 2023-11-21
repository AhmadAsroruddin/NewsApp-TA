// BookDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './NewsDetailPage.css';

const NewsDetailPage = () => {
  const [news, setNews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await fetch(`https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=nW9jHTsnMOCmdgp4P2CJfTG0tzu40rmpQcD2GIkc`);
        if (!response.ok) {
          throw new Error(`Failed to fetch news details for ID: ${id}`);
        }

        const data = await response.json();

        setNews(data);
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    fetchNewsDetails();
  }, [id]);

  const renderValue = (value) => (value ? value : '-');

  return (
    <div>
      <h3>News Detail</h3>
      <Link to="/news" className="back-button">Back to News</Link>
      <h3></h3>
      {news && (
        <div className="news-details">
          <h2>{news.title}</h2>
          <div className="news-image">
            <img src={news.image_url} alt={news.title} />
          </div>
          <div className="details-container">
            <p><span>Description</span>: {renderValue(news.description)}</p>
            <p><span>Source</span>: {renderValue(news.source)}</p>
            <p><span>Published Date</span>: {renderValue(news.published_at)}</p>
            {/* Add other details based on the response structure */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetailPage;
