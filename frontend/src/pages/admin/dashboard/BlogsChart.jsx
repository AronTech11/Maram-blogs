import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatDate } from "../../../utilis/dateFormater";

// Assuming the blogs prop is an array of blog objects with a date and commentCount field
const formatData = (blogs) => {
  return blogs.map((blog) => ({
    name: formatDate(blog.createdAt), // Use the date or another field as the X-axis label
    post: blog.title.length || 0, // Use commentCount or another metric as the data value
    pv: blog.pageViews || 0, // Example for an additional data key, use if available
    amt: blog.amt || 0, // Example for an additional data key, use if available
  }));
};

const BlogsChart = ({ blogs }) => {
  const data = formatData(blogs);

  return (
    <div className="p-6 bg-warm-cream rounded-xl">
      <h2 className="font-heading text-xl font-bold text-primary mb-4">
        Blog Activity
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DF" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="post"
              stroke="#8B5E3C"
              fill="#8B5E3C"
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BlogsChart;
