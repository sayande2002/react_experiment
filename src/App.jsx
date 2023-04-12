import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import RenderPage from "utils/RenderPage";
const HomePage = lazy(() => import("pages/HomePage"));
const SignupPage = lazy(() => import("pages/SignupPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<RenderPage Page={HomePage} />} />
      <Route path="/login" element={<RenderPage Page={LoginPage} />} />
      <Route path="/signup" element={<RenderPage Page={SignupPage} />} />
      <Route path="*" element={<RenderPage Page={ErrorPage} />} />
    </Routes>
  );
}

export default App;
