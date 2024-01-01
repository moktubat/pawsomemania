import dog from "../../../../assets/dog.webp";
import cat from "../../../../assets/cat.webp";
import rabbit from "../../../../assets/rabbit.webp";
import fish from "../../../../assets/fish.webp";
import bird from "../../../../assets/bird.webp";
import reptile from "../../../../assets/reptile.webp";
import { Tab } from "@headlessui/react";
import { FaCartPlus } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="m-12">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#253d4e] text-4xl font-bold border-b-4 border-[#ff553c]">
            Shop by Animal
          </h1>
        </div>
        <div className="my-10 grid grid-cols-2 gap-10 md:flex md:justify-between">
          <div className="group relative text-[#253d4e] bg-base-50 hover:text-white shadow-md rounded-lg hover:bg-gradient-to-r from-[#f86ca7] to-[#ff7f18]">
            <img
              src={dog}
              className="w-32 h-40 object-center object-contain group-hover:scale-125 transition-transform duration-300"
              alt=""
            />
            <p className="text-center text-2xl font-bold my-2">Dog</p>
          </div>
          <div className="group relative text-[#253d4e] bg-base-50 hover:text-white shadow-md rounded-lg hover:bg-gradient-to-r from-[#f86ca7] to-[#ff7f18]">
            <img
              src={cat}
              className="w-32 h-40 object-center object-contain group-hover:scale-125 transition-transform duration-300"
              alt=""
            />
            <p className="text-center text-2xl font-bold my-2">Cat</p>
          </div>
          <div className="group relative text-[#253d4e] bg-base-50 hover:text-white shadow-md rounded-lg hover:bg-gradient-to-r from-[#f86ca7] to-[#ff7f18]">
            <img
              src={rabbit}
              className="w-32 h-40 object-center object-contain group-hover:scale-125 transition-transform duration-300"
              alt=""
            />
            <p className="text-center text-2xl font-bold my-2">Rabbit</p>
          </div>
          <div className="group relative text-[#253d4e] bg-base-50 hover:text-white shadow-md rounded-lg hover:bg-gradient-to-r from-[#f86ca7] to-[#ff7f18]">
            <img
              src={fish}
              className="w-32 h-40 object-center object-contain group-hover:scale-125 transition-transform duration-300"
              alt=""
            />
            <p className="text-center text-2xl font-bold my-2">Fish</p>
          </div>
          <div className="group relative text-[#253d4e] bg-base-50 hover:text-white shadow-md rounded-lg hover:bg-gradient-to-r from-[#f86ca7] to-[#ff7f18]">
            <img
              src={bird}
              className="w-32 h-40 object-center object-contain group-hover:scale-125 transition-transform duration-300"
              alt=""
            />
            <p className="text-center text-2xl font-bold my-2">Bird</p>
          </div>
          <div className="group relative text-[#253d4e] bg-base-50 hover:text-white shadow-md rounded-lg hover:bg-gradient-to-r from-[#f86ca7] to-[#ff7f18]">
            <img
              src={reptile}
              className="w-32 h-40 object-center object-contain group-hover:scale-125 transition-transform duration-300"
              alt=""
            />
            <p className="text-center text-2xl font-bold my-2">Reptile</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#253d4e] text-4xl font-bold border-b-4 border-[#ff553c]">
            Taste it, <span className="text-[#ff553c]">Love</span> it
          </h1>
        </div>
        <div>
          <Tab.Group>
            <Tab.List className="my-10 md:mx-64 grid grid-cols-3 md:grid-cols-6 gap-5">
              <Tab className="px-4 py-1 rounded-full text-white font-semibold bg-[#ff553c]">
                🐶 Dog
              </Tab>
              <Tab className="px-4 py-1 rounded-full text-white font-semibold bg-[#253d4e]">
                🐱 Cat
              </Tab>
              <Tab className="px-4 py-1 rounded-full text-white font-semibold bg-[#253d4e]">
                🐰 Rabbit
              </Tab>
              <Tab className="px-4 py-1 rounded-full text-white font-semibold bg-[#253d4e]">
                🐠 Fish
              </Tab>
              <Tab className="px-4 py-1 rounded-full text-white font-semibold bg-[#253d4e]">
                🐦 Bird
              </Tab>
              <Tab className="px-4 py-1 rounded-full text-white font-semibold bg-[#253d4e]">
                🦖 Reptile
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="card w-full md:w-80 bg-base-50 shadow-xl group hover:opacity-100">
                  <figure>
                    <img
                      className="w-[220px] h-[220px]"
                      src="https://petmania.vamtam.com/wp-content/uploads/2022/07/ignore-export7-426x426.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="flex mx-12 md:mx-0">
                    <div className="card-body relative">
                      <h2 className="text-2xl font-black">Shoes!</h2>
                      <p className="text-lg font-semibold">Rate: *****</p>
                      <p className="text-xl font-black">Price: 69$</p>
                      <div className="card-actions absolute top-20 right-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button className="p-2 rounded-xl text-white bg-[#253d4e]">
                          <FaCartPlus className="text-3xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              <Tab.Panel>Content 4</Tab.Panel>
              <Tab.Panel>Content 5</Tab.Panel>
              <Tab.Panel>Content 6</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Shop;
