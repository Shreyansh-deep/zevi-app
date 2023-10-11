import { FC, FormEvent, useRef } from "react";
import "./search-bar.styles.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";

interface Props {
  onClick: () => void;
  onSearch: (text: string) => void;
  showBorder?: boolean 
}

const SearchBar: FC<Props> = ({ onClick, onSearch, showBorder }) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(ref.current?.value || "");
  };
  return (
    <div className="search">
      <div className="search_bar" style={{borderWidth: (showBorder ? "1px" : "0")}}>
        <form onSubmit={handleSubmit}>
          <input
            type="input"
            placeholder="Search"
            className="search_bar_input"
            onClick={onClick}
            ref={ref}
          />
        </form>
        <HiMagnifyingGlass size={42} color="inherit"/>
      </div>
    </div>
  );
};

export default SearchBar;
