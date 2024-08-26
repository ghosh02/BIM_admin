import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const BlogsCard = ({ title, description, date, image, author }) => {

    const navigate = useNavigate();

    return (
        <Card className="flex flex-col overflow-hidden rounded-[8px] bg-[#dddddd]">
            <div className="flex h-[200px] w-full">
                <img
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className='w-full '
                />
            </div>
            <CardHeader >
                <div className="flex  items-center mb-2">
                    <p className="text-sm font-medium">{author}</p>
                    <span> &nbsp; • &nbsp; </span>
                    <p className="text-sm text-muted-foreground">{date}</p>
                </div>
                <p className="text-xl font-semibold">{title}</p>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full rounded-[4px] hover:bg-[#bcbcbc]" onClick={() => { navigate('/blogPost') }}>Read More</Button>
            </CardFooter>
        </Card>
    )
}

export default BlogsCard