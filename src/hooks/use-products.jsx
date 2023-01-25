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
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));

    /** return callback function은 해당 component가 unmount가 될때 실행된다. */
    /** dependency에 명시된 값에 변화가 생기면 return함수가 발생한다. 값에 변확가 생겼다는건 해당 컴포넌트가 재랜더링이 됨으로 unmount -> mount되기 때문 */
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);

  return [loading, error, products];
}
