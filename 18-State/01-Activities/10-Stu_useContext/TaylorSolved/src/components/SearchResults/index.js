import React, { useContext } from "react";
import "./style.css";
import ArticleContext from "../../utils/ArticleContext";

function SearchResults() {
  const { title, description, url } = useContext(ArticleContext);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={url}>{url}</a>
      </li>
    </ul>
  );
}

export default SearchResults;
