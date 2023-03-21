import React from 'react'

const Navbar=()=>{
    return(
        <div className='bg-primary text-secondary flex justify-between font-mono font-bold'>
            <div className='flex px-12 py-4 gap-8'>
                <div>Home</div>
            </div>
            <div className='flex px-12 py-4 gap-8'>
                <div>About</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default Navbar;