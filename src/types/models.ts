export interface Product {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    rating: number;
    brand: string;
    discount: number;
    ratingsCount: number;
}

export interface User {
    wishlist: string[];
}
