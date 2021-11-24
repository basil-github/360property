import React, { useEffect, useState } from "react";
import { Pannellum } from "@georgedrpg/pannellum-react-next";
import properties from "../../public/Data/properties.json";

function VR() {
  const [state, setstate] = useState(properties[0].images[0]);
  //console.log(state);

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
        {state?.hotspot?.map((spot, i) => (
          <Pannellum.Hotspot
            key={i}
            type="custom"
            pitch={spot.pitch}
            yaw={spot.yaw}
            handleClick={(evt, name) =>
              setstate(properties[0].images[spot.index])
            }
            name="hs1"
            text="sdf"
          />
        ))}
      </Pannellum>
      {/* {state.index == 1 && components && (
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
          hotspotDebug
        >
          <Pannellum.Hotspot
            type="custom"
            pitch={posi}
            yaw={500}
            handleClick={(evt, name) => setstate(myImage[1])}
            name="hs1"
            text="sdf"
          />
          <Pannellum.Hotspot
            type="custom"
            pitch={20.596368557706256}
            yaw={-84.6974409999092}
            handleClick={(evt, name) => setstate(myImage[1])}
            name="hs1"
            text="sdf"
          />
        </Pannellum>
      )} */}
    </div>
  );
}

export default VR;
