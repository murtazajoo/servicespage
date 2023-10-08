import React from "react";
import Image from "next/image";

export default function Card({ data }) {
  return (
    <div className="flex flex-col items-center justify-center text-center group font-neue">
      <div
        className={`relative flex flex-col items-center justify-center duration-500 transform scale-50 rounded-full ease-in-expo group-hover:scale-100 h-[450px] w-[450px]  px-10`}
        style={{
          background: data.bg_color,
          color: data.text_color,
        }}
      >
        <h2 className="mb-2 card-title">{data.title}</h2>
        <h3 className="mb-8 text-2xl font-bold tracking-wide card-title group-hover:block ">
          {data.subtitle}
        </h3>
        <Image
          alt="User Experience"
          src={`/services/${data.image}`}
          width="300"
          height="300"
          className=" w-full z-10  mx-auto absolute p-10  top-[50%] left-[50%] transform translate-x-[-50%]  translate-y-[-50%] group-hover:bottom-0  group-hover:scale-[0.55]    group-hover:top-[100%] duration-700 ease-in-image"
          decoding="async"
          loading="lazy"
        />
        <p className="text-sm font-light duration-300 delay-200 opacity-0 group-hover:opacity-100 ease-in-para">
          <span>{data.description}</span>
        </p>
      </div>
      <div className="overflow-y-hidden text-center duration-300 transform h-fit group-hover:translate-y-[-100px] group-hover:opacity-0 ">
        <h2 className="mb-2 text-2xl font-bold">{data.title}</h2>
        <h3 className="tracking-wide">{data.subtitle}</h3>
      </div>
    </div>
  );
}
