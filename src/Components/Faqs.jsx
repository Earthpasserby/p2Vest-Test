import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // optional: or use "+" / "-"

const faqs = [
  "How does Revve work?",
  "Where is Revve available?",
  "Is Revve a bank?",
  "Is my money safe with Revve?",
  "What document do I need for verification?",
  "What should I do if my transaction is delayed or fails?",
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#4F0072] text-white px-6 md:px-16 py-12 grid md:grid-cols-2 gap-12">
      {/* Left Column */}
      <div className="space-y-6 py-20">
        <h2 className="text-[52px] font-normal font-paytone leading-[60px]">
          FAQs
        </h2>
        <p className="text-sm max-w-md font-DmSans font-bold leading-[20px] pt-8">
          Here are some basic questions and <br /> answers to help you get
          started.
        </p>
        <div className="pt-8">
          <p className="text-sm mb-3">Get Revve on your phone</p>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
            Download the app
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col divide-y divide-white/20">
        {faqs.map((q, i) => (
          <div
            key={i}
            className="py-4 cursor-pointer"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] md:text-[25px] lg:text-[40px]  text-[#CA92E3] font-normal leading-[60px] font-paytone">
                {q}
              </h3>
              <span>
                {activeIndex === i ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </div>
            {activeIndex === i && (
              <p className="text-sm mt-2 text-white/80">
                Secure your financial future with Revve, a digital wallet that
                offers a seamless and secure way to manage your finances. With
                convenient features like multi-currency support, bill payments,
                and online shopping, Revve empowers you to take control of your
                money anytime, anywhere. Experience the future of finance with
                Revve's user-friendly interface and robust security measures
                designed to keep your funds safe.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
