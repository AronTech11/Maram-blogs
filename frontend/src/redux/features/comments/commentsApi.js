import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/comments`, // Fixed the malformed baseUrl
    credentials: 'include', // No need to repeat it for each endpoint
  }),
  tagTypes: ['Comments'], // Define the tag types to be used for cache invalidation
  endpoints: (builder) => ({
    // Mutation for posting a comment
    postComment: builder.mutation({
      query: (commentData) => ({
        url: '/post-comment',
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: 'Comments', id: postId }, // Invalidate the comment cache for the specific post
      ],
    }),

    // Query for getting all comments (or can be made specific if needed)
    getComments: builder.query({
      query: () => ({
        url: '/total-comments', // Assuming you're getting all comments
        method: 'GET',
      }),
      providesTags: ['Comments'], // Provide the Comments tag so we can invalidate it later
    }),

    // Query for fetching comments for a specific post
    getCommentsByPost: builder.query({
      query: (postId) => ({
        url: `/comments-by-post/${postId}`, // Assuming this endpoint returns comments for a specific post
        method: 'GET',
      }),
      providesTags: (result, error, postId) => [
        { type: 'Comments', id: postId },
      ],
    }),
  }),
});

export const {
  usePostCommentMutation,
  useGetCommentsQuery,
  useGetCommentsByPostQuery, // Adding the new query hook for post-specific comments
} = commentApi;

export default commentApi;
