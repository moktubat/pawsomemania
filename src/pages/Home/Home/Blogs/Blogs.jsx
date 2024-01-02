const Blogs = () => {
  return (
    <div className="m-12">
      <div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 rounded-lg"
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/241x320")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900 rounded-lg"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold uppercase text-gray-100"
              >
                Pets
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold">04</span>
                <span className="uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="text-2xl font-bold hover:underline text-gray-100"
              >
                {" "}
                Training Your Dog With Healthy Dog Training Treats.
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96"
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/242x320")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold uppercase text-gray-100"
              >
                Pets
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold">01</span>
                <span className="uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="text-2xl font-bold hover:underline text-gray-100"
              >
                Training Your Dog With Healthy Dog Training Treats.
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96"
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/243x320")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold uppercase text-gray-100"
              >
                Pets
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold">28</span>
                <span className="uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="text-2xl font-bold hover:underline text-gray-100"
              >
                Training Your Dog With Healthy Dog Training Treats.
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96"
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/243x320")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                href="#"
                className="px-3 py-2 text-xs font-semibold uppercase text-gray-100"
              >
                Pets
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold">19</span>
                <span className="uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                href="#"
                className="text-2xl font-bold hover:underline text-gray-100"
              >
                Training Your Dog With Healthy Dog Training Treats.
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
