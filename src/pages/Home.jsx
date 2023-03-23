import React from 'react'
import Card from '../components/Card';
import { Content } from '../content/content';

const Home=()=>{
    
    const cardsData = Content.cards;
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-12'>
           {cardsData?.map((items,i)=>{
            return(
                <div>
                    <Card title={items.title} logo={items.logo} link={items.link} content={items.content} category={items.category} tags={items.tags} />
                </div>
            )
           })}
        </div>
    )
}
export default Home;