const ChooseUs = () => {
  return (
    <div className="m-12">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#253d4e] text-4xl font-bold border-b-4 border-[#ff553c]">
            Benefits
          </h1>
        </div>
        <div className="my-10">
          <h1 className="gradient text-5xl">
            Why Choose Our Pet Care Company?
          </h1>
          <div>
            <div className="md:flex bg-cover bg-left-bottom bg-no-repeat" style={{backgroundImage: "URL(https://wgl-demo.net/pawscare/wp-content/uploads/2021/05/bg-section-4-2.png)"}}>
              <div className="md:w-1/2">
                <div className="collapse collapse-plus bg-base-50">
                  <input type="radio" name="my-accordion-3" checked="checked" />
                  <div className="collapse-title text-2xl font-bold px-0">
                    Quality toys & food for your pets
                  </div>
                  <div className="collapse-content text-[#253d4e] font-semibold">
                    <p>
                      Please be aware that you will be charged for the rest of
                      your pet&apos;s meals up to $5/meal. If you do not bring
                      your pet&apos;s own food, we offer our Fromm&apos;s house
                      cuisine.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-50">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-2xl font-bold px-0">
                    Premium pet care for your friend
                  </div>
                  <div className="collapse-content text-[#253d4e] font-semibold">
                    <p>
                      Please be aware that you will be charged for the rest of
                      your pet&apos;s meals up to $5/meal. If you do not bring
                      your pet&apos;s own food, we offer our Fromm&apos;s house
                      cuisine.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-50">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-2xl font-bold px-0">
                    Incredible salon pet services
                  </div>
                  <div className="collapse-content text-[#253d4e] font-semibold">
                    <p>
                      Please be aware that you will be charged for the rest of
                      your pet&apos;s meals up to $5/meal. If you do not bring
                      your pet&apos;s own food, we offer our Fromm&apos;s house
                      cuisine.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-50">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-2xl font-bold px-0">
                    Indoor & outdoor activities for pets
                  </div>
                  <div className="collapse-content text-[#253d4e] font-semibold">
                    <p>
                      Please be aware that you will be charged for the rest of
                      your pet&apos;s meals up to $5/meal. If you do not bring
                      your pet&apos;s own food, we offer our Fromm&apos;s house
                      cuisine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
