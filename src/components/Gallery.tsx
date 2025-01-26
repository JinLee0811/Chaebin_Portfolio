import React from "react";
import Image from "next/image";
import chaebin_main from "../../public/chaebin_main.webp";
import Link from "next/link";

const galleryData = [
  {
    id: 1,
    src: chaebin_main,
    alt: "Photo by Minh Pham",
    label: "VR",
    span: false,
  },
  {
    id: 2,
    src: chaebin_main,
    alt: "Photo by Magicle",
    label: "Tech",
    span: true,
  },
  {
    id: 3,
    src: chaebin_main,
    alt: "Photo by Martin Sanchez",
    label: "Dev",
    span: true,
  },
  {
    id: 4,
    src: chaebin_main,
    alt: "Photo by Lorenzo Herrera",
    label: "Retro",
    span: false,
  },
];

const Gallery = () => {
  return (
    <div className="bg-white font-notcourier dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12 mx-7 mt-7 sm:mx-8 sm:mt-8 lg:mx-12 lg:mt-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Gallery
            </h2>

            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              This is a section of some simple filler text, also known as placeholder text. It
              shares some characteristics of a real written text.
            </p>
          </div>

          <Link
            href="/chaebin-gallery"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
            More
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {galleryData.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.span ? "md:col-span-2" : ""}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
