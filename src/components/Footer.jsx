import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/giang.huyeng.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareFacebook size={24} />
              </a>
              <a
                href="https://github.com/GiangNTruong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkRSv5k8LJGMXjd8Cj5p8Hg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/tr.giang.ng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                © 2024 My Portfolio. All rights reserved
              </p>
              <p className="text-sm"> Designed with ❤️ by Me.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
