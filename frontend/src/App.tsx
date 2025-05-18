import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ToastProvider } from "./contexts/ToastContext";
import GlobalStyles from "./styles/GlobalStyles";
import "./i18n/i18n";
import { lazyLoadComponent } from "./utils/lazyLoad";

const HomePage = lazyLoadComponent(() => import("./pages/HomePages"));
const AnalysisPage = lazyLoadComponent(() => import("./pages/AnalysisPages"));
const StatsPage = lazyLoadComponent(() => import("./pages/StatsPage"));

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
