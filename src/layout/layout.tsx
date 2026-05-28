import { Navigate, Outlet } from "react-router-dom";
import { AuthHeader, DashHeader, HomeHeader, UserHeader } from "../components/Header";
import styles from "./layout.module.css";
import { useContext } from "react";
import { LoggedContext } from "../context/LoggedContext";

export function HomeLayout() {
    return (
        <div>
            <HomeHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export function AuthLayout() {

    const loggedContext = useContext(LoggedContext);

    if (!loggedContext) return null;

    const { logged } = loggedContext;

    if (logged) return <Navigate to="/designer/dashboard" replace />

    return (
        <div>
            <AuthHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export function DashboardLayout() {

    const loggedContext = useContext(LoggedContext);

    if (!loggedContext) return null;

    const { logged } = loggedContext;

    if (!logged) return <Navigate to="/login/user" replace />

    return (
        <div className={styles.DashboardLayout}>
            <DashHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export function UserLayout() {
    return (
        <div className={styles.UserLayout}>
            <UserHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}