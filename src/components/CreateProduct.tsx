import { useState } from "react";
import * as React from "react";
import { IProduct } from "../models.ts";
import axios from "axios";
import Error from "./Error.tsx";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProduct {
  onCreate: (product: IProduct) => void;
}
const CreateProduct = ({ onCreate }: CreateProduct) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter value title.");
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData,
    );

    onCreate(response.data);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-4 w-full outline-0"
        placeholder="Enter product titile..."
        value={value}
        onChange={changeHandler}
      />

      {error && <Error error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-300 hover:text-blue-400"
      >
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
