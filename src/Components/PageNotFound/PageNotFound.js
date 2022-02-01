import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return <div>
      <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1">OUPS ! </h1>
          <h1>Cette page n'existe pas :(</h1>
          </div>
      </div>
  </div>;
}
