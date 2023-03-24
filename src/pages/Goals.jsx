import React from 'react'

function toggle(){
   
}
const Goals=()=>{
    return(
        <div>
            <p className='text-4xl font-bold'>Goals of this project are</p>
            <div className='text-text'>
                <ul className='text-success flex flex-col gap-2 mt-12'>
                    <li className='border-b-2'>Landing page list various Ai webistes</li>
                    <li className='border-b-2'>Each Ai webiste is a Card, where its name , a little description and its link will be there.</li>
                    <li className='border-b-2'>There will also be tags related to that Ai's working,tags will be at the bottom of the card, with highlited bg and rounded div</li>
                    <li className='border-b-2'>On top of the home page, we will have all the logos of all the ai tools scattered, bubbles like with shadow, and on scrolling down the screen wont move but the bubbles will come closer and then slowly joins to form a box with circular corners, written on it in big font - "AI"</li>
                    <li className='border-b-2'>List about all the founders and co founders of these ai tools in a seperate page , with heading "Founders"</li>
                    <li className='border-b-2'>List of all the ml or ai tech used and about them in a seperate page , with heading "Technologies Behind"</li>
                    <p class="truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod augue vitae massa bibendum, eu cursus magna ultrices.
                    <span class="hidden"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam mollis lectus vel augue accumsan, non varius orci egestas.</span>
                    <a href="#" class="text-blue-500" onClick={()=>{
                         const hiddenText = document.querySelector('.truncate .hidden');
    const moreLink = document.querySelector('.truncate a');

    if (hiddenText.classList.contains('hidden')) {
      hiddenText.classList.remove('hidden');
      moreLink.textContent = '...less';
    } else {
      hiddenText.classList.add('hidden');
      moreLink.textContent = '...more';
    }
                    }}>...more</a>
                    </p>
                </ul>
            </div>
        </div>
    )
}

export default Goals;