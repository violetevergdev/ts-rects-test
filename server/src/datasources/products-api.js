import { RESTDataSource } from "@apollo/datasource-rest";

class ProductsAPI extends RESTDataSource {
  baseURL = "https://fakestoreapi.com/";
  getProducts() {
    return this.get("products");
  }
}

export default ProductsAPI;
