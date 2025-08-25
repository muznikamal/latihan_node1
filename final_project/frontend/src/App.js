import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarBarang from "./components/DaftarBarang";
import TambahBarang from "./components/TambahBarang";
import EditBarang from "./components/EditBarang";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DaftarBarang />} />
          <Route path="/tambah" element={<TambahBarang />} />
          <Route path="/edit/:id" element={<EditBarang />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
