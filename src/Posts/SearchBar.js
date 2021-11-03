import React from "react"; 

const SearchBar = ({ searchedWord, onSearchChange}) => {
  return (
    <div>
      <input value={searchedWord} onChange={(event)=>onSearchChange(event.target.value)}/>
    </div>
  )
}

export default SearchBar; 