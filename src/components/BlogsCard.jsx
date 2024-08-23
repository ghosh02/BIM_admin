import React from 'react'

const BlogsCard = () => {
  return (
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
  )
}

export default BlogsCard