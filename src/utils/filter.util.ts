import { FilterOption } from "src/types/filters.type";

export const isFilterSelected = (
  filter: FilterOption,
  selectedFilters: FilterOption[]
) => !!selectedFilters.find((sf) => filter.value === sf.value);
