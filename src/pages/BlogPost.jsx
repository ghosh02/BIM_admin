import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, ChevronLeft, User } from "lucide-react"
import { useNavigate } from "react-router-dom"
import images from "../assets/course.png";
import BlogsCard from "@/components/BlogsCard"

export default function BlogPost() {

    const navigate = useNavigate();
    const blogs = [
        { id: 1, title: "Getting Started with Next.js", description: "Learn the basics of Next.js and start building amazing web applications.", date: "2023-05-15", author: "Syed Amaan Quadri" },
        { id: 2, title: "The Power of React Hooks", description: "Explore how React Hooks can simplify your code and make it more reusable.", date: "2023-05-20", author: "Syed Amaan Quadri" },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-1">
                <article className="container max-w-4xl py-6 lg:py-12">
                    <div className="space-y-4">
                        <Button variant="ghost" className="flex items-center space-x-2 bg-pink text-white rounded-[8px] hover:bg-pink hover:text-white">
                            <ChevronLeft className="h-4 w-4" />
                            <span onClick={() => { navigate('/blog') }}>Back to Blog</span>
                        </Button>
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl leading-[100]">
                            10 Tips for Better Code: Improving Your Coding Skills
                        </h2>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <time dateTime="2023-06-01">June 1, 2023</time>
                            <User className="h-4 w-4 ml-4" />
                            <span>John Doe</span>
                        </div>
                    </div>
                    <img
                        alt="Blog post main image"
                        className="aspect-video overflow-hidden rounded-lg object-cover my-8"
                        height="400"
                        src={images}
                        width="800"
                    />
                    <div className="prose prose-gray max-w-none">
                        <p>
                            As a developer, continuously improving your coding skills is essential for staying competitive and
                            producing high-quality software. In this post, we'll explore 10 tips that can help you write better code
                            and become a more proficient programmer.
                        </p>
                        <h2>1. Write Clean and Readable Code</h2>
                        <p>
                            Clean code is easier to read, maintain, and debug. Follow these principles:
                        </p>
                        <ul>
                            <li>Use meaningful variable and function names</li>
                            <li>Keep functions small and focused on a single task</li>
                            <li>Use consistent indentation and formatting</li>
                            <li>Add comments to explain complex logic, but let your code speak for itself when possible</li>
                        </ul>
                        <h2>2. Practice Regularly</h2>
                        <p>
                            Like any skill, coding improves with practice. Set aside time each day to code, even if it's just for 30
                            minutes. Work on personal projects, contribute to open-source, or solve coding challenges on platforms
                            like LeetCode or HackerRank.
                        </p>
                        <h2>3. Learn from Others</h2>
                        <p>
                            Read other people's code, especially in popular open-source projects. This can expose you to new
                            techniques, best practices, and coding styles. Don't hesitate to ask for code reviews from more
                            experienced developers.
                        </p>
                        {/* More content would go here */}
                    </div>
                </article>
                <section className="container max-w-4xl bg-gray-200  py-12 rounded-[8px]">
                    <div className="">
                        <h2 className="text-2xl font-bold mb-4">About the Author</h2>
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage alt="John Doe" src="/placeholder.svg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold">John Doe</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    John is a senior software engineer with over 10 years of experience in web development. He's
                                    passionate about clean code, performance optimization, and mentoring junior developers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12">
                    <div className="container max-w-4xl">
                        <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {blogs.map((blog, index) => (
                                <BlogsCard key={index} title={blog.title} description={blog.description} date={blog.date} image={images} author={blog.author} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2023 Acme Blog Inc. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </a>
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </a>
                </nav>
            </footer>
        </div>
    )
}