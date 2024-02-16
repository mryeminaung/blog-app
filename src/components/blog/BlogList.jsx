import axios from "axios";
import BlogCard from "./BlogCard";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  let typeFilter = searchParams.get("category");
  typeFilter = typeFilter && typeFilter.toLowerCase();

  useEffect(() => {
    axios.get("http://localhost:8000/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  const filteredBlogs =
    blogs && typeFilter
      ? blogs.filter((blog) => blog.category.toLowerCase() === typeFilter)
      : blogs;

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <>
      <div className="flex items-center px-3 py-5 gap-x-2">
        <button
          className={`px-10 py-1.5 ${
            typeFilter === "health" ? "bg-slate-400" : "bg-slate-300"
          } hover:bg-slate-400 rounded-lg`}
          onClick={() => handleFilterChange("category", "health")}
        >
          Health
        </button>
        <button
          className={`px-10 py-1.5 ${
            typeFilter === "football" ? "bg-slate-400" : "bg-slate-300"
          } hover:bg-slate-400 rounded-lg`}
          onClick={() => handleFilterChange("category", "football")}
        >
          Football
        </button>
        <button
          className={`px-10 py-1.5 ${
            typeFilter === "it" ? "bg-slate-400" : "bg-slate-300"
          } hover:bg-slate-400 rounded-lg`}
          onClick={() => handleFilterChange("category", "it")}
        >
          IT
        </button>
        <button
          className={`px-10 py-1.5 ${
            typeFilter === "beauty" ? "bg-slate-400" : "bg-slate-300"
          } hover:bg-slate-400 rounded-lg`}
          onClick={() => handleFilterChange("category", "beauty")}
        >
          Beauty
        </button>
        {typeFilter && (
          <button
            className="underline"
            onClick={() => handleFilterChange("category", null)}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-around py-3 gap-6">
        {filteredBlogs &&
          filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </>
  );
};

export default BlogList;
