import React from "react"; 

const IndustryFilter = ({ onIndustryChoice }) => {

  return (
    <div onChange={(event) => onIndustryChoice(event.target.value)}>
      <input type="radio" value="apparel" name="industry" /> Apparel
      <input type="radio" value="footwear" name="industry" /> Footwear
      <input type="radio" value="streetwear" name="industry" /> Streetwear
      <input type="radio" value="luxury" name="industry" /> Luxury
      <input type="radio" value="fast fashion" name="industry" /> Fast Fashion
      <input type="radio" value="beauty" name="industry" /> Beauty
      <input type="radio" value="resale" name="industry" /> Resale
      <input type="radio" value="rental" name="industry" /> Rental
    </div>
  )
}

export default IndustryFilter; 

//industry: apparel, footwear, streetwear, luxury, fast fashion, beauty, resale, rental