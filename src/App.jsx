import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./components/blog/BlogList";
import BlogDetail from "./components/blog/BlogDetail";
import RootLayout from "./layout/RootLayout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/user/Dashboard";
import NewBlog from "./components/user/NewBlog";
import UserLayout from "./layout/UserLayout";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            <Route path="blogs" element={<BlogList />} />
            <Route path="blogs/:blogId" element={<BlogDetail />} />

            <Route path="user" element={<UserLayout />}>
              <Route path="new-blog" element={<NewBlog />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
