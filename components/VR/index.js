import React, { useState } from "react";
import { Pannellum } from "@georgedrpg/pannellum-react-next";
let myImage = [
  {
    index: 1,
    link: "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg",
  },
  {
    index: 2,
    link: "https://miro.medium.com/max/10752/1*kY8Q5mqqqMz6r8YxcEcU6w.jpeg",
  },
];
function VR() {
  const [state, setstate] = useState(myImage[0]);
  console.log(state.index);
  return (
    <div>
      <Pannellum
        width="100%"
        height="100vh"
        image={state.link}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, name) => setstate(myImage[1])}
          name="hs1"
          text="sdf"
        />
      </Pannellum>
    </div>
  );
}

export default VR;
