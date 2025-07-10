import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="About" className="container mx-auto py-20 px-6">
      {/* Top Section */}
      <div className="flex flex-col-reverse mt-16 md:grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            JOHN DOE
          </h1>
          <p className="text-xl sm:text-2xl">Full-Stack Web Developer</p>
          <p className="text-base sm:text-lg text-justify md:text-left max-w-xl">
            I create responsive and user-friendly websites using modern web
            technologies. I work on both the front-end and back-end to build
            complete, reliable web solutions.
          </p>
          <Button className="text-base sm:text-xl">Download CV</Button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="mainphoto.webp"
            alt="picture"
            className="rounded-full border-white border-4 w-48 sm:w-64 md:w-72 lg:w-80"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 text-center flex flex-col items-center gap-6 px-4">
        <img
          src="about.avif"
          className="w-full max-w-lg rounded-lg"
          alt="about me"
        />
        <p className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          About Me
        </p>
        <p className="text-base sm:text-lg max-w-3xl text-justify">
          I specialize in building modern, responsive, and scalable web
          applications from front to back. With a strong foundation in both
          client-side and server-side development, I bring ideas to life using
          technologies like JavaScript, TypeScript, Node.js, and React. Whether
          it's creating intuitive user interfaces or designing robust backend
          systems, I’m passionate about delivering clean, efficient code and
          seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
