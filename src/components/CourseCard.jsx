import React from 'react'
import { Edit2, Trash2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const CourseCard = ({ image, title, contentName, description, price, offerPrice, }) => {

    const discount = Math.round(((price - offerPrice) / price) * 100)

    return (
        <Card className="max-w-sm mx-auto bg-[#dddddd] rounded-[8px] ">
            <div >
                <img
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className='w-full rounded-ss-[8px] rounded-se-[8px]'
                />
            </div>
            <CardHeader className='py-2 px-4'>
                <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-xl font-bold">{title}</CardTitle>
                    <Badge variant="secondary" className="ml-2 bg-black text-white">
                        {contentName}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="px-4">
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
                <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-primary">₹{offerPrice.toFixed(2)}</span>
                    <span className="ml-2 text-sm line-through text-muted-foreground">₹{price.toFixed(2)}</span>                    
                    <Badge className="ml-2 bg-green-500">
                        {discount}% OFF
                    </Badge>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between px-4">
                <Button variant="outline" size="sm" className="flex items-center rounded-[20px]">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Course
                </Button>
                <Button size="sm" className="flex items-center bg-red-500 text-white rounded-[20px] hover:bg-red-600">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Course
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CourseCard