import Product from "./components/Product.tsx";
import { IProduct } from "./models.ts";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const responce = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products",
      );
      setProducts(responce.data);
      setLoading(false);
    } catch (e: unknown) {
      setLoading(false);
      const error = e as AxiosError;
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : (
        products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      )}
    </div>
  );
}

export default App;
