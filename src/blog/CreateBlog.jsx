import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import "react-phone-input-2/lib/style.css";

function CreateBlog() {

    const [form, setForm] = useState({
        id: null,
        title: "",
        description: "",
        content: "",
        authorName: "",
        date: "",
        image: "",
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

    // const containerStyle = {
    //     width: "100%",
    //     height: "49px",
    //     border: "1px solid #fff",
    //     borderRadius: "8px",
    // };
    // const [show, setShow] = useState(false);
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
        <div className="flex-1 mx-[32px] mt-[32px]">
            <Link to="/blog">
                <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
                    <IoMdArrowBack />
                    <p>Back</p>
                </div>
            </Link>
            <div className=" p-[20px] bg-[#fff] rounded-[8px] mb-10">
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
                                type="number"
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
                    <button
                        type="submit"
                        className="bg-pink text-white px-6 py-4 rounded-[8px] my-[12px] "
                    >
                        {form.id ? "Update Blog" : "Add Blog"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
