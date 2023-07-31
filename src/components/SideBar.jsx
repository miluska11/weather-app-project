import { useState } from "react";
export function SideBar({handleSubmit, handleChange}) {
  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex justify-center w-full"
    >
      <input
        type="text"
        placeholder="search location"
        className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-300 bg-opacity-60 text-white placeholder-gray-200"
        onChange={handleChange}
        required
      />
      <button type="submit" className="z-10">
        <i
          className="fa fa-search text-white -ml-10 border-l my-auto z-10 cursor-pointer p-3"
          aria-hidden="true"
          type="submit"
        ></i>
      </button>
      <i
        className="fa fa-map-marker-alt my-auto cursor-pointer p-3 text-white"
        aria-hidden="true"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(myIP);
        }}
      ></i>
    </form>
  );
}

  
