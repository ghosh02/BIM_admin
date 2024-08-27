import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"
import images from "../../assets/course.png";

const ViewDialog = () => {

    const blogPost = {
        id: 1,
        title: "Getting Started with React",
        excerpt: "Learn the basics of React and start building your first component.",
        content: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components that can be composed to build complex applications. In this blog post, we'll cover the fundamental concepts of React, including components, props, and state. We'll also walk through creating your first React component and explain how to think in React. By the end of this post, you'll have a solid foundation to start building your own React applications.\n\nTo get started with React, you'll need to have Node.js installed on your computer. Once you have Node.js, you can create a new React project using Create React App, a tool that sets up a new React project with a good default configuration. Here's how to do it:\n\n1. Open your terminal\n2. Run the following command: npx create-react-app my-first-react-app\n3. Once the installation is complete, navigate to your project folder: cd my-first-react-app\n4. Start the development server: npm start\n\nNow you're ready to start building your first React component!",
        date: "2023-05-15",
      }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" >
                    <Eye className="h-4 w-4" />
                    <span>&nbsp; View</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-white !rounded-[10px]">
                <DialogHeader>
                    <DialogTitle>{blogPost.title}</DialogTitle>
                    <DialogDescription>Published on {blogPost.date}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] w-full pr-4">
                    <img
                        src={images}
                        alt="Blog post illustration"
                        className="w-full h-48 object-cover rounded-[10px] mb-4"
                    />
                    <p className="text-foreground whitespace-pre-line">{blogPost.content}</p>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}

export default ViewDialog