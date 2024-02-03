import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <>
      <PostForm
        header={"Edit your post as you want..."}
        btnText={"Update Post"}
        oldPostData={post}
        method={"patch"}
      />
    </>
  );
};

export default Edit;
