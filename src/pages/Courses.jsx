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
import { MoreVertical, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import AddCourse from "@/components/course/AddCourse";
import EditCourse from "@/components/course/EditCourse";
import ViewCourse from "@/components/course/ViewCourse";
import { DeleteCourse } from "@/components/course/DeleteCourse";

export default function Courses() {
  const blogPosts = [
    { id: 1, title: "Getting Started with React", Content: "Content 1", Price: "100", offerPrice: "80", description: "Lorem ipsum dolor sit amet", instructor: "John Doe", enrolledStudent: "30" },
    { id: 2, title: "Advanced TypeScript Techniques", Content: "Content 2", Price: "100", offerPrice: "80", description: "Lorem ipsum dolor sit amet",instructor: "Ronald Richards", enrolledStudent: "20" },
    { id: 3, title: "Building Scalable Node.js Applications", Content: "Content 3", Price: "100", offerPrice: "80", description: "Lorem ipsum dolor sit amet",instructor: "John Doe", enrolledStudent: "16" },
    { id: 4, title: "Introduction to GraphQL", Content: "Content 4", Price: "100", offerPrice: "80", description: "Lorem ipsum dolor sit amet",instructor: "John Doe", enrolledStudent: "62" },
    { id: 5, title: "Mastering CSS Grid Layout", Content: "Content 5", Price: "100", offerPrice: "80", description: "Lorem ipsum dolor sit amet",instructor: "Wade Warren", enrolledStudent: "43" },
  ]


  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <AddCourse/>
      </div>
      <Table className="bg-white rounded-[8px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold">Title</TableHead>
            <TableHead className="text-center font-bold">Instructor</TableHead>
            <TableHead className="text-center font-bold">Enrolled Student</TableHead>
            <TableHead className='text-center font-bold'>Content</TableHead>
            <TableHead className='text-center font-bold'>Price</TableHead>
            <TableHead className='text-center font-bold'>Offer Price</TableHead>
            <TableHead className='text-center font-bold'>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-bold w-[200px]">{post.title}</TableCell>
              <TableCell className=" text-center font-bold">
                {post.instructor}
              </TableCell>
              <TableCell className=" text-center">
                {post.enrolledStudent}
              </TableCell>
              <TableCell className="text-center">
                {post.Content}
                </TableCell>
              <TableCell className='text-center'>₹{post.Price}</TableCell>
              <TableCell className='text-center'>₹{post.offerPrice}</TableCell>
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
                      <ViewCourse />
                      <EditCourse title={post.title} description={post.description} content={post.Content} price={post.Price} offerPrice={post.offerPrice}/>
                      <DeleteCourse/>
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