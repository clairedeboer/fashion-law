import React from "react"; 
import PostCard from './PostCard'; 

const PostsContainer = ({ data }) => {
  const postCards = data.map((post, i) => {
    return (
        <PostCard
        key={i}
        title={post.title.S} 
        date={post.dt.N}
        updatedAt={post.updatedAt.S}
        country={post.country.S}
        region={post.region.S}
        industry={post.industry.S}
        topic={post.topic.SS}
        year={post.Year.N}
        content={post.content.S}
        />
    );
  })
  return (
    <div>{postCards}</div>
  );
}

export default PostsContainer;