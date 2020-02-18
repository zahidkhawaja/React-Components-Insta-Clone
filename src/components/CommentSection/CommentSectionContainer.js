// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [data] = useState(props.comments);
  return (
    <div>

      {data.map(value => (
          <Comment comment = {value} />
      ))}

      <CommentInput />
    </div>
  );
};

export default CommentSection;
