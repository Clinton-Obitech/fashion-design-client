import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home">
            <h1>where<br />designers<br />and<br />customers<br />meet</h1>
            <Link to="/get/started">get started</Link>
        </div>
    )
}