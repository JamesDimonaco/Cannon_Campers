import React from "react";
import Image from "next/image";


const News = () => {
  const newsItems = [
    {
      title: "Lorem Ipsum",
      desc: "Dolor sit amet",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Lorem Ipsum",
      desc: "Dolor sit amet",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Lorem Ipsum",
      desc: "Dolor sit amet",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Lorem Ipsum",
      desc: "Dolor sit amet",
      image: "https://via.placeholder.com/150",
    },
    {
        title: "Lorem Ipsum",
        desc: "Dolor sit amet",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Lorem Ipsum",
        desc: "Dolor sit amet",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Lorem Ipsum",
        desc: "Dolor sit amet",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Lorem Ipsum",
        desc: "Dolor sit amet",
        image: "https://via.placeholder.com/150",
      },
  ];

  return (
    <div className="flex flex-wrap items-start justify-start pt-16">
      {/* Big Image */}
      <div className="w-1/2 pr-4">
        <img
          src="https://via.placeholder.com/300"
          alt="big-news"
          className="w-full"
        />
        <div className="mt-2 font-bold underline">Big News Title</div>
        <div className="mt-2">Big News Description</div>
      </div>

      {/* Small News Items */}
      <div className="flex flex-wrap w-1/2 ">
        {newsItems.map((item) => (
          <div
            key={item.title}
            className="w-1/2 p-2 cursor-pointer hover:underline"
          >
            <Image
            width={150}
            height={150}
              src={item.image}
              alt="news-item"
              className="w-full transition-all duration-300 transform hover:scale-105"
            />
            <div className="mt-2 font-bold">{item.title}</div>
            <div className="mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
