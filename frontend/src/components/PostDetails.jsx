import React from "react";
import {
  CalendarDaysIcon,
  ArrowLeftCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link, useSubmit } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { description, image, title, date } = post;
  const submit = useSubmit();

  const postDeleteHandler = () => {
    const confirmStatus = window.confirm("Are U Sure To Delete This Post!");

    if (confirmStatus) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <section className="details">
      <div className="details-header">
        <div>
          <p className="details-title">{title}</p>
          <p className="date">
            <CalendarDaysIcon className="clockIcon" />
            <span>{date}</span>
          </p>
        </div>
        <Link to={"/"}>
          <ArrowLeftCircleIcon className="arrowIcon" />
        </Link>
      </div>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <div className="details-footer">
        <Link to={"edit-post"}>
          <p className="btn sm">
            <PencilSquareIcon className="pencilIcon" />
            Edit
          </p>
        </Link>
        <p className="btn sm" onClick={postDeleteHandler}>
          <TrashIcon className="trashIcon" />
          Delete
        </p>
      </div>
      <hr />
    </section>
  );
};

export default PostDetails;
