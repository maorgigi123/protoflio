import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [16, -10],
        scale: 1600
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography style={{
                default: { outline: "none" },
                hover: { outline: "none" },
                pressed: { outline: "none" },
            }} key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      
      <Annotation
        subject={[35.0818155, 31.4117257]}
        dx={-90}
        dy={-60}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Israel"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;