import React from "react"; 
import PostsContainer from './PostsContainer'; 
import SearchBar from './SearchBar'; 
import IndustryFilter from './IndustryFilter'; 
import LocationFilter from './LocationFilter'; 

const PostsPage = ({ data, searchedWord, onSearchChange, onIndustryChoice, onLocationChoice }) => {
  
  return (
    <div>
      <SearchBar searchedWord={searchedWord} onSearchChange={onSearchChange} />
      <IndustryFilter onIndustryChoice={onIndustryChoice} />
      <LocationFilter onLocationChoice={onLocationChoice} />
      <PostsContainer data={data} />
    </div>
  );
}

export default PostsPage;