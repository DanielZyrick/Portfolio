import Image from "next/image";
export default function About() {
  return (
    <section className="flex justify-center items-center px-36 mt-36 ">
      <div className="w-2/5">
        <Image
          src="/1.jpg"
          width={500}
          height={500}
          alt="Daniel Image"
          className="rounded-3xl"
        />
      </div>
      <div className="pl-24 w-3/5">
        <p className="text-3xl mb-10">
          In this age of technology, it's my goal to help brands in become
          distinctive. We'll establish the new standard for excellence to one
          another. Unexpected and constantly at the forefront of things.
        </p>
        <div className="flex h-48">
          <p className="w-3/5 mr-10">
            I enjoy within the field of web development because of my love for
            design, coding, and interaction.
          </p>
          <div className="flex justify-center w-2/5 rounded-full bg-gray-950 ">
            <button className="text-white text-xl">About me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
