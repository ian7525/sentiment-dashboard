import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomePage from "./pages/HomePages";
import AnalysisPage from "./pages/AnalysisPages";
import StatsPage from "./pages/StatsPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ToastProvider } from "./contexts/ToastContext";
import GlobalStyles from "./styles/GlobalStyles";
import "./i18n/i18n";

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <ToastProvider>
          <GlobalStyles />
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
        </ToastProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
