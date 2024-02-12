import axios from "axios";
import BlogCard from "./BlogCard";
import { useState } from "react";
import { useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-around py-10 gap-6">
      {blogs && blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default BlogList;
