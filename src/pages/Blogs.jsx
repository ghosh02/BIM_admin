import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusIcon } from "lucide-react"
import { FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"

const blogs = [
  { id: 1, title: "Getting Started with Next.js", excerpt: "Learn the basics of Next.js and start building amazing web applications.", date: "2023-05-15" },
  { id: 2, title: "The Power of React Hooks", excerpt: "Explore how React Hooks can simplify your code and make it more reusable.", date: "2023-05-20" },
  { id: 3, title: "Mastering Tailwind CSS", excerpt: "Dive deep into Tailwind CSS and learn how to create stunning designs quickly.", date: "2023-05-25" },
  { id: 4, title: "TypeScript Best Practices", excerpt: "Discover the best practices for writing clean and maintainable TypeScript code.", date: "2023-05-30" },
]

export default function Blogs() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs Dashboard</h1>
        <Link to="createCourse">
          <button className=" flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
            <span>
              <FaPlus size={14} />
            </span>
            Create Blogs
          </button>
        </Link>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.id} className= 'bg-[#eee] rounded-[8px]'>
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>{blog.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add any additional content here */}
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">Published on {blog.date}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}