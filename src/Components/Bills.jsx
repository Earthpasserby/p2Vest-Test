const Bills = () => {
  return (
    <>
      <div
        className="bg-cover h-[1100px] md:h-[1000px] lg:h-[1000px] "
        style={{ backgroundImage: "url('/assets/images/bg.png')" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
          <div className="flex justify-start ml-10">
            <div className="mb-4 md:mb-0 lg:mb-0 lg:pt-42 md:pt-28 pt-14">
              <h2 className=" text-5xl sm:text-4xl md:text-[40px] text-[#fff] lg:text-5xl font-bold leading-[52px] font-paytone">
                Pay Bills
              </h2>
              <p className="text-[#fff] text-base md:text-[16px] leading-[20px] font-medium pt-6 font-DmSans">
                Say goodbye to long queues and endless <br /> processes—our
                platform offers a seamless <br /> solution for paying bills
                instantly without <br /> any hiccups.
              </p>
              <p className="pt-24 font-normal leading-[20px] font-DmSans text-[#fff] ">
                Get Revve on your phone
              </p>
              <button className="bg-[#fff] text-[#000] p-4 leading-[24px] rounded-2xl mt-8 text-[16px] font-DmSans font-bold">
                Coming Soon
              </button>
            </div>
          </div>
          <div className="flex justify-end mr-10 ">
            <img
              src="/assets/images/cal.png"
              alt="HeroImg"
              className="w-[340px] h-[588px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Bills;
