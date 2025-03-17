import React from "react";
import "./Cards.css";

// Card Component
const Cards = ({
  imageSrc,
  altText,
  tagClass,
  tagName,
  title,
  description,
  userImage,
  userName,
  timeAgo,
}) => (
  <div className="card">
    <div className="card-header">
      <img src={imageSrc} alt={altText} />
    </div>
    <div className="card-body">
      <span className={`tag ${tagClass}`}>{tagName}</span>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="user">
        <img src={userImage} alt="user" />
        <div className="user-info">
          <h5>{userName}</h5>
          <small>{timeAgo}</small>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
