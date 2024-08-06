"use client";

import { FC, useEffect, useState } from "react";

interface Item {
  label: string;
  imageUrl: any;
}

interface Props {
  items: Item[];
}

const Carousel: FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="">
      <div className="">
        {items.map((item, index) => (
          <div
            key={index}
            className={`aspect-[3/2] transition-all duration-700 ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="">
              <div
                className="dark:bg-gray-10"
                aria-label={item.label}
                aria-hidden="true"
              >
                <img src={item.imageUrl} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
