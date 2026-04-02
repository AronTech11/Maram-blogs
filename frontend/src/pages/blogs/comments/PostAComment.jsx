import React, { useState } from "react";
import { usePostCommentMutation } from "../../../redux/features/comments/commentsApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchBlogByIdQuery } from "../../../redux/features/blogs/blogsApi";

const PostAComment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [postComment, { isLoading }] = usePostCommentMutation();

  const { refetch } = useFetchBlogByIdQuery(id, { skip: !id });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to post a comment");
      navigate("/login");
      return;
    }

    const newComment = { comment, user: user._id, postId: id };

    try {
      await postComment(newComment).unwrap();
      setComment("");
      refetch();
    } catch (err) {
      alert("Failed to post comment. Please try again.");
    }
  };

  return (
    <div>
      <h4 className="font-heading text-lg font-semibold mb-4">
        Leave a Comment
      </h4>
      {!user ? (
        <p className="text-primary/50 text-sm">
          Please{" "}
          <Link to="/login" className="text-accent font-medium underline">
            sign in
          </Link>{" "}
          to post a comment.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="w-full bg-bgPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 p-4 text-sm"
            placeholder="Share your thoughts about this post..."
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mt-3 bg-accent text-white font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
          >
            {isLoading ? "Posting..." : "Post Comment"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PostAComment;
