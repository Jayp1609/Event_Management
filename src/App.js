import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Event from "./page/Event/Event";
import Gallery from "./page/Gallery/Gallery";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ width: "100%", position: "fixed", top: "0" }}>
          <Navbar />
        </div>
        <div style={{ paddingTop: "100px" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event/category" element={<Category />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/userprofile" element={<UserProfile />} />
            {!localStorage.getItem("token_Event") ? (
              <Route path="/event" element={<Signin />} />
            ) : (
              <Route path="/event" element={<Event />} />
            )}

            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
