import React from 'react'

const Navbar=()=>{
    return(
        <div className='bg-primary h-12  text-secondary flex justify-between font-mono font-bold px-3 md:px-12 rounded-b-md'>
            <div className='flex items-center text-sm md:text-lg  hover:border-b-4  gap-2 md:gap-6 hover:text-text cursor-pointer'>
                <div>Home</div>
            </div>
            <div className='flex gap-2 md:gap-6'>
            <div className='flex items-center text-sm md:text-lg hover:border-b-4'>
                <div className='hover:text-text cursor-pointer'>Founders</div>
            </div>
            <div className='flex items-center text-sm md:text-lg hover:border-b-4 '>
                <div className='hover:text-text cursor-pointer'>Technologies</div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;