import "./app.css"
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import FriendPage from "./pages/friendPage/FriendPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom"
import ViewLetter from "./pages/viewLetter/ViewLetter";
import WriteLetter from "./pages/writeLetter/WriteLetter"
import EditProfile from "./pages/editProfile/EditProfile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Layout = ({ children }) => {
  return (
    <div className="mainAppContainer">
      <TopBar />
      <div className="bottomStuff">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {

  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={user ? <Navigate to={"/App"} /> : <Login />} />
          <Route path="register" element={user ? <Navigate to={"/App"} /> : <Register />} />
          <Route path="/App" element={<Layout />}>
            <Route path="" element={user ? <Home /> : <Navigate to={"/"} />  } />
            <Route path="friend/:id" element={<FriendPage />} />
            <Route path="friend/:id/letter/" element={<WriteLetter />} />
            <Route path="friend/:id/letter/:lid" element={<ViewLetter />} />
            <Route path="profile" element={<EditProfile />} />
          </Route>
          {/* <Route exact path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          
          <Route path="Profile/:username" element={<ProfilePage />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;