import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  console.log("users", users);
  const author = users.find((user) => user.id === parseInt(userId));
  return <span>hi {author ? author.name : "unknown author"}</span>;
};

export default PostAuthor;
