"use client";

import Heading from "./component/heading";
import JumboTron from "./component/jumbo";
import Main from "./component/main";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Heading />
        <main>
          <JumboTron />
          <div className="relative h-screen bg-Grayish">
            <Main />
          </div>
        </main>
      </div>
    </>
  );
}
