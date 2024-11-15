import { useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const showImage = (image) => {
    setSelectedImage(image);
  };

  const hideImage = (e) => {
    if (e.target.classList.contains('biglayer')) {
      setSelectedImage(null);
    }
  };

  return (
    <section className="min-h-screen pb-5">
      <div className="pt-36">
        <h2 className="font-bold text-slate-700 text-center text-3xl lg:text-4xl tracking-wide uppercase">
          portfolio component
        </h2>
        <div className="flex justify-center mt-2 gap-2">
          <hr className="w-24 mt-2 border-t-4 border-slate-700" />
          <i className="fa-solid fa-star text-slate-700"></i>
          <hr className="w-24 mt-2 border-t-4 border-slate-700" />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-7 md:px-16 gap-14">
        {[img1, img2, img3, img1, img2, img3].map((image, index) => (
          <div
            key={index}
            className="item1 px-5 md:px-0 relative cursor-pointer"
            onClick={() => showImage(image)}
          >
            <img className="sm:w-100 mx-auto rounded" src={image} alt="" />
            <div className="layer bg-teal-400 absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center text-center opacity-0 hover:opacity-90 transition-opacity duration-700">
              <i className="fa-solid fa-plus text-white text-8xl"></i>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="biglayer fixed bg-blue-500 bg-opacity-50 top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center"
          onClick={hideImage}
        >
          <img className="lg:h-[65%] lg:w-[45%] md:h-[65%] sm:h-[65%]" src={selectedImage} alt="Selected" />
        </div>
      )}
    </section>
  );
}
