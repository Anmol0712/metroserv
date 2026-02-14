import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import { ROUTES } from "./routes/route";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ui/ScrollToTop";
import ResponsiveWrapper from "./components/ui/ResponsiveWrapper";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const MobileApp = lazy(() => import("./pages/Services/MobileApp"));
const CloudSolution = lazy(() => import("./pages/Services/CloudSolution"));
const WebDevelopment = lazy(() => import("./pages/Services/WebDevelopment"));
const UIUXDesign = lazy(() => import("./pages/Services/UIUXDesign"));
const DigitalMarketing = lazy(() => import("./pages/Services/DigitalMarketing"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-pulse text-teal-700 text-xl">Loading...</div>
  </div>
);

function App() {
  return (
    <ResponsiveWrapper>
      <BrowserRouter>
        <ScrollToTop />
        <PageLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.SERVICES} element={<Services />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />

              <Route path={ROUTES.SERVICE_APP} element={<MobileApp />} />
              <Route path={ROUTES.SERVICE_CLOUD} element={<CloudSolution />} />
              <Route path={ROUTES.SERVICE_WEB} element={<WebDevelopment />} />
              <Route path={ROUTES.SERVICE_UIUX} element={<UIUXDesign />} />
              <Route path={ROUTES.SERVICE_MARKETING} element={<DigitalMarketing />} />
            </Routes>
          </Suspense>
        </PageLayout>
      </BrowserRouter>
    </ResponsiveWrapper>
  );
}

export default App;
