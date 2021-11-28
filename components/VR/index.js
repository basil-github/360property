import React, { useEffect, useState } from "react";
import { Pannellum } from "@georgedrpg/pannellum-react-next";
import properties from "../../public/Data/properties.json";

function VR({ properties }) {
  let fistVRid = properties[0].Images[0].vr_image.id;

  const findImage = (id) => {
    const filter = properties[0].Images.filter((img) => {
      if (img.vr_image.id == id) {
        return true;
      }
    });
    return filter;
  };
  const [state, setstate] = useState(findImage(fistVRid));

  return (
    <div className="main_vr">
      <Pannellum
        width="100%"
        height="100vh"
        image={process.env.API_BASE_URL + state[0]?.vr_image?.Image?.url}
        pitch={10}
        yaw={180}
        hfov={1100}
        autoLoad
        hotspotDebug
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        {state[0]?.Hotspot?.map((spot, i) => (
          <Pannellum.Hotspot
            key={i}
            type="custom"
            pitch={spot.pitch}
            yaw={spot.yaw}
            handleClick={(evt, name) => setstate(findImage(spot.vr_image.id))}
            name="hs1"
            text="sdf"
          />
        ))}
      </Pannellum>
      <section className="sub_vr ">
        {state[0].Hotspot.map((img, i) => (
          <div key={i}>
            <img
              width={200}
              src={process.env.API_BASE_URL + img.vr_image?.Image?.url}
              alt=""
              onClick={(evt, name) => setstate(findImage(img.vr_image.id))}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default VR;
