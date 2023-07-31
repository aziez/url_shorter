import React, { FC, useState } from "react";

interface UrlItemProps {
  originalUrl: string;
  shortedUrl: string;
}

const UrlItem: FC<UrlItemProps> = ({ originalUrl, shortedUrl }) => {
  const [isCopied, setIsCopied] = useState(false);

  function copyText(textEntry: string) {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(textEntry).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    }
  }

  return (
    <div className="grid relative md:grid-cols-2 grid-rows-1 justify-center gap-4 mx-8 my-2 p-4 rounded-md bg-white">
      <div className="flex items-center">
        <p className="text-black font-semibold">{originalUrl}</p>
      </div>
      <div className="flex gap-4 flex-col md:flex-row items-center justify-end">
        <p className="text-Cyan">{shortedUrl}</p>
        <button
          type="button"
          onClick={() => copyText(shortedUrl)}
          className={`px-8 py-2 bg-Cyan text-white rounded-md font-bold min-w-max ${
            isCopied ? "bg-Violet" : ""
          }`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default UrlItem;
