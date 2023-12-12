import { useProducts } from "../hooks/products.ts";
import { useContext } from "react";
import { ModalContext } from "../context/modalContext.tsx";
import { IProduct } from "../models.ts";
import Loader from "../components/Loader.tsx";
import Error from "../components/Error.tsx";
import Product from "../components/Product.tsx";
import Modal from "../components/Modal.tsx";
import CreateProduct from "../components/CreateProduct.tsx";

const ProductsPage = () => {
  const { products, error, loading, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);
  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })
      )}

      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-300 text-white text-2xl px-3 py-1"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};

export default ProductsPage;
