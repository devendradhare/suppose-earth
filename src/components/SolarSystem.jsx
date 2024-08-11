"use client"
import React, { useRef, useState, useEffect } from "react";
import "./solar.css";

const SolarSystem = ({position}) => {
  const rootRef = useRef(null);
  let timestamp_start = new Date("2019-01-01").getTime();
  let timestamp_now = new Date().getTime();
  let secondsLeft = (timestamp_now - timestamp_start) / 1000;
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.setProperty("--seconds-left", `${secondsLeft}s`);
    }
  }, [secondsLeft]);
  // Initialize state for selected options
  const [orbitSize, setOrbitSize] = useState("ideal-orbit-size");
  const [velocity, setVelocity] = useState("one-year-per-minute");
  const [perspective, setPerspective] = useState("threedee");

  // Handler functions to update state when radio buttons are clicked
  const handleOrbitSizeChange = (event) => {
    setOrbitSize(event.target.id);
  };

  const handleVelocityChange = (event) => {
    setVelocity(event.target.id);
  };

  const handlePerspectiveChange = (event) => {
    setPerspective(event.target.id);
  };
  return (
    <div
      id="solarcomproot"
      ref={rootRef}
      style={{
        // position: "absolute",
        // top: position.y,
        // left: position.x,
        width: "1200px",
        height: "900px",
        zIndex: "-1",
        // border: "2px solid blue",
      }}
    >
      <input
        type="radio"
        id="correct-orbit-size"
        name="orbit-size"
        checked={orbitSize === "correct-orbit-size"}
        onChange={handleOrbitSizeChange}
      />

      <input
        type="radio"
        id="ideal-orbit-size"
        name="orbit-size"
        checked={orbitSize === "ideal-orbit-size"}
        onChange={handleOrbitSizeChange}
      />

      <input
        type="radio"
        id="real-time"
        name="velocity"
        checked={velocity === "real-time"}
        onChange={handleVelocityChange}
      />

      <input
        type="radio"
        id="one-year-per-minute"
        name="velocity"
        checked={velocity === "one-year-per-minute"}
        onChange={handleVelocityChange}
      />

      <input
        type="radio"
        id="one-year-per-second"
        name="velocity"
        checked={velocity === "one-year-per-second"}
        onChange={handleVelocityChange}
      />

      <input
        type="radio"
        id="topview"
        name="perspective"
        checked={perspective === "topview"}
        onChange={handlePerspectiveChange}
      />

      <input
        type="radio"
        id="isometric"
        name="perspective"
        checked={perspective === "isometric"}
        onChange={handlePerspectiveChange}
      />

      <input
        type="radio"
        id="threedee"
        name="perspective"
        checked={perspective === "threedee"}
        onChange={handlePerspectiveChange}
      />
      <div className="universe">
        <div className="solarsystem">
          <div className="sun">
            <div className="planet__structure planet__structure--1"></div>
            <div className="planet__structure planet__structure--2"></div>
            <div className="planet__structure planet__structure--3"></div>
            <div className="planet__structure planet__structure--4"></div>
            <div className="planet__structure planet__structure--5"></div>
            <div className="planet__structure planet__structure--6"></div>
          </div>
          <div className="mercury-orbit sun-orbit">
            <div className="ascending-node ascending-node--mercury">
              <div className="inclination inclination--mercury">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--mercury">
                  <div className="planet mercury">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="venus-orbit sun-orbit">
            <div className="ascending-node ascending-node--venus">
              <div className="inclination inclination--venus">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--venus">
                  <div className="planet venus">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="earth-orbit sun-orbit">
            <div className="ascending-node ascending-node--earth">
              <div className="inclination inclination--earth">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--earth">
                  <div className="planet earth">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mars-orbit sun-orbit">
            <div className="ascending-node ascending-node--mars">
              <div className="inclination inclination--mars">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--mars">
                  <div className="planet mars">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="jupiter-orbit sun-orbit">
            <div className="ascending-node ascending-node--jupiter">
              <div className="inclination inclination--jupiter">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--jupiter">
                  <div className="planet jupiter">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="saturn-orbit sun-orbit">
            <div className="ascending-node ascending-node--saturn">
              <div className="inclination inclination--saturn">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--saturn">
                  <div className="planet saturn">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                  <div className="planet-orbit planet-orbit--saturn">
                    <div className="rings-of-saturn"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uranus-orbit sun-orbit">
            <div className="ascending-node ascending-node--uranus">
              <div className="inclination inclination--uranus">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--uranus">
                  <div className="planet uranus">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="neptun-orbit sun-orbit">
            <div className="ascending-node ascending-node--neptun">
              <div className="inclination inclination--neptun">
                <div className="orbit__visual"></div>
                <div className="orbit__shape orbit__shape--neptun">
                  <div className="planet neptun">
                    <div className="planet__structure planet__structure--1"></div>
                    <div className="planet__structure planet__structure--2"></div>
                    <div className="planet__structure planet__structure--3"></div>
                    <div className="planet__structure planet__structure--4"></div>
                    <div className="planet__structure planet__structure--5"></div>
                    <div className="planet__structure planet__structure--6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h1>The Solar System</h1>
        <div className="controls">
          <div className="controls__group">
            <span>Orbit Size:</span>
            <label className="button correct-size" htmlFor="correct-orbit-size">
              Correct
            </label>
            <label className="button ideal-size" htmlFor="ideal-orbit-size">
              Idealized
            </label>
          </div>
          <div className="controls__group">
            <span>Velocity:</span>
            <label className="button real-time" htmlFor="real-time">
              Realtime
            </label>
            <label
              className="button one-year-per-minute"
              htmlFor="one-year-per-minute"
            >
              1 Year / Min
            </label>
            <label
              className="button one-year-per-second"
              htmlFor="one-year-per-second"
            >
              1 Year / Sec
            </label>
          </div>
          <div className="controls__group">
            <span>Perspective:</span>
            <label className="button threedee" htmlFor="threedee">
              3d
            </label>
            <label className="button topview" htmlFor="topview">
              Top
            </label>
            <label className="button isometric" htmlFor="isometric">
              Isometric
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
