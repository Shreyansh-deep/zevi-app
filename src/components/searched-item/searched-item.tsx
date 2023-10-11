import { useSearchContext } from "src/providers/search.provider";
import CardComponent from "../card/card.component";
import "./searched-item.styles.scss";
import FilterComponent from "../filter/filter.component";
import { brandFilters, pricingFilters, ratingFilters } from "./filter-options";

const SearchedItems = () => {
  
  const { searchResult } = useSearchContext();

  
  return (
      <div className="page_wrapper">
        <h2 className="header">Search Result</h2>
        <div className="content_wrapper">
          <div className="filters_column">
            <FilterComponent options={brandFilters} title="Brand"/>
            <FilterComponent options={pricingFilters} title="Price Range"/>
            <FilterComponent options={ratingFilters} title="Rating"/>
          </div>
          <div className="searched_product_container">
            {searchResult.map((product) => (
              <CardComponent product={product} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default SearchedItems;
