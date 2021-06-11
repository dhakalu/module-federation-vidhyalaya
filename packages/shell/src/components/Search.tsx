import React from "react";
// import {
//   div,
//   label,
//   Input,
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   Box,
// } from "@chakra-ui/react";

import { MFE_BORDER } from "../constants";

import { setSearchText } from '../store';

const Search = () => {
  
  
  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <div id="search">
        <label>Search</label>
        <input type="text" onChange={handleSearchTextChange} />
      </div>

      <div id="alcohol">
        <label>Alcohol</label>
        {/* <Slider colorScheme="pink" defaultValue={3} min={0} max={17}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider> */}
      </div>
    </div>
  );
};

export default Search;
