import { FC, PropsWithChildren, createContext, useContext } from "react";
import { getProducts } from "../services/product.services";
import { Product } from "../types/models";

export interface ProductsContextType {
  products: Product[];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

const ProductProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ products: getProducts() }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;

export const useProductsContext = () => useContext(ProductsContext);
