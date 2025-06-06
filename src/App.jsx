import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Watchlist from "./Components/WatchList";
import MovieContextWrapper from "./Components/MovieContextWrapper";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";

function App() {
  return (
    <Provider store={store}>
    <MovieContextWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </MovieContextWrapper>
    </Provider>
  );
}

export default App;

