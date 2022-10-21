import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ActiveLink = ({ icon, title, url }) => {
  let resolve = useResolvedPath(url);
  let match = useMatch({ path: resolve.pathname, end: true });
  return (
    <Link to={url} className={`flex gap-6 p-4 w-full relative `}>
      <p className="w-5 h-5">{icon}</p>
      <h1
        className={` flex  items-center text-sm ${match && " font-semibold "}`}
      >
        {title}{" "}
        {match && (
          <div className="w-[4px] absolute -right-3 h-[36px] bg-[#7551FF] rounded"></div>
        )}
      </h1>
    </Link>
  );
};

export default ActiveLink;
