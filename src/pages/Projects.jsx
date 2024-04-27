import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import useJsonDatabase from "../hooks/useJsonDatabase";
import { useOutletContext } from "react-router-dom";
import Project from "../components/Project";

const Projects = () => {
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
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {data?.projects?.title}
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data?.projects?.description}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.projects?.projects?.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center">
            <a
              className="btn btn-primary"
              href="https://github.com/JoshuaMc1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getTranslation("more_projects")}
            </a>
          </div>
        </div>
      </motion.section>
    </Suspense>
  );
};

export default Projects;
