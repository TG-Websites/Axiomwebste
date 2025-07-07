import React from "react";
import success from '../assets/success.png'
import test from '../assets/test_2.jpg'

function OverlappingImages() {
  return (
    <div className="flex flex-wrap pb-25 justify-center items-center gap-4 p-4 relative top-0">
      <Cards title={"Card 1"} className={`sticky top-20 bg-gray-200`} />
      <Cards title={"Card 2"} className={`sticky top-20 bg-gray-200 `} />
      <Cards title={"Card 3"} className={`sticky top-20 bg-gray-200 `} />
      <Cards title={"Card 4"} className={`sticky top-40 bg-gray-200 `} />
      <Cards title={"Card 5"} className={`sticky top-40 bg-gray-200 `} />
      <Cards title={"Card 6"} className={`sticky top-40 bg-gray-200 `} />
    </div>
  );
}

function Cards({ title, className }) {
  return (
    <div className={`${className} w-full sm:w-[420px] h-[470px] border-2 m-1 border-gray-300 rounded-lg shadow-lg p-4 relative overflow-hidden`}>
      <div className="text-sm font-semibold text-black border border-euclid inline-block px-3 py-1 rounded mb-2">
        LEGAL
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Case Study: Winning a Landmark Corporate Litigation
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        Discover how our legal team navigated complex regulations to secure a favorable judgment in a high-profile dispute.
      </p>
      <img src={test} alt="" className="rounded-md" />
    </div>
  );
}

export default OverlappingImages;