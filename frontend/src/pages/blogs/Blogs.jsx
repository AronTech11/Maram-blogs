import React, { useState } from 'react';
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogsApi';
import SearchBlog from './SearchBlog';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Row, Col, Spin, Empty, Typography, notification } from 'antd';
import './Blogs.css';

const { Meta } = Card;
const { Title } = Typography;

const Blogs = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState({ search: '', category: '' });
  
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
  const navigate = useNavigate();  // Hook to navigate programmatically
  
  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleSearch = () => setQuery({ search, category });
  
  // Group blogs by category
  const groupedBlogs = blogs.reduce((acc, blog) => {
    const blogCategory = blog.category.toLowerCase();
    if (!acc[blogCategory]) {
      acc[blogCategory] = [];
    }
    acc[blogCategory].push(blog);
    return acc;
  }, {});

  // Handle Blog Post Success
  const handleBlogPostSuccess = () => {
    // Show success notification
    notification.success({
      message: 'Blog Posted Successfully',
      description: 'Your blog has been posted. Redirecting to the homepage...',
      duration: 3, // Notification disappears after 3 seconds
    });

    // Directly navigate to the home page after showing the success message
    setTimeout(() => {
      navigate('/'); // Redirect to the home page
    }, 3000); // Wait for 3 seconds before redirecting
  };

  return (
    <div className="blogs-container mt-16 container mx-auto">
      <SearchBlog
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />

      {/* Loading and Error handling */}
      {isLoading && (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      )}
      {error && (
        <div className="error-container">
          <p>{error.toString()}</p>
        </div>
      )}

      {/* Display Blogs by Category */}
      {['village','culture', 'festival', 'education', 'news'].map((cat) => {
        const categoryBlogs = groupedBlogs[cat];

        return categoryBlogs && categoryBlogs.length > 0 ? (
          <div key={cat} className="category-section" >
            <Title level={2}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Title>
            <Row gutter={[16, 16]} justify="center"  >
              {categoryBlogs.map(blog => (
                <Col xs={24} sm={12} md={8} lg={8} xl={6} key={blog._id}>
                  <Link to={`/blogs/${blog._id}`} className="blog-card">
                    <Card hoverable cover={<img alt={blog.title} src={blog.coverImg} />}>
                      <Meta title={blog.title} />
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ) : null;
      })}

      {/* If no blogs are found */}
      {blogs.length === 0 && !isLoading && !error && (
        <Empty description="No blogs found" />
      )}
    </div>
  );
};

export default Blogs;
