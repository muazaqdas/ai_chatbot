import React from 'react'

const Navbar=()=>{
    return(
        <div className='bg-primary  text-secondary flex justify-between font-mono font-bold px-3 md:px-12 rounded-b-md'>
            <div className='flex py-4 gap-8'>
                <div>Home</div>
            </div>
            <div className='flex  py-4 gap-8'>
                <div>Founders</div>
                <div>Technologies</div>
            </div>
        </div>
    )
}

export default Navbar;