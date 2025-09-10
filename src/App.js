
import React from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import Home from "./pages/Home"; import About from "./pages/About"; import Contact from "./pages/Contact"; import OrderForm from "./pages/OrderForm"; import AdminDashboard from "./pages/AdminDashboard"; import Navbar from "./components/Navbar"; import Projects from "./pages/Projects";

function App() { return ( <Router> <div className="font-sans"> <Navbar /> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/contact" element={<Contact />} /> <Route path="/order" element={<OrderForm />} /> <Route path="/projects" element={<Projects />} /> <Route path="/secret-admin" element={<AdminDashboard />} /> </Routes> </div> </Router> ); }

export default App;

