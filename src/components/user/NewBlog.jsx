import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBlog = () => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  const [newBlog, setNewBlog] = useState({
    title: "",
    body: "",
    blog_img: "",
    category: "",
    author: auth,
  });

  const addBlog = async () => {
    axios.post("http://localhost:8000/blogs", newBlog);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog();
    navigate("/blogs");
  };

  const handleNewBlog = (e) => {
    const { name, value } = e.target;
    setNewBlog((preData) => ({ ...preData, [name]: value }));
  };

  return (
    <form
      action=""
      className="max-w-[500px] mx-auto my-20 border p-4 space-y-3 rounded-md"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-xl text-center my-4">Create a new blog</h2>
      <input
        type="text"
        value={newBlog.title}
        name="title"
        onChange={handleNewBlog}
        placeholder="Enter blog title"
        className="rounded-md border border-slate-200 p-2 block w-full focus:outline-slate-500"
      />
      <textarea
        type="text"
        value={newBlog.body}
        name="body"
        onChange={handleNewBlog}
        placeholder="Enter blog content"
        className="rounded-md border border-slate-200 p-2 block w-full focus:outline-slate-500"
      ></textarea>
      <input
        type="url"
        value={newBlog.blog_img}
        name="blog_img"
        onChange={handleNewBlog}
        placeholder="Enter blog content"
        className="rounded-md border border-slate-200 p-2 block w-full focus:outline-slate-500"
      />
      <select
        name="category"
        onChange={handleNewBlog}
        className="w-full rounded-md border border-slate-200 p-2 focus:outline-slate-500"
      >
        <option value="health">Health</option>
        <option value="football">Health</option>
        <option value="it">IT</option>
        <option value="beauty">Beauty</option>
      </select>
      <div className="flex items-center justify-between gap-x-3">
        <button
          type="button"
          onClick={() => navigate("/user")}
          className="w-1/2 bg-slate-400 font-bold rounded-md py-2 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-1/2 bg-slate-400 font-bold rounded-md py-2 text-white"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default NewBlog;
