import { Link } from "react-router-dom"
import { AppMode } from "../ui/Mode"
import { DesignerNav } from "../ui/Toggle-Nav"
import styles from "./components.module.css"

export function HomeHeader() {
    return (
        <header className={styles.HomeHeader}>
            <div>
                <Link to="/login/user">login</Link>
                <div>fashion design app</div>
            </div>
            <AppMode />
        </header>
    )
}

export function AuthHeader() {

    const goBack = () => {
        window.history.back();
    }

    return (
        <header>
            <div>
                <i onClick={goBack} className="bi bi-arrow-left-circle"></i>
                <div>fashion design app</div>
            </div>
            <AppMode />
        </header>
    )
}

export function DashHeader() {
    return (
        <header className={styles.DashHeader}>
            <DesignerNav />
            <div>fashion design app</div>
            <AppMode />
        </header>
    )
}

export function UserHeader() {

    const goBack = () => {
        window.history.back();
    }

    return (
        <header className={styles.UserHeader}>
            <i onClick={goBack} className="bi bi-chevron-left"></i>
            <div>fashion design app</div>
            <AppMode />
        </header>
    )
}