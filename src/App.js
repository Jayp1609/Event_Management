import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";
import Event from "./page/Event/Event";
import Gallery from "./page/Gallery/Gallery";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Admin from "./page/Admin/Admin";
import Dashboard from "./page/Admin/Dashboard";
import AdminNavbar from "./page/Admin/AdminNavbar";
import UsersList from "./page/Admin/NavItems/UsersList";
import EventPost from "./page/Admin/NavItems/EventPost";
import BookedEvent from "./page/Admin/NavItems/BookedEvent";
import PostCategory from "./page/Admin/NavItems/PostCategory";
import AllCategory from "./page/Event/Category/AllCategory";
import Category from "./page/Event/Category/Category";
import SpecificEvent from "./page/Event/Category/SpecificEvent";
import FetchBookedEvents from "./components/FetchBookedEvents";

function App() {
  const Useroutlet = () => (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
        }}
      >
        <Navbar />
      </div>
      <div style={{ paddingTop: "100px" }}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
  const AdminOutlet = () => (
    <>
      {!localStorage.getItem("token_Admin") ? <></> : <AdminNavbar />}
      {/* <AdminNavbar /> */}
      <Outlet />
    </>
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Useroutlet />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            {!localStorage.getItem("token_Event") ? (
              <Route path="event" element={<Signin />} />
            ) : (
              <Route path="event" element={<Event />}>
                <Route path="allcategory" element={<AllCategory />} />
                <Route path=":category" element={<Category />} />
                <Route path="detail/:eventid" element={<SpecificEvent />} />
              </Route>
            )}

            <Route exact path="gallery" element={<Gallery />} />
            <Route exact path="signin" element={<Signin />} />
            <Route exact path="signup" element={<SignUp />} />
            <Route exact path="userprofile" element={<UserProfile />} />
            <Route exact path="userbooking" element={<FetchBookedEvents />} />
          </Route>

          {/*......admin routes...... */}
          <Route element={<AdminOutlet />}>
            <Route exact path="admin" element={<Admin />} />
            {!localStorage.getItem("token_Admin") ? (
              <Route path="admin/dashboard" element={<Admin />} />
            ) : (
              <Route path="admin/dashboard" element={<Dashboard />}>
                <Route path="users" element={<UsersList />} />
                <Route path="postevent" element={<EventPost />} />
                <Route path="bookedevent" element={<BookedEvent />} />
                <Route path="postcategory" element={<PostCategory />} />
              </Route>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
