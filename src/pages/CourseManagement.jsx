import React, { useState } from "react";
import images from "../assets/course.png";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
const CourseManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Course 1",
      description: "Description 1",
      content: "Content 1",
      price: 100,
      offerPrice: 80,
      image: images,
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description 2",
      content: "Content 2",
      price: 150,
      offerPrice: 120,
      image: images,
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
    {
      id: 4,
      title: "Course 4",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
    {
      id: 5,
      title: "Course 5",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
    {
      id: 6,
      title: "Course 6",
      description: "Description 3",
      content: "Content 3",
      price: 200,
      offerPrice: 180,
      image: images,
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    content: "",
    price: "",
    offerPrice: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      // Update existing course
      setCourses(
        courses.map((course) => (course.id === form.id ? form : course))
      );
    } else {
      // Add new course
      const newCourse = {
        id: Date.now(),
        ...form,
      };
      setCourses([...courses, newCourse]);
    }
    setForm({
      id: "",
      title: "",
      description: "",
      content: "",
      price: "",
      offerPrice: "",
      image: null,
    });
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleEdit = (course) => {
    setForm(course);
  };
  const defaultImage = "https://via.placeholder.com/150"; // Default image URL

  return (
    <div className="flex-1 p-[32px]   ">
      <div className="flex justify-between items-center mb-[24px]">
        <h1 className="text-[24px] text-darkgray font-[700] pl-[10px] pb-[24px]">
          Course Managenent
        </h1>

        <Link to="createCourse">
          <button className=" flex gap-3 items-center justify-center text-[#fff] text-[16px] font-[600] bg-pink px-[10px] py-[8px] rounded-[4px]">
            <span>
              <FaPlus size={14} />
            </span>
            Create Course
          </button>
        </Link>
      </div>


      {/* <form onSubmit={handleSubmit}>
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
              className="w-[40%] px-3 py-2 border rounded-[8px] outline-none"
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
              className="w-[40%] px-3 py-2 border rounded-[8px] outline-none"
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
              className="w-[40%] px-3 py-2 border rounded-[8px] outline-none"
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
              className="w-[40%] h-[150px] px-3 py-2 border rounded-[8px] outline-none"
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
              className="w-[40%] h-[150px] px-3 py-2 border rounded-[8px] outline-none"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="title">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-[40%] px-3 py-2 border rounded-[8px] outline-none"
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
          className="bg-pink text-white px-4 py-2 rounded-[8px] my-[12px]"
        >
          {form.id ? "Update Course" : "Add Course"}
        </button>
      </form> */}
      <ul className="grid grid-cols-4 gap-5 py-4">
        {courses.map((course) => (
          <li
            key={course.id}
            className="p-4 bg-[#eee] rounded-[8px]  shadow-sm"
          >
            <img
              src={course.image || defaultImage}
              alt={course.title}
              className="w-80 h-60 object-cover rounded-[8px]"
            />
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-700">{course.description}</p>
            <p className="text-gray-500">{course.content}</p>
            <p className="text-gray-500">Price: ${course.price}</p>
            <p className="text-gray-500">Offer Price: ${course.offerPrice}</p>

            <button
              onClick={() => handleEdit(course)}
              className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-[8px] hover:bg-yellow-600 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(course.id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded-[8px] hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManagement;
