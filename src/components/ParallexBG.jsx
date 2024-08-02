import Image from "next/image";
// images

import blueDots from "/public/Blue_Dots.svg";
import whiteDots from "/public/White_Dots.svg";
import Planet3 from "/public/Planet3-sketch.svg";
import mars from "/public/mars.svg";
import uranus from "/public/uranus.svg";
import logo from "/public/logo.png";

const ParallexBG = () => {
  return (
    <div className="parallexImgs">
      <Image
        style={{
          transform: "translateZ(-5px) scale(1.23)",
          minWidth: "1000px",
          width: "1000px",
          height: "100%",
          objectFit: "fill",
        }}
        src={blueDots}
        width={1000}
        height={1000}
      />
      <Image
        style={{
          transform: "translateZ(-10px)",
          minWidth: "1000px",
          width: "1000px",
          height: "100%",
          position: "absolute",
          top: "100px",
          left: "200px",
        }}
        src={blueDots}
        width={1000}
        height={1000}
      />
      {/* <Image
        style={{
          transform: "translateZ(-10px)",
          minWidth: "1000px",
          width: "1000px",
          height: "100%",
          position: "absolute",
          top: "-100px",
          left: "-100px",
        }}
        src={blueDots}
        width={1000}
        height={1000}
      /> */}
      {/* <Image
        style={{
          transform: "translateZ(-40px) scale(1.5)",
          minWidth: "1000px",
        }}
        src={whiteDots}
        width={1000}
        height={1000}
      /> */}
        {/* <Image
          style={{
            transform: "translateZ(-5px) scale(1.23)",
            minWidth: "1000px",
          }}
          src={whiteDots}
          width={1000}
          height={1000}
        /> */}
      {/* <Image
        style={{
          transform: "translateZ(-10px)",
          minWidth: "1000px",
          width: "1000px",
          height: "100%",
          position: "absolute",
          top: "-100px",
          left: "-100px",
        }}
        src={whiteDots}
        width={1000}
        height={1000}
      /> */}
      <Image
        style={{
          transform: "translateZ(-10px)",
          top: "-100px",
          left: "500px",
          minWidth: "1000px",
          width: "1000px",
          height: "100%",
          position: "absolute",
        }}
        src={whiteDots}
        width={1000}
        height={1000}
      />
      <Image
        style={{
          transform: "translateZ(-10px) scale(3) rotate(15deg)",
          top: "0px",
          left: "0px",
          maxWidth: "100px",
          width: "10%",
          position: "absolute",
          opacity: "0.3"
        }}
        src={logo}
        width={180}
        height={1}
      />
      {/* <Image
        style={{
          transform: "translateZ(-30px) scale(3) rotate(15deg)",
          bottom: "-150%",
          right: "50%",
          maxWidth: "100px",
          width: "10%",
          position: "absolute",
        }}
        src={logo}
        width={180}
        height={1}
      /> */}
      <Image
        style={{
          transform: "translateZ(-20px) scale(3)",
          top: "100%",
          left: "-200px", 
          maxWidth: "100px",
          width: "10%",
          position: "absolute",
        }}
        src={Planet3}
        width={180}
        height={1}
      />
      <Image
        style={{
          transform: "translateZ(-48px) scale(4)",
          maxWidth: "100px",
          width: "10%",
          position: "absolute",
          top: "-50%",
          left: "150%",
        }}
        src={uranus}
        width={120}
        height={10}
      />
      <Image
        style={{
          transform: "translateZ(-15px) scale(2)",
          maxWidth: "100px",
          width: "10%",
          position: "absolute",
          bottom: "-50%",
          right: "-20%",
        }}
        src={mars}
        width={120}
        height={10}
      />
      {/* <Image src={blueDots} width={"30vw"} height={"30vw"} />
            <Image src={whiteDots} width={"30vw"} height={"30vw"} />
            <Image src={whiteDots} width={"30vw"} height={"30vw"} />
            <Image src={Planet3} width={180} height={1} />
            <Image src={uranus} width={120} height={10} /> */}
    </div>
  );
};

export default ParallexBG;
