import Image from "next/image";
import Link from "next/link";
// ------ images
import wavePng from "/public/wave.png";
// import wave from "/public/Wave@1x-10.0s-1536px-695px.svg";
// import wave from "/public/Fluid@1x-10.0s-1536px-695px.svg";
import wave from "/public/Valley@1x-10.0s-1536px-695px.svg";
// ------ components
import Gallery from "@/components/Gallery.jsx";
import ProfileYoutube from "@/components/ProfileYoutube.jsx";
import SolarSystem from "@/components/SolarSystem.jsx";

export default function Home() {
  return (
    <>
      <main className="h-[60svh] flex justify-center items-center flex-col flex-wrap dvnShadow relative top-28">
        <div>
          <h1 className="text-primary dark:text-black text-7xl font-bold p-2 max-w-[440px]">
            Explore The
            <span className="tracking-[16px]" > Universe</span>
          </h1>
          <p className="w-[440px] text-lg px-3 text-justify ">
            Journey through space with stunning astrophotography, capturing the
            magnificent beauty of stars and galaxies.
          </p>
          <a href="#section2">
            <button className="self-start border p-2 m-3 rounded bg-secondary/50">
              Explore more...
            </button>
          </a>
        </div>
      </main>

      <main className="dvnGradient pt-56 flex items-center flex-col text-white flex-wrap"></main>
      <main
        id="section2"
        className="bg-black py-10 pt-24 flex items-center gap-16 flex-col text-white flex-wrap"
      >
        <div className="text-2xl max-w-4xl dvnShadow">
          Hello, I'm <span className="text-primary"> Vishesh Arya</span>.
          Welcome to my world of space and astrophotography. Here, you'll find
          videos, tutorials, and images that bring the cosmos closer to you
        </div>

        {/* yt profile */}
        <ProfileYoutube />

        <div className="max-w-3xl my-[20svh]">
          <h1 className="text-4xl text-center my-12">
            <Link href="/calendar">astronomy events</Link>
          </h1>
          <span>click here </span>
          <a href="/calendar" className="text-[rgb(0,0,255)]">
            astronomy events
          </a>
        </div>

        <Gallery />
        <div className="">
          <h1 className="text-4xl">THE SOLAR SYSTEM</h1>
        </div>
        <div className="relative max-w-[80svh] overflow-hidden">
          <SolarSystem />
        </div>
      </main>
      {/* <Image src={wave} /> */}
    </>
  );
}
