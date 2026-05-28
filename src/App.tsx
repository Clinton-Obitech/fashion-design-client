import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { AuthLayout, DashboardLayout, HomeLayout, StartedLayout, UserLayout } from "./layout/layout";
import GetStarted from "./pages/Get-Started";
import CreateUser from "./pages/auth/user/Sign-Up";
import LoginUser from "./pages/auth/user/Sign-In";
import { ConfirmModal, ErrorModal, ErrorRedirectModal, SuccessModal, SuccessRedirectModal } from "./ui/Modal";
import { CustomerDashboard, DesignerDashboard } from "./pages/dashboard/user/Dashboard";
import SetDesignerShop from "./components/designer/Set-Shop";
import "./App.css";
import ForgotPassword from "./pages/auth/user/ForgotPassword";
import PendingPage from "./pages/Pending";

export default function App() {
    return (
        <>

        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>

            <Route element={<StartedLayout />}>
                <Route path="/get/started" element={<GetStarted />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/create/user" element={<CreateUser />} />
                <Route path="/login/user" element={<LoginUser />} />
                <Route path="/forgot/password" element={<ForgotPassword />} />
            </Route>

            <Route element={<DashboardLayout />}>
                <Route path="/designer/dashboard" element={<DesignerDashboard />} />
                <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            </Route>

            <Route element={<UserLayout />}>
                <Route path="/set/shop" element={<SetDesignerShop />} />
            </Route>

            <Route path="/unavailable" element={<PendingPage />} />
        </Routes>

        <SuccessModal />
        <ErrorModal />
        <SuccessRedirectModal />
        <ErrorRedirectModal />
        <ConfirmModal />

        </>
    )
}