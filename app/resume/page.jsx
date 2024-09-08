"use client";

import React, { useEffect } from "react";
import "../resume/page.css";

// Importing TagCloud package
import TagCloud from "TagCloud";
import MyTagcloud from "./MyTagcloud";

const Resume = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere" id="resume">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
        <MyTagcloud />
      </div>
    </>
  );
};

export default Resume;