import { FC, FormEvent, useRef, useState } from "react";
import "./search-bar.styles.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";


interface Props {
    onClick: () => void;
    onSearch: (text: string) => void;
}


const SearchBar: FC<Props> = ({onClick, onSearch}) => {
    const ref = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        onSearch(ref.current?.value || "")
    }
  return (
    <div>
      <div className="search">
        <div className="search_bar">
            <form onSubmit={handleSubmit}>
                <input
                    type="input"
                    placeholder="Search"
                    className="search_bar_input"
                    onClick={onClick}
                    ref={ref}
                />
          </form>
          <HiMagnifyingGlass />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
