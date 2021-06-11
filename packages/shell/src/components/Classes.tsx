import React from "react";
// import { Box } from "@chakra-ui/react";

import SubjectCard from "./SubjectCard";

import { useSnapshot } from 'valtio';
import store from "../store";

const Taps = () => {
  const { filteredTaps, searchText } = useSnapshot(store);
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'wrap',
        gap: 36,
      }}
    >
      {filteredTaps.map((beverage) => (
        <SubjectCard
          key={[beverage.producerName, beverage.subjectName].join("")}
          beverage={beverage}
        />
      ))}
    </div>
  );
};

export default Taps;
