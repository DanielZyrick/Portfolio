import Link from "next/link";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <section className="pt-14 relative w-full h-fit">
        <div className="px-20 pt-10">
          <div className="flex justify-between ">
            <h2 className="text-6xl w-1/4 ">ABOUT ME</h2>
            <p className="text-4xl w-2/4 pt-20">
              I am always up for fresh connections and interesting discussions.
              The details listed below can be used to get in touch with me. I am
              happy to hear from you. If you would like to talk about exciting
              projects, new collaboration opportunities, or just to share ideas
              about front-end development, don't hesitate to get in touch.
            </p>
          </div>
        </div>
        <div className="p-20 flex">
          <div className="w-1/3">
            <div className="mb-10 ">
              <p className="text-2xl mb-3">Contact Details</p>
              <address className="flex flex-col text-xl font-extralight gap-y-1">
                <Link href="mailto:dgcontact@dg.com">dgcontact@dg.com</Link>
                <Link href="tel:+63000 000 0000">+63000 000 0000</Link>
              </address>
            </div>
            <div>
              <p className="text-2xl mb-3">Socials</p>
              <address className="flex flex-col text-xl font-extralight gap-y-1">
                <Link href="mailto:dgcontact@dg.com">Instagram</Link>
                <Link href="tel:+63000 000 0000">Facebook</Link>
                <Link href="mailto:dgcontact@dg.com">LinkedIn</Link>
              </address>
            </div>
          </div>
          <div className="w-2/3">
            <form
              action=""
              className="gap-y-10 flex flex-col justify-center items-center"
            >
              <input
                className="w-full h-20 indent-5 py-3 text-3xl border-b border-gray-900 placeholder:text-3xl font-extralight "
                type="text"
                placeholder="Your name"
                required
              />
              <input
                className="w-full h-20 indent-5 py-3 text-3xl border-b border-gray-900 placeholder:text-3xl font-extralight"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="w-full h-20 indent-5 py-3 text-3xl border-b border-gray-900 placeholder:text-3xl font-extralight "
                rows={1}
                required
                placeholder="Your message"
              />
              <button className="w-1/4 h-20 bg-gray-900 text-white text-xl rounded-full font-extralight">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
