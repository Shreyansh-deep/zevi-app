import { useState } from "react";
import "./App.scss";
import SearchBar from "./components/search-bar/search-bar.component";
import SearchedItems from "./components/searched-item/searched-item";
import Suggestions from "./components/suggestions/suggestions.component";
import { useSearchContext } from "./providers/search.provider";
import backgroundImage from "./assets/background-image.jpg";
import logoImage from "./assets/logo.png";


function App() {
  const { performSearch } = useSearchContext();
  const [step, setStep] = useState<number>(-1);
  const showSearchItem = step===1
  const showSuggestion = step===0
  const toggleShowSuggestion = () => {
    setStep((prev) => {
      if(prev !== 0) return 0
      return -1
    });
  };

  const handleSearch = (text: string) => {
    setStep(1);
    performSearch(text);
  };

  return (
    <div
      className="App"
      style={{
        paddingTop: showSearchItem ? "40px" : "162px",
        backgroundImage: `url(${!showSearchItem ? backgroundImage : ""})`,
      }}
    >
      <div className="logo_wrapper">
        <img className="logo" src={logoImage} alt="logo" />
      </div>
      <SearchBar
        onClick={toggleShowSuggestion}
        onSearch={handleSearch}
        showBorder={showSearchItem}
      />
      {showSuggestion && <Suggestions />}
      {showSearchItem && <SearchedItems />}
    </div>
  );
}

export default App;
