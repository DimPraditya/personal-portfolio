import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    <section id="About" className="container mx-auto py-30 px-10">
      <div className="grid grid-cols-2 gap-15 items-center">
        <div className="flex flex-col gap-4 mx-auto items-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            JOHN DOE
          </h1>
          <p className="text-2xl">Full-Stack Web Developer</p>
          <p className="text-xl text-justify">
            I create responsive and user-friendly websites using modern web
            technologies. I work on both the front-end and back-end to build
            complete, reliable web solutions.
          </p>
          <Button className="max-w-max text-xl">Download CV</Button>
        </div>
        <div>
          <img
            src="mainphoto.webp"
            alt="picture"
            className="rounded-full border-white border-4"
          />
        </div>
      </div>
      <div className="mt-12 text-center flex flex-col items-center gap-5">
        <img src="about.avif" className="max-w-xl" alt="" />
        <p className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          About Me
        </p>
        <p>
          I specialize in building modern, responsive, and scalable web
          applications from front to back. With a strong foundation in both
          client-side and server-side development, I bring ideas to life using
          technologies like JavaScript, Typescript, Node.js, and React. Whether
          it's creating intuitive user interfaces or designing robust backend
          systems, I’m passionate about delivering clean, efficient code and
          seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
