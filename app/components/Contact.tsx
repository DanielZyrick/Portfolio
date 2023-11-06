import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
export default function Contact() {
  return (
    <section className="my-10">
      <div className="mb-20">
        <h5 className="text-9xl font-bold text-white font-outline-2">
          LET'S WORK TOGETHER - LET'S WORK TOGETHER
        </h5>
      </div>
      <div>
        <h3 className="text-5xl font-light w-1/3 mb-16">
          Are you ready to take on the excitement?
        </h3>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex text-2xl gap-10">
          <span className="flex w-56 justify-center items-center h-14 rounded-full outline outline-1">
            Site@DG.com
          </span>
          <span className="flex w-64 justify-center items-center h-14 rounded-full outline outline-1">
            +000 00 0000 00
          </span>
        </div>
        <div className="flex gap-1">
          <AiOutlineLinkedin size={30} />
          <AiOutlineInstagram size={30} />
          <CiFacebook size={30} />
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="border border-black w-full absolute z-0"></div>
        <button className="w-56 h-20 rounded-full bg-gray-900 text-white text-lg z-10">
          Get in touch
        </button>
      </div>
    </section>
  );
}