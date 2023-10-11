import { Product } from "../types/models";
import { faker } from "@faker-js/faker";

export const getProducts = (): Product[] => {
  //get products from faker
  const products: Product[] = [];
  for (let index = 0; index < 10; index++) {
    //create a product
    const productPrice = Number(faker.commerce.price());
    const product: Product = {
      id: faker.string.uuid(),
      imageUrl: faker.image.urlLoremFlickr({ category: "fashion" }),
      name: faker.commerce.productName(),
      price: productPrice,
      brand: index % 2 == 0 ? "H&M" : "Mango",
      rating: Math.floor(Math.random() * 5),
      discount: productPrice + 400,
      ratingsCount: Math.floor(Math.random() * 1000),
    };
    //Push new products
    products.push(product);
  }

  return products;
};
