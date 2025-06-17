const ContactForm = () => {
  return (
    <div className="bg-[#4F0072] text-white px-6 md:px-16 py-20 relative h-full ">
      <div className="bg-[#6D1F8F66] p-10 md:p-16 rounded-2xl max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start relative">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold font-paytone">Get in touch</h2>

          <div className="space-y-2 text-sm mt-50">
            <p className="text-sm text-white/80 font-DmSans">
              Do you have any questions or feedback? <br /> We’d love to hear
              from you.
            </p>
            <p className="font-DmSans">
              <span>
                <img
                  src="/src/assets/images/Vector (1).png"
                  alt="PhoneIcon"
                  className="inline-block mr-2 w-4 h-4"
                />
              </span>{" "}
              +1 (343) 338–5190
            </p>
            <p className="font-DmSans">
              {" "}
              <span>
                <img
                  src="/src/assets/images/Vector.png"
                  alt="MessageIcon"
                  className="inline-block mr-2 w-4 h-4"
                />
              </span>{" "}
              hello@revveme.com
            </p>
            <p className="font-DmSans">
              <span>
                <img
                  src="/src/assets/images/pin 1.png"
                  alt="LocationIcon"
                  className="inline-block mr-2 w-4 h-4"
                />
              </span>{" "}
              2482 Yonge St, Toronto ON M4P 2H5
            </p>
          </div>
        </div>

        {/* Right Side */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Fullname</label>
            <input
              type="text"
              placeholder="Firstname Lastname"
              className="w-full px-4 py-3 bg-transparent border border-white/60 rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email address</label>
            <input
              type="email"
              placeholder="Samuel@mail.com"
              className="w-full px-4 py-3 bg-transparent border border-white/60 rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              placeholder="Type here..."
              rows={4}
              className="w-full px-4 py-3 bg-transparent border border-white/60 rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-white text-[#000] w-full px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Send message
          </button>
        </form>
        {/* Adjusted image positioning */}
        <div className="hidden md:block absolute bottom-30 right-0 md:-right-15 md:w-30 lg:-right-36 object-contain overflow-hidden w-40 aspect-square rounded-2xl animate-float-slow">
          <img
            src="/src/assets/images/message.png"
            alt="HeroImg"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 right-0 md:-right-15 md:w-30 lg:right-20 object-contain overflow-hidden w-20 aspect-square rounded-2xl animate-float-slow z-10">
        <img
          src="/src/assets/images/phon.png"
          alt="HeroImg"
          className="w-full h-full"
        />
      </div>
      <div className="hidden md:block absolute -bottom-10 left-0 md:left-0 lg:left-0 object-cover overflow-hidden aspect-square  animate-float-slow">
        <img
          src="/src/assets/images/check.png"
          alt="HeroImg"
          className="w-full h-[238px] object-cover"
        />
      </div>
      <div>
        <h5>ueuqeuqpqhp9q</h5>
      </div>
    </div>
  );
};

export default ContactForm;
