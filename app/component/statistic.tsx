import type { FC } from "react";
import Card from "./card";

interface StatisticProps {}

const Statistic: FC<StatisticProps> = ({}) => {
  return (
    <div className="relative bg-Grayish">
      <div className="flex flex-col items-center justify-center gap-3 py-4 mx-8 mt-4">
        <h1 className="text-3xl font-bold text-center text-black">
          Advanced Statistic
        </h1>
        <h3 className="text-center text-Gray text-md">
          Track how your links are performing across the web with <br /> our
          advanced statistic dashboard
        </h3>
        <div className="flex flex-col items-center justify-center gap-8 p-8 xl:flex-row md:flex-row ">
          <div className="relative z-10 row-span-2 row-start-2 mx-auto">
            <Card
              heading="Brand Recognition"
              content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
              icon="./images/icon-brand-recognition.svg"
            />
          </div>
          <div className="relative z-10 row-span-2 row-start-2 mx-auto md:mt-6">
            <Card
              heading="Detailed Records"
              content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              icon="./images/icon-detailed-records.svg"
            />
          </div>
          <div className="">
            <Card
              heading="Fully Customizable"
              content="Improve brand awareness and content discoverability with branded links, supercharging audience engagement."
              icon="./images/icon-fully-customizable.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
