import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Edit } from "lucide-react"
import { useState } from "react"


const EditCourse = ({title, description, content, price, offerPrice}) => {

    const [form, setForm] = useState({
        id: null,
        title: title,
        description: description,
        content: content,
        price: price,
        offerPrice: offerPrice,
        image: "",
        video: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, image: URL.createObjectURL(file) });
        }
    };

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        alert("submitted");
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    <Edit className="h-4 w-4" />
                    <span>&nbsp; Edit</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-white !rounded-[10px]">
                <div className=" bg-[#fff] rounded-[8px]">
                    <h1 className="font-[600] text-[20px] mb-5">General information</h1>
                    <form onSubmit={handleSubmit} >
                        <div className=" flex flex-col gap-4">
                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={form.title}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>

                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    value={form.price}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>

                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Offer price</label>
                                <input
                                    type="number"
                                    name="offerPrice"
                                    placeholder="Offer Price"
                                    value={form.offerPrice}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Description</label>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    value={form.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-[80px] px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Content</label>
                                <textarea
                                    name="content"
                                    placeholder="Content"
                                    value={form.content}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-[80px] px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Video</label>
                                <input
                                    type="file"
                                    name="video"
                                    onChange={handleImageChange}
                                    className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Thumbnail Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleImageChange}
                                    className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>
                            {form.image && (
                                <img
                                    src={form.image}
                                    alt="Course"
                                    className="mt-2 w-32 h-32 object-cover"
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-pink text-white py-2 rounded-[8px] mt-3 w-full"
                        >
                            Edit Course
                        </button>
                    </form>
                </div>
            </DialogContent>

        </Dialog>
    )
}

export default EditCourse