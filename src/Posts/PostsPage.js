import React from "react"; 
import PostsContainer from './PostsContainer'; 
import SearchBar from './SearchBar'; 

const PostsPage = ({ data, searchedWord, onSearchChange }) => {
  
  return (
    <div>
      <SearchBar searchedWord={searchedWord} onSearchChange={onSearchChange} />
      <PostsContainer data={data} />
    </div>
  );
}

export default PostsPage;