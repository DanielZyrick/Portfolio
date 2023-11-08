import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
export default function Contact() {
  return (
    <section className="my-10">
      <div className="mb-20 overflow-hidden">
        <h5 className="text-9xl font-bold text-white font-outline-2 whitespace-nowrap">
          LET'S WORK TOGETHER - LET'S WORK TOGETHER
        </h5>
      </div>
      <div className="px-20">
        <h3 className="text-5xl font-light w-1/3 mb-16">
          Are you ready to take on the excitement?
        </h3>
      </div>
      <div className="flex items-center justify-between mb-10 px-20">
        <div className="flex text-2xl gap-10">
          <span className="flex w-56 justify-center items-center h-14 rounded-full outline outline-1">
            Site@DG.com
          </span>
          <span className="flex w-64 justify-center items-center h-14 rounded-full outline outline-1">
            +000 00 0000 00
          </span>
        </div>
        <div className="flex gap-1.5">
          <BsLinkedin size={25} />
          <AiFillInstagram size={25} />
          <BsFacebook size={25} />
        </div>
      </div>
      <div className="flex items-center justify-center relative mx-20 mb-10">
        <div className="border-t border-black w-full absolute z-0"></div>
        <button className="w-56 h-20 rounded-full bg-gray-900 text-white text-lg z-10">
          Get in touch
        </button>
      </div>
    </section>
  );
}
