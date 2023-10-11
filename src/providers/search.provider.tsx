import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { Product } from "../types/models";
import { useProductsContext } from "./products.provider";
import { FilterOption } from "src/types/filters.type";
import { FilterType } from "src/types/enums";

export interface SearchContextType {
  searchResult: Product[];
  performSearch: (text: string) => void;
  filters: FilterOption[];
  updateFilter: (filter: FilterOption) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchResult: [],
  performSearch: (text: string) => {},
  filters: [],
  updateFilter: (filer: FilterOption) => {},
});

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchResult, setResult] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProduct] = useState<Product[]>([]);
  const [filters, setFilter] = useState<FilterOption[]>([]);
  const { products } = useProductsContext();

  const updateFilter = (filterToUpdate: FilterOption) => {
    const existingFilters = filters.find((filter) => {
      return filter.value === filterToUpdate.value;
    });
    let newFilters = filters;
    let newResults = [...searchResult];

    if (existingFilters) {
      newFilters = newFilters.filter((e) => e.value !== existingFilters.value);
    } else {
      newFilters = [...newFilters, filterToUpdate];
    }

    newFilters.forEach((filter) => {
      switch (filter.type) {
        case FilterType.BRAND:
          newResults = newResults.filter(
            (product) => product.brand === filter.value
          );
          break;
        case FilterType.PRICE_RANGE:
          const minRange = filter.value.split(":")[0];
          const maxRange = filter.value.split(":")[1];
          newResults = newResults.filter(
            (product) => product.price >= minRange && product.price <= maxRange
          );
          break;
        case FilterType.RATING:
          newResults = newResults.filter(
            (product) => product.rating === filter.value
          );
          break;
        default:
          break;
      }
    });

    setFilter(newFilters);
    setFilteredProduct(newResults);
  };

  const performSearch = (text: string) => {
    const result = products.filter((product) => product.name.includes(text));
    setResult(result);
    setFilteredProduct(result);
  };

  return (
    <SearchContext.Provider
      value={{
        searchResult: filteredProducts,
        performSearch,
        filters,
        updateFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

export const useSearchContext = () => useContext(SearchContext);
