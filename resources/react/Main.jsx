import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormScreen from './FormScreen.jsx';
import HomeScreen from './HomeScreen.jsx';
function Main() {

    return (
        <Router>
            <div className="container-sm">
                <nav>
                    <ul className="nav-bar">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/form">Form</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" exact element={<HomeScreen/>}/>
                    <Route path="/form" element={<FormScreen/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default Main;
