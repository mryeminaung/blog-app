import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./components/blog/BlogList";
import BlogDetail from "./components/blog/BlogDetail";

const App = () => {
  return (
    <div className="m-10">
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:blogId" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
