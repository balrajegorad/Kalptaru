import React from 'react';
import './PageHeader.css';

export default function PageHeader({ title, description }) {
  return (
    <div className="page-header">
      <div className="container page-header__inner">
        <h1 className="page-header__title">{title}</h1>
        <p className="page-header__desc">{description}</p>
      </div>
      <div className="page-header__circle"></div>
    </div>
  );
}
