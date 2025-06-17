const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center bg-[#4F0072]  px-6 md:px-16 py-24">
        <div className="flex md:justify-start lg:justify-start justify-center lg:ml-24 gap-4 md:ml-4  mb-4">
          <div>
            <span>
              <img
                src="/src/assets/images/link.png"
                alt="RevveLogo"
                className="w-[20px] h-[20px]"
              />
            </span>
          </div>
          <div>
            <span>
              <img
                src="/src/assets/images/facebook 1.png"
                alt="RevveLogo"
                className="w-[20px] h-[20px]"
              />
            </span>
          </div>{" "}
          <div>
            <span>
              <img
                src="/src/assets/images/twitter 1.png"
                alt="RevveLogo"
                className="w-[20px] h-[20px]"
              />
            </span>
          </div>{" "}
          <div>
            <span>
              <img
                src="/src/assets/images/ig.png"
                alt="RevveLogo"
                className="w-[20px] h-[20px]"
              />
            </span>
          </div>
        </div>
        <div className="flex md:justify-end lg:justify-end justify-center lg:mr-24 md:mr-8  gap-2 text-[#fff] font-DmSans md:gap-4  font-bold text-[10px] md:text-[10px] lg:text-[16px]">
          {" "}
          <div>
            <p>About Us</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Terms of use</p>
          </div>
          <div>
            <p>©2025 Revve. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
