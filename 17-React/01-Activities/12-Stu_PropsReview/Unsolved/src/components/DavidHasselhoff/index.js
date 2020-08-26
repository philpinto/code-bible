import React from "react";
import "./style.css";

function DavidCard() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="DavidHasselhoff"
          src="https://i1.wp.com/metalinjection.net/wp-content/uploads/2019/04/davidhasselhoff.jpg?fit=693%2C444&ssl=1"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> David Hasselhoff
          </li>
          <li>
            <strong>Occupation:</strong> Paleontologist
          </li>
          <li>
            <strong>Location:</strong> Where ever that bone be
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpongeBobCard;
