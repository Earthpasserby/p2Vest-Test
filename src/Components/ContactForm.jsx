const ContactForm = () => {
  return (
    <div className="bg-[#4F0072] relative z-10 text-white px-6 md:px-16 py-20  h-full ">
      <div className="bg-[#6D1F8F66] relative z-10 p-10 md:p-16 rounded-2xl mx-auto grid md:grid-cols-2 gap-10 items-start  mb-8">
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
                  src="/assets/images/Vector (1).png"
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
                  src="/assets/images/Vector.png"
                  alt="MessageIcon"
                  className="inline-block mr-2 w-4 h-4"
                />
              </span>{" "}
              hello@revveme.com
            </p>
            <p className="font-DmSans">
              <span>
                <img
                  src="/assets/images/pin 1.png"
                  alt="LocationIcon"
                  className="inline-block mr-2 w-4 h-4"
                />
              </span>{" "}
              2482 Yonge St, Toronto ON M4P 2H5
            </p>
          </div>
        </div>

        <form className="space-y-8">
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
        <div className="hidden md:block absolute md:inset-y-50 right-0 md:-right-16 lg:inset-y-60 md:w-32 md:h-32 lg:w-38 lg:h-38 lg:-right-15 overflow-hidden animate-float-slo">
          <img
            src="/assets/images/message.png"
            alt="HeroImg"
            className="w-full h-full"
          />
        </div>
      </div>
      <div class="absolute -right-0 bottom-30 w-40 h-40 z-0 ...">
        <img
          src="/assets/images/phon.png"
          alt="HeroImg"
          className="w-full h-full object-contain "
        />
      </div>
      <div class="relative size-32">
        <div class="absolute -right-8 -bottom-20 size-60 ...">
          <img
            src="/assets/images/check.png"
            alt="HeroImg"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
