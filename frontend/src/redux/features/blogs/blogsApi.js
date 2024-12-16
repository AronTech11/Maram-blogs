import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api`, // Corrected base URL
    credentials: 'include', // Ensure credentials are included globally
  }),
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = '', category = '', location = '' }) => {
        // Ensure URL parameters are properly encoded if needed
        return `blogs?search=${encodeURIComponent(search)}&category=${encodeURIComponent(category)}&location=${encodeURIComponent(location)}`;
      },
      providesTags: ['Blogs'],
    }),

    fetchBlogById: builder.query({
      query: (id) => `blogs/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),

    fetchRelatedBlogs: builder.query({
      query: (id) => `blogs/related/${id}`,
    }),

    postBlog: builder.mutation({
      query: (newBlog) => ({
        url: '/blogs/create-post',
        method: 'POST',
        body: newBlog,
        // credentials: 'include' // No need to repeat it, it's already set globally
      }),
      invalidatesTags: ['Blogs'],
    }),

    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `blogs/update-post/${id}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id }],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useFetchRelatedBlogsQuery,
} = blogsApi;
