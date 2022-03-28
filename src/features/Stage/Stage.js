import React, { useEffect } from "react";
import { AScene, AEntity } from "aframe";

const waypoint = {
  id: 1,
  name: "JHB Ramp",
  latitude: 51.755291,
  longditude: -1.225515,
};

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
  //https://aframe.io/blog/arjs/
  // useScript("https://aframe.io/releases/0.6.0/aframe.min.js");
  // useScript("https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js");
  //Basically, you can add gps-entity-place - custom aframe entities that have a specific longitude/latitude values.

  //needed aframe entities:
  //- gps-camera
  //- gps-entity-place
  // "and added the gps-camera on the camera entity"

  return (
    <a-scene embedded arjs>
      <a-box position="0 0.5 0" material="opacity: 0.5;"></a-box>
      {/* <a-marker-camera preset="hiro"></a-marker-camera> */}
      <a-camera gps-camera rotation-reader></a-camera>
      <a-box
        color="yellow"
        gps-entity-place={
          "latitude: " +
          waypoint.latitude +
          "; longitude: " +
          waypoint.longditude
        }
      />

      {/* 
          arjs: allows ar js?
          embedded: ???
          device-orientation-permission-ui="enabled: true" 
       */}
      {/* <div className={styles["stage"]}>tour loading!</div> */}
      {/* <a-assets>
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

      <a-marker-camera preset="hiro"></a-marker-camera> */}
    </a-scene>
  );
}

export default Stage;
