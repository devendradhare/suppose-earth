import imageGallery from "@/db/gellery.js";

const Gallery = () => {
  return (
    <div className="max-w-3xl my-[20svh]">
      <h1 className="text-4xl text-center my-12">astrophotography images</h1>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
        {imageGallery.map((img, index) => (
          <div key={index} className=" break-inside-avoid  mb-8">
            <img
              className="border h-auto max-w-full rounded-lg"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
