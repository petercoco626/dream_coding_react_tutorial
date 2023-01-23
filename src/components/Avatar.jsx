import React from 'react';

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <div className="image-wrap">
        <img className="image" src={image} alt="" />
        {isNew && <span className="new-member">NEW</span>}
      </div>
    </div>
  );
}
