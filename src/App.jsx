import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./components/blog/BlogList";
import BlogDetail from "./components/blog/BlogDetail";
import RootLayout from "./layout/RootLayout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/:blogId" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
