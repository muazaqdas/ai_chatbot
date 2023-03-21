import React from 'react'

const Goals=()=>{
    return(
        <div>
            <p className='text-4xl font-bold'>Goals of this project are</p>
            <div className='text-text'>
                <ul className='text-success'>
                    <li className='border-b-2'>Landing page list various Ai webistes</li>
                    <li className='border-b-2'>Each Ai webiste is a Card, where its name , a little description and its link will be there.</li>
                    <li className='border-b-2'>There will also be tags related to that Ai's working,tags will be at the bottom of the card, with highlited bg and rounded div</li>
                </ul>
            </div>
        </div>
    )
}

export default Goals;