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
  const [filters, setFilter] = useState<FilterOption[]>([]);
  const { products } = useProductsContext();
  const updateFilter = (filterToUpdate: FilterOption) => {
    const existingFilters = filters.find((filter) => {
      return filter.value === filterToUpdate.value;
    });
    if (existingFilters) {
      setFilter((prev) =>
        prev.filter((e) => e.value !== existingFilters.value)
      );
      return;
    }
    setFilter((prev) => [...prev, filterToUpdate]);
  };
  const performSearch = (text: string) =>
    setResult(products.filter((product) => product.name.includes(text)));

  return (
    <SearchContext.Provider
      value={{ searchResult, performSearch, filters, updateFilter }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

export const useSearchContext = () => useContext(SearchContext);
