import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('๐ฅ๋จ๋ํ ๋ฐ์ดํฐ๋ฅผ ๋คํธ์ํฌ์์ ๋ฐ์์ด');
        setProducts(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));

    /** return callback function์ ํด๋น component๊ฐ unmount๊ฐ ๋ ๋ ์คํ๋๋ค. */
    /** dependency์ ๋ช์๋ ๊ฐ์ ๋ณํ๊ฐ ์๊ธฐ๋ฉด returnํจ์๊ฐ ๋ฐ์ํ๋ค. ๊ฐ์ ๋ณํ๊ฐ ์๊ฒผ๋ค๋๊ฑด ํด๋น ์ปดํฌ๋ํธ๊ฐ ์ฌ๋๋๋ง์ด ๋จ์ผ๋ก unmount -> mount๋๊ธฐ ๋๋ฌธ */
    return () => {
      console.log('๐งน ๊นจ๋ํ๊ฒ ์ฒญ์ํ๋ ์ผ๋ค์ ํฉ๋๋ค.');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
