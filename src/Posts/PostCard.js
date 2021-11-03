import React from "react"; 

const PostCard = ({ title, date, updatedAt, country, region, industry, topic, year, content }) => {
  
  return (
    <div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{updatedAt}</div>
      <div>{country}</div>
      <div>{region}</div>
      <div>{industry}</div>
      <div>{topic}</div>
      <div>{year}</div>
      <div>{content}</div>
    </div>
  );
}

export default PostCard;