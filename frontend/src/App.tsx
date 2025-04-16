import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePages";
import AnalysisPage from "./pages/AnalysisPages";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
