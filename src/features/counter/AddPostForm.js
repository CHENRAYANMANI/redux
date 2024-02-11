import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [contant, setContant] = useState("");
  const [userId, setUserId] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContantChange = (e) => setContant(e.target.value);
  const onUserIdChange = (e) => setUserId(e.target.value);
  const users = useSelector(selectAllUsers);
  // console.log(users);
  const dispatch = useDispatch();
  const onSavePost = () => {
    // e.preventdefault();
    if (title && contant && userId) {
      console.log("title, contant, userId", title, contant, userId);
      dispatch(postAdded(title, contant, userId));
    }
    setContant("");
    setTitle("");
    // setUserId("");
  };
  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  const canSave = Boolean(title) && Boolean(contant) && Boolean(userId);
  return (
    <div>
      <form>
        <label htmlFor="postTitle">title</label>
        <input id="postTitle" value={title} onChange={onTitleChange} />
        <label htmlFor="postUser">username</label>
        <select id="postUser" value={userId} onChange={onUserIdChange}>
          {/* <option value={userId}></option> */}
          {usersOption}
        </select>
        <label htmlFor="postcontant">postcontant</label>
        <textarea id="postcontant" value={contant} onChange={onContantChange} />
        <button type="button" onClick={onSavePost} disabled={!canSave}>
          AddPost
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
