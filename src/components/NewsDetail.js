// BookDetail.js
import React from 'react';
import './BookDetail.css';

const NewsDetail = ({ news }) => {
  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsDetail;
