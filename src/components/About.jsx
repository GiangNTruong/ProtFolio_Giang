import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul>
          <li>
            <strong>Degree:</strong> Good, Posts and Telecommunications
            Institute of Technology
            <br />
            <span>
              <strong>Course:</strong> 2019-2024,<strong>Major: </strong>{" "}
              Telecommunication
            </span>
          </li>
          <li>
            <strong>Rikkei Academy Full Stack Course:</strong> 2024
          </li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul>
          <li>
            <strong>Web Development:</strong> Building responsive and engaging
            websites.
          </li>
          <li>
            <strong>BackEnd Development:</strong> Designing RESTful APIs that
            allow third-party systems and services to communicate.
          </li>
          <li>
            <strong>FrontEnd Development:</strong> User Interface (UI) Design,
            User Experience (UX) Design, Responsive Design.
          </li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <ul>
          <li>
            <strong>Simple E-commerce Website:</strong> Using HTML, CSS, and JS
          </li>
          <li>
            <strong>Contract and Project Management:</strong> Using Java,
            displayed in the console
          </li>
          <li>
            <strong>Movie Streaming Website:</strong> Built as a group project
            using Spring MVC, Thymeleaf, and MySQL
          </li>
          <li>
            <strong>Movie Ticket Booking Website:</strong> Built as a group
            project using Spring Boot, ReactJS, and MySQL
          </li>
        </ul>

        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          I am committed to continuous learning and growth, always seeking new
          challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
