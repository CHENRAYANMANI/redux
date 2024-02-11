import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  console.log("posts", posts);
  const renderPosts = posts.map((post) => (
    <article id={post.id}>
      <h3>{post.title}</h3>

      <p>{post.contant}</p>
      <p>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));

  return (
    <div>
      <h2>posts:</h2>
      {renderPosts.reverse()}
    </div>
  );
};

export default PostList;
