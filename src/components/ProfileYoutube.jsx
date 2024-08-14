import Image from "next/image";
// images
import logo from "/public/logo.png";
// db
import ytInfo from "/src/db/youtubeProfile.js";

const ProfileYoutube = () => {
  return (
    <>
      <div className="[&_*]:borderdvn max-w-4xl flex w-[100%]">
        <Image
          src={ytInfo.logo}
          alt="suppose earth logo"
          width={200}
          height={200}
          className="w-1/4 aspect-square object-contain self-start"
        />
        <div className="flex-grow flex flex-col justify-evenly">
          <h1 className="text-3xl font-bold">{ytInfo.name}</h1>
          <p className="text-gray">
            {`${ytInfo.uName} • ${ytInfo.subscribersCount} subscribers • ${ytInfo.videosCount} videos`}
          </p>
          <div className="text-gray flex max-w-lg max-h-7 overflow-hidden">
            <p>{ytInfo.discription}</p>
            <span className="text-white">...more</span>
          </div>
          <div className="my-4">
            <a
              href={ytInfo.href}
              target="_blank"
              className="bg-white p-2 px-4 rounded-full text-black font-semibold hover:bg-[rgb(200,200,200)]"
            >
              Subscribe
            </a>
            <a
              href="https://www.youtube.com/@SupposeEarth"
              target="_blank"
              className="border border-gray p-2 px-4 rounded-full font-semibold mx-4 hover:bg-gray"
            >
              Join
            </a>
          </div>
        </div>
      </div>
      {/* <div className="border flex flex-wrap justify-center gap-2 max-w-4xl w-[100%]"> */}
      <div className="grid gap-4 grid-cols-3 max-sm:grid-cols-1 w-full">
        {ytInfo.videoData.map((video, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden hover:scale-110 duration-200  border border-white/20 flex justify-center "
          >
            <Image src={video.src} width={350} height={200} alt={video.alt} />
            <h3 className="absolute hover:h-full top-0 left-0 w-full h-[250%] hover:bg-[rgba(0,0,0,0.8)] flex justify-center items-center">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileYoutube;
