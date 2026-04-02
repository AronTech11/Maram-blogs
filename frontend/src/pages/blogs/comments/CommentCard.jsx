import React from "react";
import { formatDate } from "../../../utilis/dateFormater";
import PostAComment from "./PostAComment";

const CommentCard = ({ comments }) => {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border border-soft-gray/50 p-6 md:p-8">
      <h3 className="font-heading text-xl font-semibold mb-6">
        {comments && comments.length > 0
          ? `Comments (${comments.length})`
          : "Comments"}
      </h3>

      {comments && comments.length > 0 ? (
        <div className="space-y-5">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border-b border-soft-gray/50 pb-5 last:border-b-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-earth-green/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-earth-green">
                    {comment.user?.username?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm text-primary capitalize">
                    {comment.user?.username || "User"}
                  </p>
                  <p className="text-xs text-primary/40">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
              </div>
              <p className="text-primary/70 text-sm leading-relaxed pl-12">
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-primary/40 text-sm">
          No comments yet. Be the first to share your thoughts!
        </p>
      )}

      <div className="mt-6 pt-6 border-t border-soft-gray/50">
        <PostAComment />
      </div>
    </div>
  );
};

export default CommentCard;
