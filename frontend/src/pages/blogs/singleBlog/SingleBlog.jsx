import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../../../redux/features/blogs/blogsApi";
import SingleBlogCard from "./SingleBlogCard";
import CommentCard from "../comments/CommentCard";
import RelatedBlogs from "./RelatedBlogs";

const SingleBlog = () => {
  const { id } = useParams();
  const { data: blog = {}, error, isLoading } = useFetchBlogByIdQuery(id);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
          </div>
        )}
        {error && (
          <div className="text-center py-20 text-red-500">
            Something went wrong. Please try again.
          </div>
        )}
        {blog.post && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <SingleBlogCard blog={blog.post} />
              <CommentCard comments={blog.comments} />
            </div>
            <aside className="lg:w-1/3">
              <div className="sticky top-24">
                <RelatedBlogs />
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
