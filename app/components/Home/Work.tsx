import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
export default function Work() {
  const workItems = [
    { label: "Inked2600", href: "/about" },
    { label: "Emp", href: "/work" },
    { label: "Rig-out", href: "/contact" },
    { label: "Locomote", href: "/contact" },
  ];
  return (
    <section className="m-5 sm:m-10 lg:m-20">
      <div>
        <h4 className="font-medium">Site that i created.</h4>
      </div>
      <div className="pt-5">
        {workItems.map((items, i) => (
          <Link href={items.href} target="_blank" key={i}>
            <div
              className={`flex items-center justify-between border-b border-gray-900 py-10 
              ${i === 0 ? "border-t" : ""}`}
            >
              <h5 className="text-5xl sm:text-5xl lg:text-7xl max-[260px]:text-2xl">
                {items.label}
              </h5>
              <FiArrowUpRight size={40} />
            </div>
          </Link>
        ))}
        {/* <div className="flex justify-center pt-16 ">
          <button className="w-56 h-20 rounded-full bg-gray-900 text-white text-lg">
            Explore more
          </button>
        </div> */}
      </div>
    </section>
  );
}
