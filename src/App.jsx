import Chart from "./pages/chart";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import Customer from "./pages/customer";

function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

export default App;
