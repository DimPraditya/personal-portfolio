import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  Figma,
  FileCode,
  Github,
  Globe,
  Layers,
  Lightbulb,
  Palette,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

// Technical Skills without progress bars
const technicalSkills = [
  "JavaScript/TypeScript",
  "React & React Native",
  "Node.js & Express",
  "Next.js",
  "HTML/CSS/SASS",
  "GraphQL",
  "SQL & NoSQL Databases",
  "AWS & Cloud Services",
  "Docker & Kubernetes",
  "Testing (Jest, Cypress)",
];

// Tools categorized by type
const tools = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    items: [
      { name: "React", icon: <Code /> },
      { name: "Next.js", icon: <FileCode /> },
      { name: "TypeScript", icon: <FileCode /> },
      { name: "Tailwind CSS", icon: <Palette /> },
      { name: "Material UI", icon: <Palette /> },
      { name: "Redux", icon: <Layers /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      { name: "Node.js", icon: <Server /> },
      { name: "Express", icon: <Server /> },
      { name: "PostgreSQL", icon: <Database /> },
      { name: "MongoDB", icon: <Database /> },
      { name: "GraphQL", icon: <Code /> },
      { name: "REST API", icon: <Globe /> },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Terminal className="h-5 w-5" />,
    items: [
      { name: "Git & GitHub", icon: <Github /> },
      { name: "Docker", icon: <Terminal /> },
      { name: "AWS", icon: <Server /> },
      { name: "CI/CD", icon: <Terminal /> },
      { name: "Jest", icon: <Terminal /> },
      { name: "Figma", icon: <Figma /> },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    items: [
      { name: "React Native", icon: <Smartphone /> },
      { name: "Flutter", icon: <Smartphone /> },
      { name: "iOS", icon: <Smartphone /> },
      { name: "Android", icon: <Smartphone /> },
      { name: "Firebase", icon: <Database /> },
      { name: "App Store Connect", icon: <Globe /> },
    ],
  },
];

export default function SkillsDisplay() {
  return (
    <div className="bg-auto py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            A comprehensive overview of my technical skills and the tools I use
            to create exceptional digital experiences.
          </p>
        </div>

        <Tabs defaultValue="skills" className="max-w-4x mx-auto">
          <TabsList className="grid h-fit w-full bg-gray-600 grid-cols-1 md:grid-cols-2">
            <TabsTrigger className="font-semibold" value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger className="font-semibold" value="tools">Tools & Technologies</TabsTrigger>
          </TabsList>

          {/* Technical Skills Tab */}
          <TabsContent value="skills" className="mt-6">
            <div className="bg-[#141420] rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-semibold">
                <Lightbulb
                  className="text-primary mr-2 inline h-5 w-5"
                  color="white"
                />
                Technical Skills Overview
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-white mt-4">
                {technicalSkills.map((skill) => (
                  <li key={skill} className="text-base">{skill}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Tools & Technologies Tab */}
          <TabsContent value="tools" className="mt-6">
            <div className="bg-[#141420] rounded-xl border p-6">
              <h3 className="mb-6 text-xl font-semibold">
                <Terminal className="text-primary mr-2 inline h-5 w-5" />
                Tools & Technologies
              </h3>

              <div className="grid gap-8 sm:grid-cols-2">
                {tools.map((toolCategory) => (
                  <div
                    key={toolCategory.category}
                    className="space-y-4 rounded-lg border p-4"
                  >
                    <h4 className="flex items-center gap-2 font-medium">
                      {toolCategory.icon}
                      {toolCategory.category}
                    </h4>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {toolCategory.items.map((tool) => (
                        <div
                          key={tool.name}
                          className="bg-white hover:border-muted flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm text-black transition-colors"
                        >
                          <span className="text-primary">{tool.icon}</span>
                          {tool.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
