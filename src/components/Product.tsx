import { IProduct } from "../models.ts";
import { useState } from "react";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [descr, setDescr] = useState(false);

  const btnClassName = descr ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py-2 px-4 border", btnClassName];
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDescr((prev) => !prev)}
      >
        {descr ? "Hide Details" : "Show Details"}
      </button>

      {descr && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Product;
