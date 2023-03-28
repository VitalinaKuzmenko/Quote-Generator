import "./App.css";
import Quote from "./Quote";
import QuoteButton from "./QuoteButton";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Search />
      <QuoteButton />
      <Quote />
    </div>
  );
}

export default App;
