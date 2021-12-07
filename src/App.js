import "./App.css";
import React, { useState } from "react";
import * as data from "./data.json";
import PostsPage from "./Posts/PostsPage";

const App = () => {
  console.log("data", data.default);
  const dataArray = data.default;

  const [searchedWord, setSearchedWord] = useState("");
  const [filteredItems, setFilteredItems] = useState(dataArray);

  const searchChange = (searchTerm) => {
    const filteredItems = dataArray.filter((item) => {
      console.log(item.title);
      return (
        item.title.S.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.S.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchedWord(searchTerm);
    setFilteredItems(filteredItems);
  };

  const filterByIndustry = (industryChoice) => {
    const postsFilteredByIndustry = dataArray.filter((post) => {
      console.log('industryChoice', industryChoice)
      return post.industry.S.toLowerCase().includes(industryChoice.toLowerCase());
    });
    setFilteredItems(postsFilteredByIndustry);
  };

  return (
    <div>
      <PostsPage
        data={filteredItems}
        searchedWord={searchedWord}
        onSearchChange={searchChange}
        onIndustryChoice={filterByIndustry}
      />
    </div>
  );
};

export default App;
