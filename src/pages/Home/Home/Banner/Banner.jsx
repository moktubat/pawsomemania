import { FaStar, FaTruck } from "react-icons/fa";
import { BsShop } from "react-icons/bs";

import banner from "../../../../assets/hero.jpg";
import { MdOutlineMessage } from "react-icons/md";
const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
          <img
            src={banner}
            className="md:w-1/2 h-full rounded object-cover"
            loading=" lazy"
          />
          <div className="md:w-1/2">
            <h1 className="text-[#253d4e] text-5xl md:text-6xl font-light pb-3">
              taking care for,
            </h1>
            <p className="text-[#253d4e] text-5xl md:text-7xl font-bold">
              your <span className="text-[#ff553c]">Smart Pet</span> !
            </p>
            <p className="py-8 text-[#253d4e] text-lg font-semibold">
              Your <span className="text-[#ff553c]">Pet</span> is Part of Our
              Family.
              <br />
              Human–canine bonding is the relationship between pets and humans.
            </p>
            <div className="flex gap-6">
              <button className="relative inline-block text-lg group">
                <span className="relative z-10 block px-12 py-4 overflow-hidden font-bold leading-tight text-white transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#ff553c]"></span>
                  <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#25373a] group-hover:-rotate-180 ease"></span>
                  <span className="relative">Make a Reservation</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#ff553c] bg-opacity-60 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
              <button className="relative inline-block text-lg group">
                <span className="relative z-10 block px-12 py-4 overflow-hidden font-bold leading-tight text-white transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#25373a]"></span>
                  <span className="absolute left-0 w-52 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#ff553c] group-hover:-rotate-180 ease"></span>
                  <span className="relative">Explore More</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#25373a] bg-opacity-60 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-12">
        <div className="grid grid-cols-2 gap-10 mt-10 md:flex md:justify-between">
          <div className="flex items-center gap-3">
            <FaTruck className="w-8 h-8 text-[#ff553c]" />
            <p className="text-[#253d4e] font-semibold">
              Same day delivery <br /> for order before 11:00h!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <BsShop className="w-8 h-8 text-[#ff553c]" />
            <p className="text-[#253d4e] font-semibold">
              Free pick up from <br /> 1000S 8th Avenue, NY!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaStar className="w-8 h-8 text-[#ff553c]" />
            <p className="text-[#253d4e] font-semibold">
              Rating 4.8/5! <br /> from verified users.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaStar className="w-8 h-8 text-[#ff553c]" />
            <p className="text-[#253d4e] font-semibold">
              Call us in 09:00-16:00h <br />{" "}
              <a href="tel:+1-800-356-8933">1-800-356-8933</a>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMessage className="w-8 h-8 text-[#ff553c]" />
            <p className="text-[#253d4e] font-semibold">
              Message us, <br /> respond same day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
