import "./App.css";
import React, { useState } from "react";
import * as data from "./data.json";
import PostsPage from "./Posts/PostsPage";

const App = () => {
  console.log("data", data.default);
  const dataArray = data.default;

  const [searchedWord, setSearchedWord] = useState("");
  const [filteredItems, setFilteredItems] = useState(dataArray);

  const searchChange = (event) => {
    const filteredItems = dataArray.filter((item) => {
      console.log(item.title)
      return (
        item.title.S.toLowerCase().includes(event.toLowerCase()) ||
        item.content.S.toLowerCase().includes(event.toLowerCase())
      );
    });
    setSearchedWord(event);
    setFilteredItems(filteredItems)
  };

  return (
    <div>
      <PostsPage
        data={filteredItems}
        searchedWord={searchedWord}
        onSearchChange={searchChange}
      />
    </div>
  );
};

export default App;
