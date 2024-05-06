import useJsonDatabase from "../hooks/useJsonDatabase";
import { useOutletContext } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import profile from "../assets/profile2.png";
import cv from "../assets/Joshua_David_Mclean_Escaleras.pdf";

const About = () => {
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
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse items-center justify-center gap-6 px-4 md:px-6 lg:flex-row-reverse lg:gap-14">
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-left lg:text-7xl">
              {data?.name}
            </h1>
            <h2 className="text-center text-2xl font-semibold lg:text-left">
              {data?.profession}
            </h2>
            <p className="max-w-[600px] text-center md:text-xl lg:text-left">
              {data?.description}
            </p>
            <div className="flex justify-center md:justify-start">
              <a className="btn btn-primary btn-wide" href={cv} download>
                {getTranslation("download")}
              </a>
            </div>
          </div>
          <img
            alt={`Profile of ${data?.name}`}
            className="mx-0 aspect-square h-[350px] w-[350px] overflow-hidden rounded-xl object-cover"
            src={profile}
          />
        </div>
      </section>
    </Suspense>
  );
};

export default About;
