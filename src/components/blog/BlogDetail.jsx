import { useLocation, useParams } from "react-router-dom";

const BlogDetail = () => {
  const location = useLocation();
  const blog = location.state;

  return (
    <div>
      <h2 className="font-bold text-4xl mb-3">
        Blog Detail for blogId : {blog.id}
      </h2>
      <p className="text-2xl">{JSON.stringify(blog)}</p>
    </div>
  );
};

export default BlogDetail;
