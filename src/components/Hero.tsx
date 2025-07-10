import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="About" className="container mx-auto px-6 py-20">
      {/* Top Section */}
      <div className="flex flex-col-reverse mt-10 md:grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            JOHN DOE
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Full-Stack Web Developer
          </p>
          <p className="text-base sm:text-lg max-w-xl text-justify md:text-left">
            I build modern, responsive, and scalable web applications using
            technologies like React, Node.js, and TypeScript. From UI to
            backend logic, I craft seamless digital experiences.
          </p>
          <Button className="text-base sm:text-lg mt-2">Download CV</Button>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="mainphoto.webp"
            alt="Profile"
            className="rounded-full border-4 border-white w-48 sm:w-64 md:w-72 lg:w-80"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 flex flex-col items-center gap-6 text-center px-4">
        <img
          src="about.avif"
          alt="About Me"
          className="w-full max-w-lg rounded-lg"
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          About Me
        </h2>
        <p className="text-base sm:text-lg max-w-3xl text-justify">
          With a solid foundation in both front-end and back-end development, I
          create full-stack web solutions that are performant and user-focused.
          I'm passionate about clean code, intuitive interfaces, and building
          tools that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default Hero;
