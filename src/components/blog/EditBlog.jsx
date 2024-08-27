import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Edit } from "lucide-react"
import { useState } from "react"


const EditBlog = ({title, description, authorName, date, about, imageUrl}) => {

    const [form, setForm] = useState({
        id: null,
        title: title,
        description: description,
        about: about,
        authorName: authorName,
        date: date,
        image: "",
    });

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
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
                                <label htmlFor="title">Author Name</label>
                                <input
                                    type="text"
                                    name="authorName"
                                    placeholder="Author Name"
                                    value={form.authorName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Date</label>
                                <textarea
                                    name="date"
                                    placeholder="Date"
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-[8px] outline-none"
                                />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <label htmlFor="title">Content</label>
                                <textarea
                                    name="content"
                                    placeholder="About"
                                    value={form.about}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-[150px] px-3 py-2 border rounded-[8px] outline-none"
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
                                    src={image}
                                    alt="Course"
                                    className="mt-2 w-32 h-32 object-cover"
                                />
                            )}
                        </div>
                        <DialogClose asChild>
                            <button
                                type="submit"
                                className="bg-pink text-white py-2 rounded-[8px] my-[12px] w-full mt-6 "
                            >
                            Edit Blog
                            </button>
                        </DialogClose>
                    </form>
                </div>
            </DialogContent>

        </Dialog>
    )
}

export default EditBlog