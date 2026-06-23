"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
};

export default function Typewriter({
  text,
}: Props) {

  const [displayedText,
    setDisplayedText] =
    useState("");

  useEffect(() => {

    let index = 0;

    const interval =
      setInterval(() => {

        setDisplayedText(
          text.slice(
            0,
            index + 1
          )
        );

        index++;

        if (
          index >= text.length
        ) {
          clearInterval(
            interval
          );
        }

      }, 15);

    return () =>
      clearInterval(interval);

  }, [text]);

  return (
    <p className="leading-relaxed text-gray-700">
      {displayedText}
    </p>
  );
}