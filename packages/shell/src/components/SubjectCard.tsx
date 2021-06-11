import React from "react";
// import { SimpleGrid, Progress, Text, Button, Box } from "@chakra-ui/react";
import styled from 'styled-components';
import { Beverage } from "../types";


const Wrapper = styled.div`
  box-shadow: 1px 1px 1px 1px #ccc;
  border-radius: 8px;
  width: 300px;
  cursor: pointer;
  transition: all .5s ease;
  &:hover {
    box-shadow: 1px 20px 10px 1px #ccc;
    transform: translateY(-10px);
  }
`;


const SubjectCard = ({ beverage }: { beverage: Beverage }) => {

  return (
  <Wrapper>
    <h3 style={{display: 'flex', justifyContent: 'center'}}>{beverage.subjectName}</h3>
    <div>
      <img 
        src={beverage.logo} 
        alt={`${beverage.producerName} logo`}
        width={300}
        height={200}
        style={{borderRadius: '0 0 8px 8px'}}
      />
    </div>
    {/* <p>
      This is science subject
    </p> */}
  </Wrapper>
);
      }

export default SubjectCard;
