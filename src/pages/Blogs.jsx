import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import images from "../assets/course.png";
import EditBlog from "@/components/blog/EditBlog";
import ViewBlog from "@/components/blog/ViewBlog";
import AddBlog from "@/components/blog/AddBlog";
import { MoreVertical, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DeleteBlog } from "@/components/blog/DeleteBlog";

export default function Blogs() {
  const blogPosts = [
    { id: 1, title: "Getting Started with React", author: "John Doe", date: "2023-05-15", content: "content 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { id: 2, title: "Advanced TypeScript Techniques", author: "Jane Smith", date: "2023-05-20", content: "content 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { id: 3, title: "Building Scalable Node.js Applications", author: "Bob Johnson", date: "2023-05-25", content: "content 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { id: 4, title: "Introduction to GraphQL", author: "Alice Brown", date: "2023-05-30", content: "content 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { id: 5, title: "Mastering CSS Grid Layout", author: "Charlie Davis", date: "2023-06-05", content: "content 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
  ]


  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Blog Posts</h1>
        <AddBlog />
      </div>
      <Table className="bg-white rounded-[8px]">
        <TableHeader>
          <TableRow>
            <TableHead className= "font-bold text-center">Title</TableHead>
            <TableHead className="text-center font-bold">Description</TableHead>
            <TableHead className= "text-center font-bold">Author</TableHead>
            <TableHead className= "text-center font-bold">Date</TableHead>
            <TableHead className='text-center font-bold'>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-bold w-[250px]">{post.title}</TableCell>
              <TableCell className="w-[350px] text-justify">
                {post.description}
              </TableCell>
              <TableCell className="font-bold text-center">{post.author}</TableCell>
              <TableCell className= "text-center">{post.date}</TableCell>
              <TableCell className="flex justify-center"><img src={images} alt='Blog Image' width={200} className="rounded-[10px]"/></TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" >
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white rounded-[8px]"  >
                    <div className="flex flex-col justify-start p-0">
                      <ViewBlog />
                      <EditBlog title={post.title} description={post.description} authorName={post.author} date={post.date} content={post.content}/>
                      <DeleteBlog/>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}