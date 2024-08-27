import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { FaPlus } from "react-icons/fa6"


const AddBlog = () => {

    const [form, setForm] = useState({
        id: null,
        title: "",
        description: "",
        content: "",
        authorName: "",
        date: "",
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
                <Button variant="outline" className="flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
                    <span>
                        <FaPlus size={14} />
                    </span>
                    Add Blog
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
                                    placeholder="Content"
                                    value={form.content}
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
                                    src={form.image}
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
                                Add Blog
                            </button>
                        </DialogClose>
                    </form>
                </div>
            </DialogContent>

        </Dialog>
    )
}

export default AddBlog