import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componants/Layout";
import HomePage from "./HomePage";
import ItemDetailes from "./ItemDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path=":id" element={<ItemDetailes />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
