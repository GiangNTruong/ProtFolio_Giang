import React from "react";
import java from "../../public/java.png";
import reactjs from "../../public/reactjs.png";
import springBoot from "../../public/springBoot.jpg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "ReactJS",
      description: "A  PortFolio  project built with ReactJS.",
      gitHubLink: "https://github.com/GiangNTruong/ProtFolio_Giang",
    },
    {
      id: 2,
      logo: java,
      name: "Java",
      description: "A project about customer management.",
      gitHubLink: "https://github.com/GiangNTruong/Project_KetThucSesssion02",
    },
    {
      id: 3,
      logo: springBoot,
      name: "SpringBoot",
      description: "A RESTful API project using Spring Boot framework.",
      gitHubLink: "https://github.com/GiangNTruong/Module04_Api_Project",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, gitHubLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button
                  onClick={() => (window.location.href = gitHubLink)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
