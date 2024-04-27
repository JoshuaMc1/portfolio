import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import useJsonDatabase from "../hooks/useJsonDatabase";
import { useEffect, useState, Suspense } from "react";

const Skills = () => {
  const { lang, getTranslation } = useOutletContext();
  const { getObjectData, isLoading } = useJsonDatabase();

  const [data, setData] = useState({});

  useEffect(() => {
    if (!isLoading) {
      setData(getObjectData(lang));
    }
  }, [lang, getObjectData, isLoading]);

  return (
    <Suspense
      fallback={
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      }
    >
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        id="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {data?.skills?.title}
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data?.skills?.description}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-base-300 p-6 shadow-md">
              <h3 className="text-center text-lg font-bold tracking-tighter">
                {getTranslation("frontend")}
              </h3>
              <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-4">
                {data?.skills?.frontend.map((skill, index) => (
                  <img
                    className="w-16 md:w-20"
                    key={index}
                    src={skill.icon}
                    alt={skill.title}
                    title={skill.title}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-base-300 p-6 shadow-md">
              <h3 className="text-center text-lg font-bold tracking-tighter">
                {getTranslation("backend")}
              </h3>
              <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-4">
                {data?.skills?.backend.map((skill, index) => (
                  <img
                    className="w-16 md:w-20"
                    key={index}
                    src={skill.icon}
                    alt={skill.title}
                    title={skill.title}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-base-300 p-6 shadow-md">
              <h3 className="text-center text-lg font-bold tracking-tighter">
                Databases
              </h3>
              <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-4">
                {data?.skills?.databases.map((skill, index) => (
                  <img
                    className="w-16 md:w-20"
                    key={index}
                    src={skill.icon}
                    alt={skill.title}
                    title={skill.title}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-base-300 p-6 shadow-md">
              <h3 className="text-center text-lg font-bold tracking-tighter">
                Tools
              </h3>
              <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-4">
                {data?.skills?.tools.map((skill, index) => (
                  <img
                    className="w-16 md:w-20"
                    key={index}
                    src={skill.icon}
                    alt={skill.title}
                    title={skill.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Suspense>
  );
};

export default Skills;
