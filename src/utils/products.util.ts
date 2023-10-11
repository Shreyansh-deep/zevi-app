import { Product } from "../types/models";

export const getTrendingProducts = (products: Product[]) => products.sort((a, b) => b.rating - a.rating).slice(0,5)

export const getSearchedProducts = (products: Product[]) => products.slice(0,10)  

export const isProductFavorite = (id: string, favorites: string[]) => favorites.includes(id)
