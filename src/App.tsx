import Product from "./components/Product.tsx";
import { IProduct } from "./models.ts";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const responce = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products",
    );
    setProducts(responce.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      )}
    </div>
  );
}

export default App;
