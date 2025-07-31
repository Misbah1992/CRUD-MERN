import React from 'react'

function Navbar() {
    return (
        <div className='w-full flex justify-between h-16 items-center bg-gray-200 shadow'>
            <div className='w-[10%] flex items-center h-full ml-8'>
                <h1 className='font-bold text-zinc-800'>LOGO</h1>
            </div>
            <div className='w-[50%] h-full'>
                <ul className='w-full h-full flex gap-6 list-none items-center text-zinc-800 font-mediums'>
                    <li className='cursor-pointer'>HOME</li>
                    <li className='cursor-pointer'>ABOUT</li>
                    <li className='cursor-pointer'>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
