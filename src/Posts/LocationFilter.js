import React from "react"; 

const LocationFilter = ({ onLocationChoice }) => {

  return (
    <div onChange={(event) => onLocationChoice(event.target.value)}>
      <input type="radio" value="north america" name="location" /> North America
      <input type="radio" value="europe" name="location" /> Europe
      <input type="radio" value="asia" name="location" /> Asia
    </div>
  )
}

export default LocationFilter; 
