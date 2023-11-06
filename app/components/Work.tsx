import { FiArrowUpRight } from "react-icons/fi";
export default function Work() {
  return (
    <section className="my-20">
      <div>
        <h4 className="font-light">Site that i created.</h4>
      </div>
      <div className="pt-5">
        <div className="flex items-center justify-between border-t border-gray-900 py-10">
          <h5 className="text-7xl">Inked2600</h5>
          <div className="flex items-center gap-32">
            <span className="text-2xl font-light">Design & Development</span>
            <FiArrowUpRight size={40} />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-900 py-10">
          <h5 className="text-7xl">Emp</h5>
          <div className="flex items-center gap-32">
            <span className="text-2xl font-light">Design & Development</span>
            <FiArrowUpRight size={40} />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-900 py-10">
          <h5 className="text-7xl">Rig-out</h5>
          <div className="flex items-center gap-32">
            <span className="text-2xl font-light">Design & Development</span>
            <FiArrowUpRight size={40} />
          </div>
        </div>
        <div className="flex items-center justify-between border-y border-gray-900 py-10">
          <h5 className="text-7xl">Locomote</h5>
          <div className="flex items-center gap-32">
            <span className="text-2xl font-light">Design & Development</span>
            <FiArrowUpRight size={40} />
          </div>
        </div>
        <div className="flex justify-center pt-16 ">
          <button className="w-56 h-20 rounded-full bg-gray-900 text-white text-lg">
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}
