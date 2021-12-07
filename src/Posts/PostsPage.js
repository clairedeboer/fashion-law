import React from "react"; 
import PostsContainer from './PostsContainer'; 
import SearchBar from './SearchBar'; 
import IndustryFilter from './IndustryFilter'; 

const PostsPage = ({ data, searchedWord, onSearchChange, onIndustryChoice }) => {
  
  return (
    <div>
      <SearchBar searchedWord={searchedWord} onSearchChange={onSearchChange} />
      <IndustryFilter onIndustryChoice={onIndustryChoice} />
      <PostsContainer data={data} />
    </div>
  );
}

export default PostsPage;