import React, { useEffect, useState } from 'react';
// import useProducts from '../hooks/use-products';

import { useQuery } from '@tanstack/react-query';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  // const [loading, error, products] = useProducts({ salesOnly: checked });

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], async () => {
    return fetch(`data/products.json`).then((res) => res.json());
  });

  const handleChange = () => setChecked((prev) => !prev);
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Sale items</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
