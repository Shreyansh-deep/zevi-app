import { FC } from "react";
import { Product } from "src/types/models";
import "./card.styles.scss";
import { Rating } from "react-simple-star-rating";
import { useUserContext } from "src/providers/user.provider";
import Heart from "react-animated-heart";
import { isProductFavorite } from "src/utils/products.util";

interface Props {
  product: Product;
}

const CardComponent: FC<Props> = ({ product }) => {
  const { favorites, updateFavorites } = useUserContext();

  return (
    <div className="searched_product">
      <div
        className="image-wrapper"
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      >
        <div className="view_product">View Product</div>
      </div>
      <div className="heart_icon">
        <Heart
          isClick={isProductFavorite(product.id, favorites)}
          onClick={() => updateFavorites(product.id)}
        />
      </div>
      <div className="searched_text_wrapper">
        <p className="searched_product_name">{product.name}</p>
        <p className="searched_product_price">
          <s className="searched_product_discount">Rs.{product.discount}</s> Rs.
          {product.price}
        </p>
        <div className="rating_wrapper">
          <Rating initialValue={product.rating} readonly size={20} />
          <span className="rating_count">({product.ratingsCount})</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
