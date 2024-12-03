/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/DeskPort.jpg";

const imageAltText = "Desk with a laptop, coffee cup, and a plant on the side";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from a GitHub template i found working on a course of theirs, this site is a great way to showcase your work and experience.",
    url: "https://github.com/ArdianKadriu/Portfolio",
  },
  {
    title: "GitHub Codespaces",
    description:
      "The Codespace course from the Student Developer Pack in GitHub, I included the finished product below.",
    url: "https://github.com/ArdianKadriu/skills-code-with-codespaces",
  },
  {
    title: "GitHub Introduction",
    description:
      "The introduction to the Student Developer Pack course in GitHub, find the completed repo below.",
    url: "https://github.com/ArdianKadriu/skills-introduction-to-github",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ position: "relative" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
        <img
          src={image}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
            zIndex: 0,
          }}
          alt={imageAltText}
        />
      </div>
    </section>
  );
};

export default Portfolio;
