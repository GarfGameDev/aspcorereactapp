import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import News from "./components/news";
import Weather from "./components/weather"

function App() {

    return (
            <Router>
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/weather" element={<Weather /> } />
                    </Routes>
                </main>
                </Router>
    );
    
}

export default App;