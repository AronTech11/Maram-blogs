import React from 'react';
import { formatDate } from '../../../utilis/dateFormater';
import EditorJSHTML from 'editorjs-html';

const editorJSHTML = EditorJSHTML();

const SingleBlogCard = ({ blog }) => {
    if (!blog) {
        return <div>Loading...</div>; // Fallback UI if blog is not loaded yet
    }

    const { title, createdAt, author, content, coverImg, comments } = blog || {};

    // Parse the content only if it's valid
    const htmlContent = content ? editorJSHTML.parse(content).join('') : '';

    // Format the date
    const formattedDate = createdAt ? formatDate(createdAt) : 'N/A';

    // Ensure safe access to author and cover image
    const authorName = author?.username || 'Unknown Author';
    const coverImage = coverImg || '';

    // Safely map over the comments array if it's available
    const commentsList = Array.isArray(comments) ? comments : [];

    return (
        <div className="bg-white p-8">
            {/* Header */}
            <div>
                <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
                <p className="mb-6">{formattedDate} by <span className="text-blue-400 cursor-pointer">{authorName}</span></p>
            </div>
            
            {/* Cover Image */}
            {coverImage && (
                <div>
                    <img src={coverImage} alt="Blog Cover" className="w-full md:h-[520px] object-cover" />
                </div>
            )}

            {/* Details */}
            <div className="mt-8 space-y-4">
                {/* Render content if available */}
                {htmlContent && (
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="space-y-3 editorjsdiv" />
                )}
                
                {/* Comments Section */}
                <div className="mt-8">
                    <h3 className="text-lg font-medium">Comments:</h3>
                    {commentsList.length > 0 ? (
                        <ul>
                            {commentsList.map((comment, index) => (
                                <li key={index}>
                                    <p>{comment.text}</p>
                                    <p><strong>{comment.author}</strong> - {formatDate(comment.createdAt)}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SingleBlogCard;
