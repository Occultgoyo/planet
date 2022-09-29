import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import CheckOut from "./CheckOut";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <HomeCarousel />
              <Home />
            </div>
          }
        ></Route>

        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <CheckOut />
            </div>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
