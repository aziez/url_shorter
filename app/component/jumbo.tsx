/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import type { FC } from "react";

interface JumboProps {}

const JumboTron: FC<JumboProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-12 justify-center">
      <div className="w-full md:w-1/2 order-last md:order-first">
        <h1 className="mt-4 mb-8 text-black md:text-6xl text-4xl font-black leading-tight tracking-tight text-center md:text-start">
          More than just shorter links
        </h1>

        <p className="text-custom -tracking-wide text-Violet text-xl mb-8 text-center md:text-start">
          Build your brand's recognition and get detailed insight on how your
          links are performing
        </p>
        <div className="flex flex-1 md:justify-start justify-center">
          <button
            type="button"
            className="px-8 py-2 bg-Cyan text-white rounded-full text-xl font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-grey p-4 order-first justify-end">
        <Image
          src={"/images/illustration-working.svg"}
          className="images"
          alt="bg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default JumboTron;
