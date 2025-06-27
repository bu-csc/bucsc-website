import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Projects from './pages/projects/projects.jsx';
import Join from './pages/join/join.jsx';
import Faq from './pages/faq/faq.jsx';
import { Navbar } from './components/navbar/navbar.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join" element={<Join />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;