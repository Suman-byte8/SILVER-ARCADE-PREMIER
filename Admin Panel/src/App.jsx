import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Signup from "./pages/Auth/Signup";
import RoomManagement from "./pages/RoomManagement";
import EditRoomPage from "./components/RoomManagement/EditRoomPage"; // new import

// Layouts
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MenuManagement from "./pages/MenuManagementPage/MenuManagement";
import PageManagement from "./pages/PageManagement";
import AdminBannerPreview from "./components/PageManagement/AdminBannerPreview";
import AdminDistinctivePreview from "./components/PageManagement/AdminDistinctivePreview";
import OfferManagement from "./pages/OfferManagement";
import AddOfferPage from "./pages/AddOfferPage";
import FacilityManagement from "./pages/FacilityManagement";
import AboutManagement from "./pages/AboutManagement";

const MainLayout = ({ children }) => (
  <div className="flex h-screen bg-page dark:bg-page">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Topbar />
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  </div>
);

const App = () => {
  const renderWithLayout = (Component) => (
    <MainLayout>
      <Component />
    </MainLayout>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route path="/" element={renderWithLayout(Home)} />
        <Route
          path="/room-management"
          element={renderWithLayout(RoomManagement)}
        />
        <Route
          path="/room-management/edit-room"
          element={renderWithLayout(EditRoomPage)}
        />
        <Route
          path="/menu-management"
          element={renderWithLayout(MenuManagement)}
        />
        <Route
          path="/page-management"
          element={renderWithLayout(PageManagement)}
        />
        <Route
          path="/page-management/home-banner-preview"
          element={renderWithLayout(AdminBannerPreview)}
        />
        <Route
          path="/page-management/distinctive-preview"
          element={renderWithLayout(AdminDistinctivePreview)}
        />
        <Route
          path="/offer-management"
          element={renderWithLayout(OfferManagement)}
        />
        <Route
          path="/offer-management/add-offer"
          element={renderWithLayout(AddOfferPage)}
        />
         <Route
          path="/facility-management"
          element={renderWithLayout(FacilityManagement)}
        />
          <Route
          path="/about-management"
          element={renderWithLayout(AboutManagement)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
