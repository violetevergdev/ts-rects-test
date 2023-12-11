import { gql, useQuery } from "@apollo/client";
import Product from "./components/Product.tsx";
import { IProduct } from "./models.ts";

const PRODUCTS = gql`
  query ExampleQuery {
    products {
      id
      title
      price
      description
      category
      image
      rating {
        rate
        count
      }
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(PRODUCTS);
  console.log(loading);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {data?.products?.map((product: IProduct) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default App;
