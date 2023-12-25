import footerBg from "../../../../assets/footerBg.png"
import { MdEmail, MdLocationPin, MdOutlinePhoneInTalk } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-8 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center mb-8">
        <div>
          <h3 className="gradient">Contacts</h3>
          <div className="font-semibold flex items-center gap-2 mt-8 text-[#253d4e] tracking-wide">
            <div>
              <MdOutlinePhoneInTalk className="text-3xl" />
            </div>
            <div>
              <p>
                <a href="tel:+880 176 1111 456">+880 176 1111 456</a>
              </p>
              <p>
                <a href="tel:+880 176 1111 456">+880 176 1111 456</a>
              </p>
            </div>
          </div>
          <div className="font-semibold flex items-center gap-2 mt-8 text-[#253d4e] tracking-wide">
            <div>
              <MdEmail className="text-3xl" />
            </div>
            <div>
              <p>
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
              <p>
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
          </div>
          <div className="font-semibold flex items-center gap-2 mt-8 text-[#253d4e] tracking-wide">
            <div>
              <MdLocationPin className="text-3xl" />
            </div>
            <div>
              <p>168/170, Avenue 01, Mirpur</p>
              <p>DOHS, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-4xl">
            <span className="title">Want</span> To Keep
            <br /> <span className="title">Your Pet In,</span> Our Center
            <span className="title">?</span>
          </h3>
          <div className="mt-4">
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-12 py-4 overflow-hidden font-bold leading-tight text-white transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#ff553c]"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#25373a] group-hover:-rotate-180 ease"></span>
                <span className="relative">Book Now</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#ff553c] bg-opacity-60 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="gradient">Opening Hours</h3>
          <div className="font-semibold text-[#253d4e]">
            <p className="mt-8">Mon - Fri: 9.00AM - 6.00PM</p>
            <p className="mt-8">Saturday: 9.00AM - 6.00PM</p>
            <p className="mt-8">Sunday: Closed</p>
          </div>
          <div className="mt-10 flex justify-between">
            <FaFacebookF className="text-[#f86ca7] hover:text-[#ff7f18] cursor-pointer" />
            <FaTwitter className="text-[#f86ca7] hover:text-[#ff7f18] cursor-pointer" />
            <FaInstagram className="text-[#f86ca7] hover:text-[#ff7f18] cursor-pointer" />
            <FaPinterestP className="text-[#f86ca7] hover:text-[#ff7f18] cursor-pointer" />
          </div>
        </div>
      </div>
        <hr />
      <div className="my-8 font-semibold">
        <div className="flex justify-around">
        <p> © All rights reserved & design with love by Moktubat</p>
        <div className="flex gap-20">
            <a href="#">Our services</a>
            <a href="#">About us </a>
            <a href="#">Help</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
