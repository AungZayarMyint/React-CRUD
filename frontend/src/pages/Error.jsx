import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="errorPage">
      <div>
        <ExclamationTriangleIcon className="icon" />
        <p>Something went wrong Bby!!!</p>
        <Link to={"/"}>
          <p className="btn err-btn">go back Home page</p>
        </Link>
      </div>
    </section>
  );
};

export default Error;
