import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const pendingRoutes = [
  "/about",
  "/services",
  "/what-we-believe",
  "/missions",
  "/branch-churches",
  "/gallery",
  "/contact",
  "/live",
];

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {pendingRoutes.map((path) => (
            <Route key={path} path={path} element={<NotFound isPlannedPage />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;
