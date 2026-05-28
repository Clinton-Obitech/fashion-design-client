import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./ui.module.css"
import { LogoutUser } from "./Logout"

export function DesignerNav() {

    const [openNav, setOpenNav] = useState(false)

    const ToggleNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <div className={styles.DesignerNav}>
        
            <i className=
            {!openNav ? "fa-solid fa-bars-staggered" : "fa-solid fa-xmark"}
            onClick={ToggleNav}
            />
        
        {openNav && (
            <div className={styles.dropDown}>
                
                <i className=
                {!openNav ? "fa-solid fa-bars-staggered" : "fa-solid fa-xmark"}
                onClick={ToggleNav}
                />
                
                <LogoutUser />

                <nav>
                    <Link to="/unavailable">personal information</Link>
                    <Link to="/unavailable">payment information</Link>
                    <Link to="/unavailable">customer orders</Link>
                    <Link to="/unavailable">customer messages</Link>
                    <Link to="/unavailable">account settings</Link>
                </nav>
            </div>
        )}
        </div>
    )
}