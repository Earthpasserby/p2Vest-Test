const Shop = () => {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-12  bg-[#F2F2F2]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 items-center ">
        <div className="mb-4 md:mb-0 lg:mb-0 lg:pt-42 md:pt-28">
          <h2 className=" text-5xl sm:text-4xl md:text-[40px] text-[#000] lg:text-5xl font-bold leading-[52px] font-paytone">
            Shop Online
          </h2>
          <p className="text-black text-base md:text-[16px] leading-[20px] font-medium pt-6 font-DmSans">
            Experience the world at your fingertips with our seamless online
            shopping platform. From the latest fashion trends to must-have
            gadgets, shop the world's best brands and products from the comfort
            of your own home.
          </p>

          <p className="pt-24 font-normal leading-[20px] font-DmSans text-[#000] ">
            Get Revve on your phone
          </p>
          <button className="bg-[#000] text-[#FFFFFF] p-4 leading-[24px] rounded-2xl mt-8 text-[16px] font-DmSans font-bold">
            Download the app
          </button>
        </div>

        <div className="md:flex md:justify-center md:items-center relative md:w-[432px] md:h-[836px] mx-auto">
          <img
            src="/assets/images/phone.png"
            alt="PhoneImg"
            className="w-full h-full "
          />
        </div>

        <div className="md:flex md:justify-center md:items-center">
          <div className="relative mx-auto h-[1000px] md:h-[1000px] lg:h-[1000px] w-full max-w-[400px]">
            <img
              src="/assets/images/Frame 428.png"
              alt="gridImg"
              className=" w-[125px]  sm:w-[90px]  md:w-[120px] lg:w-[30%] h-auto absolute top-[57%] lg:left-0 left-10 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="/assets/images/Frame 427.png"
              alt="gridImg"
              className="w-[110px]  sm:w-[90px]  md:w-[120px] lg:w-[30%]  h-auto absolute top-[30%] lg:right-35  right-22 -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="/assets/images/Frame 429.png"
              alt="gridImg"
              className="absolute  w-[150px] sm:w-[180px] md:w-[220px] lg:w-[50%]  h-auto top-[44%] -right-4 lg:-right-12 md:-right-24 -translate-y-1/2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
