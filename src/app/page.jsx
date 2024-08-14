import Image from "next/image";
import Link from "next/link";
// ------ images
import wavePng from "/public/wave.png";
// import wave from "/public/Wave@1x-10.0s-1536px-695px.svg";
// import wave from "/public/Fluid@1x-10.0s-1536px-695px.svg";
import wave from "/public/Valley@1x-10.0s-1536px-695px.svg";
import astromomyCalendar from "/public/heroImage/astronomyCalendar2.jpg";
// ------ components
import Gallery from "@/components/Gallery.jsx";
import ProfileYoutube from "@/components/ProfileYoutube.jsx";
import SolarSystem from "@/components/SolarSystem.jsx";

export default function Home() {
  return (
    <>
      <main className=" h-[60svh] flex justify-center items-center flex-col flex-wrap dvnShadow relative top-28">
        <div className="[&_*]:borderDEV w-[61%] max-w-[440px] ">
          <h1 className="text-primary dark:text-black text-6xl font-bold mb-4">
            Explore The
            <span className="tracking-[16px] max-sm:tracking-normal block">
              Universe
            </span>
          </h1>
          <p className=" ">
            Journey through space with stunning astrophotography, capturing the
            magnificent beauty of stars and galaxies.
          </p>
          <a href="#section2">
            <button className="self-start border p-2 my-4 rounded bg-secondary/50">
              Explore more...
            </button>
          </a>
        </div>
      </main>

      <main className="dvnGradient pt-56 flex items-center flex-col text-white flex-wrap"></main>
      <section className="w-full bg-black flex justify-center">
        <div
          id="section2"
          className="[&>*]:borderdvn  p-[5%] flex gap-8 text-white flex-wrap max-w-[900px] w-full"
        >
          <div className="">
            Hello, I'm <span className="text-primary"> Vishesh Arya</span>.
            Welcome to my world of space and astrophotography. Here, you'll find
            videos, tutorials, and images that bring the cosmos closer to you
          </div>

          {/* yt profile */}
          <ProfileYoutube />

          <div className=" w-full">
            <h1 className="text-4xl text-center my-12">
              <Link href="/calendar">astronomy events</Link>
            </h1>
            <div className="grid grid-cols-3  ">
              <div className="min-w-[300px]">
                <Image src={astromomyCalendar} width={1000} height={200} />
              </div>
              <div className="col-span-2 flex flex-col justify-center align-middle backdrop-blur-sm p-2">
                <h4 className="text-2xl text-white/60 font-bold drop-shadow-md max-[640px]:text-center">
                  Explore the Wonders of the Universe with Our Astronomy
                  Calendar
                </h4>
                <p className="text-gray drop-shadow-green max-[640px]:hidden">
                  Welcome to our Astronomy Calendar! Here, you'll find all the
                  coolest celestial events happening throughout the year.
                  Whether you're into meteor showers, eclipses, or spotting
                  planets, we've got you covered. Check out the dates, set
                  reminders, and get ready to explore the universe from your own
                  backyard. Happy stargazing!
                </p>
                <div className="flex justify-end m-5 ">
                  <Link href="/calendar" className="btn btn-md">
                    Explore events
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Gallery />
          <div className="relative  overflow-hidden">
            <SolarSystem />
          </div>
        </div>
      </section>
      {/* <Image src={wave} /> */}
    </>
  );
}
