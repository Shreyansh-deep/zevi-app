import "./filter.styles.scss";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FC, useState } from "react";
import FilterOptionComponent from "../filter-option/filter-option.component";
import { FilterOption } from "src/types/filters.type";
import { useSearchContext } from "src/providers/search.provider";
import { isFilterSelected } from "src/utils/filter.util";

interface Props {
  options: FilterOption[];
  title: string;
}

const FilterComponent: FC<Props> = ({ options, title }) => {
  const [open, setOpen] = useState<boolean>(true);
  const { filters, updateFilter } = useSearchContext();
  const toggleOpen = () => setOpen((prev) => !prev);
  return (
    <div className="filter">
      <div className="filter_header" onClick={toggleOpen}>
        <h4 className="filter_title">{title}</h4>
        <div>{open ? <BiChevronUp /> : <BiChevronDown />}</div>
      </div>
      {open && (
        <div className="filter_body">
          {options.map((option) => (
            <FilterOptionComponent
              isSelected={isFilterSelected(option, filters)}
              onSelect={() => {
                updateFilter(option);
              }}
            >
              {option.title}
            </FilterOptionComponent>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
