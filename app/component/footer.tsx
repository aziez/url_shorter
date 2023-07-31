import Image from "next/image";
import type { FC } from "react";

interface footerProps {}

const Footer: FC<footerProps> = ({}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 p-8 bg-center bg-Violet bg-boost">
        <h1 className="text-4xl font-bold">Boost your link today</h1>
        <button
          type="button"
          className="px-8 py-2 font-semibold text-white rounded-full bg-Cyan"
        >
          Get Started
        </button>
      </div>
      <div className="grid grid-rows-3 gap-4 p-8 md:grid-cols-3 bg-DarkViolet h-60">
        <div className="flex items-start justify-center px-4 mb-4">
          <h1 className="text-3xl font-extrabold">Shortly</h1>
        </div>
        <div className="grid grid-cols-3 gap-0 mb-8 md:gap-4 md:mb-0">
          <div className="grid grid-rows-1">
            <h2 className="mb-2 font-bold text-md">Features</h2>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="grid grid-rows-1">
            <h2 className="mb-2 font-bold text-md">Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="grid grid-rows-1">
            <h2 className="mb-2 font-bold text-md">Company</h2>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8 md:mt-0 ">
          <Image
            src={"./images/icon-facebook.svg"}
            alt="facebook"
            width={24}
            height={24}
          />
          <Image
            src={"./images/icon-twitter.svg"}
            alt="facebook"
            width={24}
            height={24}
          />
          <Image
            src={"./images/icon-pinterest.svg"}
            alt="facebook"
            width={24}
            height={24}
          />
          <Image
            src={"./images/icon-instagram.svg"}
            alt="facebook"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;

<div className="grid grid-cols-3 gap-4">
  <div className="h-10 col-auto col">
    <h2 className="mb-2 font-bold text-md">Features</h2>
    <ul>
      <li>Link Shortening</li>
      <li>Branded Links</li>
      <li>Analytics</li>
    </ul>
  </div>
  <div className="h-10 ">
    {" "}
    <h2 className="font-bold text-md ">Resources</h2>
    <ul>
      <li>Blog</li>
      <li>Developers</li>
      <li>Support</li>
    </ul>
  </div>
  <div className="h-10 ">
    {" "}
    <h2 className="font-bold text-md">Company</h2>
    <ul>
      <li>About</li>
      <li>Our Team</li>
      <li>Careers</li>
      <li>Contact</li>
    </ul>
  </div>
</div>;
