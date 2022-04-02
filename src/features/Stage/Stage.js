import React, { useEffect } from "react";
// import { AScene, AEntity } from "aframe";
import "aframe";
import {
  Box,
  Sphere,
  Cylinder,
  Plane,
  Sky,
  Text,
  Scene,
  Camera,
} from "react-aframe-ar";

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
  //needed aframe entities:
  //- gps-camera
  //- gps-entity-place
  // "and added the gps-camera on the camera entity"

  return (
    <Scene>
      {/* <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
      <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
      <Cylinder
        position="1 0.75 -3"
        radius="0.5"
        height="1.5"
        color="#FFC65D"
        shadow
      />
      <Plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"
        shadow
      />
      <Sky color="#ECECEC" />
      <Text
        value="Hello world, react-aframe-ar!"
        align="center"
        position="0 2.3 -1.5"
        color="#7BC8A4"
      /> */}
      <Box position="0 0.5 0" material="opacity: 0.5;"></Box>
      {/* <MarkerCamera preset="hiro"></MarkerCamera> */}
      <Camera gps-camera rotation-reader />
      <Box
        color="yellow"
        gps-entity-place={
          "latitude: " +
          waypoint.latitude +
          "; longitude: " +
          waypoint.longditude
        }
      />
    </Scene>

    // <a-scene embedded arjs>
    //   <a-box position="0 0.5 0" material="opacity: 0.5;"></a-box>
    //   {/* <a-marker-camera preset="hiro"></a-marker-camera> */}
    //   <a-camera gps-camera rotation-reader></a-camera>
    //   <a-box
    //     color="yellow"
    //     gps-entity-place={
    //       "latitude: " +
    //       waypoint.latitude +
    //       "; longitude: " +
    //       waypoint.longditude
    //     }
    //   />
    // </a-scene>
  );
}

export default Stage;
