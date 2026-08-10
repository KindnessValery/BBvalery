import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { ArticlePage } from "./pages/ArticlePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/:type/:id" element={<ArticlePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
