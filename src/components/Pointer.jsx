import React, { useState } from 'react';

export default function Pointer() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div
      className="pointer-wrap"
      onPointerMove={(e) => {
        setCoords({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div
        className="pointer"
        style={{
          top: coords.y,
          left: coords.x,
        }}
      />
    </div>
  );
}
