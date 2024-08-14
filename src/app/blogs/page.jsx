import Image from "next/image";
import allBlogs from "/src/db/blogs.js";

// export const metadata = {
//   title: "blogs | suppose earth",
//   description:
//     "astrophotography antriksh universe, space videos, astronomy, astro videos, telescope videos, deep Sky video, Astrophotography tutorial hindi, Hindi Astrophotography, space science, space exploration, telescope Astrophotography, suppose earth, supose erth, sapoj earth, sapos erth, suppose, suppose earth videos, suppose earth astro videos, support erth, suppo erth",
// };

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: "blogs | suppose earth" };
}

const Page = () => {
  return (
    <div className=" [&_*]:borderDev bg-black">
      {/* <div className="flex flex-col items-center justify-center">
        <Image
          className="w-screen max-h-[70vh] object-cover"
          width={2000}
          height={2000}
          src="https://science.nasa.gov/wp-content/uploads/2024/06/webb-stsci-01hz2nk29nfz7h63hmz8446jm3-2k.jpg?w=1536&format=webp"
        />
        <div className=" w-[80%] p-[5%] text-center absolute bg-bluewood/70">
          <h1 className="text-5xl font-semibold text-white">
            explore all the information and knowledge we collect for you
          </h1>
        </div>
      </div> */}
      <div className="px-[5%] pb-[15svh] grid gap-4 ">
        <div className="relative flex items-center w-fit h-52">
          <span className="text-[6rem] max-sm:text-[3rem] font-bold text-[rgb(30,30,30)]">
            All blogs
          </span>
          <span className="text-xl font-bold text-white absolute">
            <svg
              height="5"
              width="300"
              stroke="#ffffff"
              stroke-width="4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="5" x2="80" y2="5" />
            </svg>
          </span>
          <span className="text-[3rem] max-sm:text-[1.5rem] font-bold text-white absolute left-[22%]">
            All blogs
          </span>
        </div>
        <p className="text-white/40">
          Explore all the information and knowledge we collect for you.
        </p>
        <div className=" grid gap-4">
          {allBlogs.map((blog, index) => (
            <div className="">
              <p className="uppercase text-white/20 font-bold">vlog {index+1}</p>
              <BlogCard blog={blog} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <div className=" grid grid-cols-2  gap-1  overflow-hidden">
      <div className="max-h-[200px] object-contain grid content-center">
        <Image
          className="object-contain w-full"
          width={500}
          height={500}
          src={blog.image}
        />
      </div>
      <div className="grid content-center ">
        <h1 className="text-4xl max-md:text-lg text-white/80 drop-shadow-black">{blog.title}</h1>
        <span className="text-white/50 drop-shadow-blue">
          {blog.uploadDate} / {blog.comments.length + " comments"}
        </span>
        <p className="font-light text-gray drop-shadow-black max-md:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          repellat nobis quasi expedita earum, harum at nisi laboriosam beatae
          voluptatum voluptatem enim sit temporibus consequuntur, vitae minima?
          Laboriosam illum doloremque numquam qui sed dolorum!
        </p>
        <button className="btn  ">Read more</button>
      </div>
    </div>
  );
};

export default Page;
