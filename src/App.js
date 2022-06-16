import { Routes, Route } from "react-router-dom";
import Aside from "./components/AsideBar";
import Header from "./components/Header";
import Common from "./components/Common";

export default function App() {
  return (
    <div className="main-section">
      <Header />
      <main className="flex flex-start main-content">
        <Aside />
        <section className="components">
          <Routes>
            <Route path="/" element={<Common />} />
            <Route path="/:tabName" element={<Common />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}
