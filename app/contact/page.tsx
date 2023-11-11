import Link from "next/link";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <section className="pt-14 relative h-fit sm:mx-10 md:mx-20">
        <div className="pt-10">
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
                <Link
                  href="mailto:daniel.gayao7@gmail.com"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  daniel.gayao7@gmail.com
                </Link>
                <Link
                  href="tel:+639062173558"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  +63906 217 3558
                </Link>
              </address>
            </div>
            <div>
              <p className="text-2xl mb-3">Socials</p>
              <address className="flex flex-col text-xl font-extralight gap-y-1">
                <Link
                  href="https://instagram.com/dzyrick2"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/daniel.zyrick?mibextid=LQQJ4d"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.linkedin.com/in/daniel-gayao-9611a2207/"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  LinkedIn
                </Link>
              </address>
            </div>
          </div>
          <div className="w-2/4">
            <form
              action=""
              className="gap-y-10 flex flex-col justify-center items-center"
            >
              <input
                className="w-full h-20 indent-5 py-3 text-2xl border-b border-gray-900 placeholder:text-2xl font-extralight "
                type="text"
                placeholder="Your name"
                required
              />
              <input
                className="w-full h-20 indent-5 py-3 text-2xl border-b border-gray-900 placeholder:text-2xl font-extralight"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="w-full h-20 indent-5 py-3 text-2xl border-b border-gray-900 placeholder:text-2xl font-extralight "
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
