import { useForm } from "react-hook-form";
import "./Consultant.css";
const Consultant = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <div className="p-12 consultantBg">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-white text-4xl font-bold border-b-4 border-[#ff553c]">
            Book a Consultation
          </h1>
        </div>
        <div className="my-10">
          <div>
            <div className="md:flex gap-10">
              <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
                <h1 className="gradient text-5xl">Schedule a Visit Today!</h1>
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="mb-1">
                    <label
                      className="block text-white text-xl font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-white text-lg focus:outline-none focus:shadow-outline ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-1">
                    <label
                      className="block text-white text-xl font-bold mb-2"
                      htmlFor="name"
                    >
                      Phone
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-white text-lg focus:outline-none focus:shadow-outline ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-1">
                    <label
                      className="block text-white text-xl font-bold mb-2"
                      htmlFor="name"
                    >
                      Select Date
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-white text-lg focus:outline-none focus:shadow-outline ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-1">
                    <label
                      className="block text-white text-xl font-bold mb-2"
                      htmlFor="name"
                    >
                      Select Time
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-white text-lg focus:outline-none focus:shadow-outline ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-1">
                    <label
                      className="block text-white text-xl font-bold mb-2"
                      htmlFor="name"
                    >
                      Select Service
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-white text-lg focus:outline-none focus:shadow-outline ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <button className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-12 py-4 overflow-hidden font-bold text-lg text-white transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#ff553c]"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#25373a] group-hover:-rotate-180 ease"></span>

                    <input type="submit" className="relative" />
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#ff553c] bg-opacity-60 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </button>
              </form>
              <div className="md:w-1/2 mt-12 md:mt-0">
                <h1 className="gradient text-5xl">
                  Why Choose Pet Consultation at PawsomeMania?
                </h1>
                <div className="my-6">
                  <p className="text-white font-semibold">
                    Our commitment to your pet&apos;s well-being goes beyond
                    products and services. With Pet Consultation at{" "}
                    <span className="text-[#ff553c]">PawsomeMania</span>,
                    you&apos;re not just getting advice; you&apos;re gaining a
                    partner in your pet parenting journey. Trust the experts at{" "}
                    <span className="text-[#ff553c]">PawsomeMania</span> to
                    provide the guidance you need for a happy, healthy, and
                    thriving pet.
                  </p>
                  <div className="flex justify-between mt-2">
                    <div>
                      <h3 className="gradient text-xl">How It Works:</h3>
                      <ul className="text-white font-semibold mb-1">
                        <li>Book a Consultation</li>
                        <li>Meet the Experts</li>
                        <li>Share Pet History</li>
                        <li>Get Personalized Advice</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="gradient text-xl">Unlock the Benefits:</h3>
                      <ul className="text-white font-semibold mb-1">
                        <li>Expert Guidance</li>
                        <li>Health Checkups</li>
                        <li>Behavioral Insights</li>
                        <li>Nutritional Counseling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultant;
