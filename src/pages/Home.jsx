import React, { useState } from "react";
import Card from "../components/Card";
import { Content } from "../content/content";

const cardsData = Content.cards;

const Home = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = cardsData.filter((item) => {
    const lowerCaseQuery = query.toLowerCase();
    return item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery));
  });

  return (
    <>
      <div>
        <div className="flex justify-center items-center content-center border-transparent	">
          <input
            className="w-2/3 border border-text rounded-full px-6 py-2 focus:border-primary focus:outline-none"
            type="text"
            placeholder="Search Your Favourite AI Tool..."
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
          {filteredItems?.map((items, i) => {
            return (
              <div key={i}>
                <Card
                  title={items.title}
                  logo={items.logo}
                  link={items.link}
                  content={items.content}
                  category={items.category}
                  tags={items.tags}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
