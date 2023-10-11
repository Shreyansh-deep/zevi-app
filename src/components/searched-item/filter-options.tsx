import { Rating } from "react-simple-star-rating";
import { FilterType } from "src/types/enums";
import { FilterOption } from "src/types/filters.type";

export const brandFilters: FilterOption[] = [
  { title: "Mango", type: FilterType.BRAND, value: "Mango" },
  { title: "H&M", type: FilterType.BRAND, value: "H&M" },
];

export const pricingFilters: FilterOption[] = [
  { title: "Under 500", type: FilterType.PRICE_RANGE, value: "0:500" },
  { title: "1000 To 3000", type: FilterType.PRICE_RANGE, value: "1000:3000" },
];

export const ratingFilters: FilterOption[] = [
  { title: <Rating initialValue={5} readonly size={20} />, type: FilterType.PRICE_RANGE, value: 5 },
  { title: <Rating initialValue={4} readonly size={20} />, type: FilterType.PRICE_RANGE, value: 4 },
  { title: <Rating initialValue={3} readonly size={20} />, type: FilterType.PRICE_RANGE, value: 3 },
  { title: <Rating initialValue={2} readonly size={20} />, type: FilterType.PRICE_RANGE, value: 2 },
  { title: <Rating initialValue={1} readonly size={20} />, type: FilterType.PRICE_RANGE, value: 1 },
];


