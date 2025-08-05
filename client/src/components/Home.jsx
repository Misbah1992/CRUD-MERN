import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";


function Home() {
    const [bookForm, setBookForm] = useState({
        BookName: "",
        BookTitle: "",
        Author: "",
        SellingPrice: "",
        PublishDate: ""
    })

    const [bookList, setBookList] = useState([])
    const [id, setId] = useState(null)

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setBookForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    

    const getAllBookList = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/book/booklists");
            setBookList(data?.BookList)
            console.log("booklist", data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async () => {
        console.log(id)
        if (id) {


            const { data } = await axios.put("http://localhost:8000/book/updatebook", { ...bookForm, _id: id });
            
            if (data?.Success) {
                setBookForm({
                    BookName: "",
                    BookTitle: "",
                    Author: "",
                    SellingPrice: "",
                    PublishDate: "",
                });
                
                setId(null);
                getAllBookList();
            }
        }
        else {
            const { data } = await axios.post("http://localhost:8000/book/addbook", bookForm);
            if (data?.Success) {
                setBookForm({
                    BookName: "",
                    BookTitle: "",
                    Author: "",
                    SellingPrice: "",
                    PublishDate: ""
                })
            }
              
        }

    }
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.post("http://localhost:8000/book/deletebook", {
                Id: id,
            });
            if (data?.Success) {
                getAllBookList();
            }
        } catch (error) {
            console.log(error)

        }
    }
    const handleUpdate = async (data) => {
        setId(data._id)
        setBookForm({
            BookName: data.BookName,
            BookTitle: data.BookTitle,
            Author: data.Author,
            SellingPrice: data.SellingPrice,
            PublishDate: data.PublishDate
        });

    }
    useEffect(() => {
        getAllBookList()
    }, [])

    return (
        <div className='w-full px-5 min-h-[calc(100vh-60px)]'>
            <div className='w-full grid grid-cols-5 gap-3 my-4'>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Book Name</label>
                    <input type='text'
                        name="BookName"
                        value={bookForm.BookName}
                        onChange={handleFormChange}
                        placeholder='Book Name' className='w-full text-gray-800  border-gray-300 border-2 rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Book Title</label>
                    <input type='text'
                        name="BookTitle"
                        value={bookForm.BookTitle}
                        onChange={handleFormChange}
                        placeholder='Book Title' className='w-full text-gray-800  border-gray-300 border-2 rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Author</label>
                    <input type='text'
                        name="Author"
                        value={bookForm.Author}
                        onChange={handleFormChange}
                        placeholder='Author' className='w-full text-gray-800  border-gray-300 border-2  rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Selling Price</label>
                    <input type='text'
                        name="SellingPrice"
                        value={bookForm.SellingPrice}
                        onChange={handleFormChange}
                        placeholder='Selling Price' className='w-full text-gray-800  border-gray-300 border-2  rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Published Date</label>
                    <input type='date'
                        name="PublishDate"
                        value={bookForm.PublishDate}
                        onChange={handleFormChange}
                        placeholder='Published Date' className='w-full text-gray-800  border-gray-300 border-2  rounded-sm outline-1 outline-gray-500 h-8 px-2'
                    />
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button onClick={handleSubmit} className='bg-gray-700 text-white h-10 w-22 rounded-md cursor-pointer'>SUBMIT</button>
            </div>
            <div className='w-full mt-10'>
                <div className='w-full'>
                    <table className='w-full bg-white divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Book Name</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Book Title</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Author</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Selling Price</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Publish Date</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {
                                bookList?.map((book, index) => {
                                    return (
                                        <tr key={index} className='hover:bg-gray-200'>
                                            <td className='px-6 py-3 whitespace-nowrap font-bold text-gray-700 font-serif'>{book?.BookName}</td>
                                            <td className='px-6 py-3 whitespace-nowrap font-bold text-gray-700 font-serif'>{book?.BookTitle}</td>
                                            <td className='px-6 py-3 whitespace-nowrap font-bold text-gray-700 font-serif'>{book?.Author}</td>
                                            <td className='px-6 py-3 whitespace-nowrap font-bold text-gray-700 font-serif'>{book?.SellingPrice}</td>
                                            <td className='px-6 py-3 whitespace-nowrap font-bold text-gray-700 font-serif'>{book?.PublishDate}</td>
                                            <td className='px-6 py-3 whitespace-nowrap text-red-700 font-serif'><div className='flex space-x-3'><span onClick={() => handleDelete(book._id)}><MdDelete /></span><span onClick={() => handleUpdate(book)}><FaPen style={{ color: "green" }} /></span></div></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
