import React from "react";
import {RxExternalLink} from 'react-icons/rx'
import TruncatedText from "./TruncatedText";

const Card = ({ title, logo, link, content, category, tags }) => {
  return (
    <div className="p-8 shadow-xl rounded-xl min-h-72 hover:scale-105 duration-100">
      <div className="">
        <div className="flex flex-col xs:flex xs:flex-row justify-center content-center items-center">
          <img className="w-14 h-14 xs:w-20 xs:h-20" src={logo} alt="logo" />
          <p className="font-mono font-bold text-xl xs:text-2xl ">{title}</p>
        </div>
        <div className="text-justify xs:text-center text-xs md:text-sm">
        <TruncatedText text={content} limit={70}/>
          {/* {content} */}
        </div>
        <div className="xs:flex text-xs md:text-sm gap-2 my-4 content-center justify-center items-center">
          {tags.map((items, i) => {
            return (
              <div
                key={i}
                className="bg-text text-center border border-success shadow-sm shadow-success text-secondary rounded-full py-1.5 px-2.5 my-0.5 xs:my-0"
              >
                {items}
              </div>
            );
          })}
        </div>
        <div className="flex gap-x-4 justify-between items-center pt-4">
          <div className="bg-slate-100 text-sm py-0.5 px-2 rounded-md font-semibold cursor-pointer">How To Use ? </div>
          <a href={link} target="_blank" rel="noreferrer">
            <RxExternalLink className="w-5 h-5 text-success" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
