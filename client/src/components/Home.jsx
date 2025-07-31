import React from 'react'

function Home() {
    return (
        <div className='w-full px-5 min-h-[calc(100vh-60px)]'>
            <div className='w-full grid grid-cols-5 gap-3 my-4'>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Book Name</label>
                    <input type='text' placeholder='Book Name' className='w-full text-gray-800 border border-gray-300 border-2 rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Book Title</label>
                    <input type='text' placeholder='Book Title' className='w-full text-gray-800 border border-gray-300 border-2 rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Author</label>
                    <input type='text' placeholder='Author' className='w-full text-gray-800 border border-gray-300 border-2  rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Selling Price</label>
                    <input type='text' placeholder='Selling Price' className='w-full text-gray-800 border border-gray-300 border-2  rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor=''>Published Date</label>
                    <input type='date' placeholder='Published Date' className='w-full text-gray-800 border border-gray-300 border-2  rounded-sm outline-1 outline-gray-500 h-8 px-2' />
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <button className='bg-gray-700 text-white h-10 w-22 rounded-md cursor-pointer'>SUBMIT</button>
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
                            <tr className='hover:bg-gray-200'>
                                <td className='px-6 py-3 whitespace-nowrap'>NAME</td>
                                <td className='px-6 py-3 whitespace-nowrap'>NAME</td>
                                <td className='px-6 py-3 whitespace-nowrap'>NAME</td>
                                <td className='px-6 py-3 whitespace-nowrap'>NAME</td>
                                <td className='px-6 py-3 whitespace-nowrap'>NAME</td>
                                <td className='px-6 py-3 whitespace-nowrap'>NAME</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
