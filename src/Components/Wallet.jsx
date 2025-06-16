const Wallet = () => {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 bg-white mb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center ">
        <div className="mb-44 md:mb-0 lg:mb-0 lg:pt-42 md:pt-28">
          <h2 className="text-black text-3xl sm:text-4xl md:text-[40px] lg:text-[52px] font-bold leading-[60px] font-paytone">
            Multi-currency Wallets
          </h2>
          <p className="text-black text-base md:text-[16px] leading-[20px] font-medium pt-6 font-DmSans">
            Facilitate effortless management of multiple wallets, each dedicated
            to a specific currency, streamlining transactions and storage across
            various currencies. Enhance user experience with tailored wallets
            for different currencies, empowering efficient financial management
            and flexibility in global transactions.
          </p>
        </div>

        <div className="relative w-full h-[752px] mx-auto">
          <img
            src="/src/assets/images/iPhone.png"
            alt="HeroImg"
            className="w-full h-full "
          />
          <img
            src="/src/assets/images/USD.png"
            alt="USD"
            className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[328px] h-auto z-10"
          />
          <img
            src="/src/assets/images/CAD.png"
            alt="CAD"
            className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] md:w-[328px] h-auto z-20"
          />
          <img
            src="/src/assets/images/GHA.png"
            alt="GHA"
            className="absolute -top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[328px] h-auto z-30"
          />
          <img
            src="/src/assets/images/NGN.png"
            alt="NGN"
            className="absolute -top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] md:w-[328px] h-auto z-40"
          />
        </div>

        <div className="text-center md:flex md:justify-center">
          <img
            src="/src/assets/images/Girl.png"
            alt="Girl"
            className="block w-full max-w-[414px] h-auto  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
