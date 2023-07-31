import Image from "next/image";
import type { FC } from "react";

interface CardProps {
  heading: string;
  content: string;
  icon: string;
}

const Card: FC<CardProps> = ({ heading, content, icon }) => {
  return (
    <section className="relative w-full">
      <div className="max-w-sm overflow-hidden bg-white rounded shadow-xl">
        <div className="absolute flex items-center justify-center w-12 h-12 p-6 mx-6 -mt-6 rounded-full bg-Violet">
          <Image
            className="absolute"
            src={icon}
            alt="Brand Recognition Icon"
            width={26}
            height={26}
          />
        </div>
        <div className="relative px-6 py-8">
          <div className="mb-2 text-xl font-bold text-Violet">{heading}</div>
          <p className="text-base text-Grayish">{content}</p>
        </div>
      </div>
    </section>
  );
};
export default Card;
