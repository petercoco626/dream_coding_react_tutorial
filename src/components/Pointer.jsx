import React from 'react';

export default function Pointer({ coords }) {
  return (
    <div
      className="pointer"
      style={{
        top: coords.y,
        left: coords.x,
      }}
    />
  );
}
