"use client";
import { personalInfo } from "@/constants";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { 
  SiJavascript, 
  SiC,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiNextdotjs,
  SiExpress,
  SiAmazondynamodb,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { cn } from "@/lib/utils";

const skillIcons = {
  programmingLanguages: {
    JavaScript: <SiJavascript className="w-full h-full text-yellow-400" />,
    Java: <DiJava className="w-full h-full text-red-500" />,
    C: <SiC className="w-full h-full text-blue-500" />,
    TypeScript: <SiTypescript className="w-full h-full text-blue-400" />,
  },
  webTechnologies: {
    HTML: <SiHtml5 className="w-full h-full text-orange-500" />,
    CSS: <SiCss3 className="w-full h-full text-blue-400" />,
    Bootstrap: <SiBootstrap className="w-full h-full text-purple-500" />,
    PHP: <SiPhp className="w-full h-full text-indigo-400" />,
    "Tailwind CSS": <SiTailwindcss className="w-full h-full text-blue-400" />,
  },
  databases: {
    Postgres: <SiPostgresql className="w-full h-full text-blue-400" />,
    MySQL: <SiMysql className="w-full h-full text-orange-500" />,
    DynamoDB: <SiAmazondynamodb className="w-full h-full text-yellow-400" />,
    Cognito: <FaAws className="w-full h-full text-yellow-400" />,
  },
  frameworks: {
    "Next JS": <SiNextdotjs className="w-full h-full text-blue-400" />,
    "React JS": <SiReact className="w-full h-full text-cyan-400" />,
    "Node JS": <SiNodedotjs className="w-full h-full text-green-500" />,
    "Angular JS": <SiAngular className="w-full h-full text-red-600" />,
    "Express JS": <SiExpress className="w-full h-full text-yellow-400" />,
  },
};

export const Skills = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const SkillCard = ({ title, skills, icons }: { title: string, skills: string[], icons: any }) => (
  <CardContainer className="w-full">
    <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[400px] rounded-xl p-6 border flex flex-col items-center justify-center">
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-white mb-12 bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent absolute top-8 left-8 w-full text-left"
      >
        {title}
      </CardItem>
      
      <CardItem
        translateZ="75"
        className="w-full flex-1 flex items-center justify-center mt-16"
      >
        <div className={cn(
          "grid gap-x-12 gap-y-10 place-items-center max-w-[80%]",
          skills.length <= 4 ? "grid-cols-2" : "grid-cols-3"
        )}>
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex flex-col items-center justify-center space-y-4 group/item"
            >
              <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 group-hover/item:from-neutral-800 group-hover/item:to-neutral-700 transition-all duration-200">
                <div className="w-12 h-12 flex items-center justify-center">
                  {icons[skill]}
                </div>
              </div>
              <span className="text-sm text-center text-neutral-300 group-hover/item:text-white transition-colors duration-200 font-space-grotesk">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </CardItem>
    </CardBody>
  </CardContainer>
);

  return (
    <section className="py-20" id="skills">
      <LampContainer className="bg-black">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Skills & Technologies
        </motion.h2>
      </LampContainer>

      <div className="max-w-6xl mx-auto mt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div {...fadeInUp}>
            <SkillCard
              title="Programming Languages"
              skills={personalInfo.skills.programmingLanguages}
              icons={skillIcons.programmingLanguages}
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <SkillCard
              title="Web Technologies"
              skills={personalInfo.skills.webTechnologies}
              icons={skillIcons.webTechnologies}
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <SkillCard
              title="Databases"
              skills={personalInfo.skills.databases}
              icons={skillIcons.databases}
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <SkillCard
              title="Frameworks"
              skills={personalInfo.skills.frameworks}
              icons={skillIcons.frameworks}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 