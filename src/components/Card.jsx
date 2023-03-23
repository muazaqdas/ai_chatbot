import React from "react";

const Card = ({ title, logo, link, content, category, tags }) => {
  return (
    <div className="p-8 shadow-xl rounded-xl">
      <a href={link}>
        <div className="">
          <div className="flex content-center items-center">
            <img className="w-20 h-20" src={logo} alt="logo" />
            <p className="font-bold text-2xl">{title}</p>
          </div>
          <p className="text-xs md:text-sm">{content}</p>
          <div className="flex text-xs md:text-sm gap-2 my-4">
            {tags.map((items, i) => {
              return <p className="text-center bg-success text-secondary rounded-full py-1.5 px-2.5  w-auto">{items}</p>;
            })}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
