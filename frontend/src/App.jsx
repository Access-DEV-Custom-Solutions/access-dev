import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MobileDev from "./pages/services/MobileDev";
import WebDev from "./pages/services/WebDev";
import WebRedesign from "./pages/services/WebRedesign";
import AISolutions from "./pages/services/AISolutions";
import Dashboard from './pages/Dashboard';
import MyProjects from './pages/MyProjects';
import ProjectDetail from './pages/ProjectDetail';


// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        <Route path="/signin" element={<PageTransition><SignIn /></PageTransition>} />
        <Route path="/services/mobile" element={<PageTransition><MobileDev /></PageTransition>} />
        <Route path="/services/web" element={<PageTransition><WebDev /></PageTransition>} />
        <Route path="/services/redesign" element={<PageTransition><WebRedesign /></PageTransition>} />
        <Route path="/services/ai" element={<PageTransition><AISolutions /></PageTransition>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-projects" element={<PageTransition><MyProjects /></PageTransition>} />
        <Route path="/projects/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // Dark mode is switched off for now: always use the light theme, and clear
  // any "dark" choice saved by visitors before the toggle was removed.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.removeItem("theme");
  }, []);

  return (
    <Router>
      <div className="app flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text-secondary)]">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex="-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
