import { getTrendingProducts } from "src/utils/products.util";
import { useProductsContext } from "../../providers/products.provider";
import "./suggestions.styles.scss";

const Suggestions = () => {
  const { products } = useProductsContext();

  return (
    <div className="trending_suggestions">
      <h2>Latest Trends</h2>
      <div className="trending_row">
        {getTrendingProducts(products).map((product) => (
          <div className="trending">
            <div className="image-wrapper">
                <img src={product.imageUrl} alt="product-name"/>
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="suggestions_container">
        <h2>Popular Suggestions</h2>
        {getTrendingProducts(products).map((product) => (
            <div className="suggestions">
            <p>{product.name}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
