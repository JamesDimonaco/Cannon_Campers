import React from "react";
import Image from "next/image";


const News = ({data}) => {
console.log(data); 
// map through data inside attributes find createdAt and filter the data array with the most recent first as a new array called sortedData

const sortedData = data.sort((a, b) => {
    return new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt);
    });

 return (
    <div className="flex flex-wrap items-start justify-start pt-16">
      {/* Big Image */}
      <div className="w-1/2 pr-4">
        <Image
            width={300}
            height={300}
            src={sortedData[0].attributes.image.data.attributes.url}
            alt={sortedData[0].attributes.title}
            className="w-full"
        />
        <div className="mt-2 font-bold underline">{sortedData[0].attributes.title}</div>
        <div className="mt-2">{sortedData[0].attributes.description}</div>
      </div>

      {/* Small News Items */}
      <div className="flex flex-wrap w-1/2 ">
        {data.map((item, i) => {
            if (i === 0) return null;
            return(
            <div
            onClick={() => window.location.assign(item.attributes.link)}
            key={item.attributes.title}
            className="w-1/2 p-2 cursor-pointer hover:underline"
          >
            <Image
            width={150}
            height={150}
              src={item.attributes.image.data.attributes.url}
              alt="news-item"
              className="w-full transition-all duration-300 transform hover:scale-105"
            />
            <div className="mt-2 font-bold">{item.attributes.title}</div>
            <div className="mt-2">{item.attributes.description}</div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default News;
