import { Entity } from "aframe-react";
import styles from "./Stage.module.css";
import React, { useState, useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

function Stage() {
  console.log("Stage rendering");
  useScript("https://use.typekit.net/foobar.js");

  return (
    <a-scene embedded arjs>
      {/* 
          arjs: allows ar js?
          embedded: ???
          device-orientation-permission-ui="enabled: true" 
       */}
      {/* <div className={styles["stage"]}>tour loading!</div> */}
      <a-assets>
        <img
          crossOrigin="anonymous"
          id="groundTexture"
          src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          alt="floor"
        />
        <img
          crossOrigin="anonymous"
          id="skyTexture"
          src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          alt="sky"
        />
      </a-assets>

      <a-marker-camera preset="hiro"></a-marker-camera>
    </a-scene>
  );
}

export default Stage;
