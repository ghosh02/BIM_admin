import BlogsCard from "@/components/BlogsCard"
import { FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"
import images from "../assets/course.png";

const blogs = [
  { id: 1, title: "Getting Started with Next.js", description: "Learn the basics of Next.js and start building amazing web applications.", date: "2023-05-15", author: "Syed Amaan Quadri" },
  { id: 2, title: "The Power of React Hooks", description: "Explore how React Hooks can simplify your code and make it more reusable.", date: "2023-05-20", author: "Syed Amaan Quadri" },
  { id: 3, title: "Mastering Tailwind CSS", description: "Dive deep into Tailwind CSS and learn how to create stunning designs quickly.", date: "2023-05-25", author: "Syed Amaan Quadri" },
  { id: 4, title: "TypeScript Best Practices", description: "Discover the best practices for writing clean and maintainable TypeScript code.", date: "2023-05-30", author: "Syed Amaan Quadri" },
]

export default function Blogs() {
  return (
    <div className="container mx-auto p-[32px]">
      <header className="flex justify-between items-center mb-[24px]">
        <h1 className="text-2xl font-bold pl-[10px] pb-[24px]">Blogs Dashboard</h1>
        <Link to="createBlog">
          <button className=" flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
            <span>
              <FaPlus size={14} />
            </span>
            Create Blogs
          </button>
        </Link>
      </header>
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 py-4">
        {blogs.map((blog, index) => (          
          <BlogsCard key = {index} title = {blog.title} description={blog.description} date = {blog.date} image={images} author={blog.author}/>
        ))}
      </div>
    </div>
  )
}