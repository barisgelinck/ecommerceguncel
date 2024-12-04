import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/ProductService';
//srcye çekince düzeldi .. atınca

function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data); //kontrol edilcek
    };
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.ProductID}>{product.ProductName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
