import React, { FC, useState } from "react";
import UrlItem from "./urlItem";
import Statistic from "./statistic";
import Footer from "./footer";

interface urlInputProps {
  originalUrl: string;
  shortedUrl: string;
}

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<urlInputProps[]>([]);
  const [errorMEssage, setErrorMessage] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(
        inputValue
      )}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            const shortedUrl = data?.result?.full_short_link;
            setItems([
              ...items,
              { originalUrl: inputValue, shortedUrl: shortedUrl },
            ]);
            setInputValue("");
            setErrorMessage("");
          } else {
            setErrorMessage("Error: unable to shorten the URL");
          }
        })
        .catch((error) => {
          setErrorMessage("Error: Unable to connect to the server");
        });
    } else {
      setErrorMessage("Please add a link");
    }
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col w-full -inset-10">
      <div className="mx-8 mb-8 rounded-md bg-image-input bg-Violet">
        <form
          className="relative flex flex-col gap-3 p-8 group md:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full px-4 py-4 leading-6 rounded-md shadow-sm focus:ring-2 focus:ring-Red focus:outline-none focus:placeholder-Red text-md text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Shorten a link here"
            placeholder="Shorten a link here..."
          />
          <button
            type="submit"
            className="px-8 py-2 font-bold text-white rounded-md bg-Cyan min-w-max"
          >
            Shorten It!
          </button>
        </form>
        {errorMEssage && (
          <p className="relative mx-8 text-red-500 -top-5 text-md">
            {errorMEssage}
          </p>
        )}
      </div>
      <div className="relative ">
        {items.map((item, index) => (
          <UrlItem
            key={index}
            originalUrl={item.originalUrl}
            shortedUrl={item.shortedUrl}
          />
        ))}
        <Statistic />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
