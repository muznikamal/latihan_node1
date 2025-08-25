import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarSiswa from "./components/DaftarSiswa";
import TambahSiswa from "./components/TambahSiswa";
import EditSiswa from "./components/EditSiswa";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DaftarSiswa />} />
          <Route path="/tambah" element={<TambahSiswa />} />
          <Route path="/edit/:id" element={<EditSiswa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
