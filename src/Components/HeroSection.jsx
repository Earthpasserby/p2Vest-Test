const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-20 bg-white md:mb-35 mb-0">
      {/* Hide the floating image on small screens, show on md and above */}
      <div className="hidden md:block absolute top-20 right-12 md:right-24 lg:right-24 overflow-hidden w-20 md:w-24 aspect-square rounded-2xl animate-float-slow">
        <img
          src="/assets/images/Eating.png"
          alt="HeroImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block absolute top-20 -left-8 md:-left-12 lg:-left-12 overflow-hidden w-20 md:w-24 aspect-square rounded-xl animate-float-slow">
        <span className="absolute inset-y-1/2 -translate-y-1/2 right-2 z-10 text-white text-2xl font-bold px-3 py-1">
          nd
        </span>
        <img
          src="/assets/images/A.png"
          alt="HeroImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block absolute inset-y-1/3 -translate-y-1/3 left-10 md:left-30 lg:left-58 overflow-hidden w-20 md:w-24 aspect-square rounded-2xl animate-float-slow">
        <img
          src="/assets/images/Currency.png"
          alt="HeroImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block absolute bottom-28 left-0 md:left-0 lg:left-0 overflow-hidden w-20 md:w-32 md:h-[280px] aspect-square rounded-2xl animate-float-slow">
        <img
          src="/assets/images/Shopping.png"
          alt="HeroImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block absolute inset-y-1/2 -translate-y-1/2 right-10 md:right-30 lg:right-58 overflow-hidden w-20 md:w-24 aspect-square rounded-2xl animate-float-slow">
        <img
          src="/assets/images/Paper Plane.png"
          alt="HeroImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block absolute bottom-28   -right-0 md:-right-10 lg:-right-14 overflow-hidden w-20 md:w-24 aspect-square rounded-2xl animate-float-slow">
        <span className="absolute inset-y-1/2 -translate-y-1/2 -left-0 z-10 text-white text-2xl font-bold px-3 py-1">
          Se
        </span>
        <img
          src="/assets/images/B.png"
          alt="HeroImg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center w-full max-w-md relative">
        <img
          src="/assets/images/Mask.png"
          alt="HeroImg"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto mb-6"
        />
        <h3 className="text-center text-lg sm:text-xl md:text-3xl font-bold text-[#000000] mb-4">
          Send and Receive <br />
          Money
        </h3>
      </div>
    </section>
  );
};
export default HeroSection;
