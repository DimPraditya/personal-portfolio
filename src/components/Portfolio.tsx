import { Separator } from "@/components/ui/separator";
import PortfolioProject from "./ui/portfolio";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="container mx-auto">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">
          Portfolio
        </h1>
        <PortfolioProject/>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          💼 Work Experience
        </h2>

        <div className="grid grid-cols-3 gap-4 w-full px-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#3CACDF]">
              Frontend Web Developer
            </h3>
            <p className="text-xl">
              TechNova Digital Solutions – Jakarta, Indonesia
            </p>
            <p className="text-m mb-2">Jan 2021 – Jun 2022</p>
          </div>
          <ul className="list-disc list-inside text-xl space-y-1 col-span-2">
            <li>
              Developed responsive websites using HTML, CSS, JavaScript, and
              React.js
            </li>
            <li>
              Collaborated with UI/UX designers to implement modern interfaces
            </li>
            <li>
              Optimized website performance and ensured cross-browser
              compatibility
            </li>
            <li>Integrated RESTful APIs and third-party services</li>
          </ul>
        </div>

        <Separator />

        <div className="grid grid-cols-3 gap-4 w-full px-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#3CACDF]">
              Full-Stack Web Developer
            </h3>
            <p className="text-xl ">NextGen Web Studio – Remote</p>
            <p className="text-m  mb-2">Jul 2022 – Dec 2023</p>
          </div>
          <ul className="list-disc list-inside text-xl space-y-1 col-span-2">
            <li>
              Built full-stack applications using Node.js, Express, and MongoDB
            </li>
            <li>
              Developed admin dashboards and user portals with React and
              Tailwind CSS
            </li>
            <li>Implemented authentication systems (JWT, OAuth)</li>
            <li>Wrote unit tests and conducted code reviews</li>
          </ul>
        </div>
        <Separator />

        <div className="grid grid-cols-3 w-full px-8">
          <div className="">
            <h3 className="text-2xl font-semibold text-[#3CACDF]">
              Lead Web Developer
            </h3>
            <p className="text-xl ">
              Digital Orbit Agency – Bandung, Indonesia
            </p>
            <p className="text-m  mb-2">Jan 2024 – Present</p>
          </div>
          <ul className="list-disc list-inside text-xl space-y-1 col-span-2">
            <li>
              Leading a team of 4 developers in building scalable web apps
            </li>
            <li>
              Designed and maintained CI/CD pipelines using GitHub Actions
            </li>
            <li>
              Architected reusable components and optimized frontend performance
            </li>
            <li>Mentoring junior developers and managing sprint planning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
