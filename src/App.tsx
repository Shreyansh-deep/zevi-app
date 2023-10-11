import { useState } from "react";
import "./App.css";
import SearchBar from "./components/search-bar/search-bar.component";
import SearchedItems from "./components/searched-item/searched-item";
import Suggestions from "./components/suggestions/suggestions.component";
import { useSearchContext } from "./providers/search.provider";

function App() {
  const { searchResult, performSearch } = useSearchContext();
  const [show, setShow] = useState(false);
  const toggleShowSuggestion = () => {
    setShow((prev) => !prev);
  };

  const handleSearch = (text: string) => {
    setShow(false);
    performSearch(text);
  };

  return (
    <div className="App">
      <SearchBar onClick={toggleShowSuggestion} onSearch={handleSearch} />
      {show && !searchResult.length && <Suggestions />}
      {!show && !!searchResult.length && <SearchedItems />}
    </div>
  );
}

export default App;
