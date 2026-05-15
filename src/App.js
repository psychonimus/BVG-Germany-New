import React from "react";
import "App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LangProvider } from "context/LangContext";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ServicesPage from "pages/ServicesPage";
import ProcessPage from "pages/ProcessPage";
import EmployersPage from "pages/EmployersPage";
import CandidatesPage from "pages/CandidatesPage";
import PlatformPage from "pages/PlatformPage";
import ContactPage from "pages/ContactPage";
import NotFoundPage from "pages/NotFoundPage";

function App() {
  return (
    <LangProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/employers" element={<EmployersPage />} />
              <Route path="/candidates" element={<CandidatesPage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" richColors closeButton />
      </div>
    </LangProvider>
  );
}

export default App;
