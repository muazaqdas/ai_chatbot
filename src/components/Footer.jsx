import React from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-primary text-secondary flex justify-center font-mono font-bold">
      <div className="flex px-12 py-4 gap-8 content-center justify-center text-xl md:text-3xl">
        <CiLinkedin />
        <VscGithub />
        <CiInstagram />
      </div>
    </div>
  );
};

export default Footer;
