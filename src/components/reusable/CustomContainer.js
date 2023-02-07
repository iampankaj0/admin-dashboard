import React from "react";
import styled from "styled-components";

// PARENT CONTAINER START
const ParentContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`;
const CustomContainer = ({ children }) => {
  return <ParentContainer>{children}</ParentContainer>;
};

export default CustomContainer;
// PARENT CONTAINER ENDS

// =======================================================

// CHILD CONTAINER START
const ContainerChild = styled.section`
  padding: 15px;
  box-sizing: border-box;
  width: calc(100% - 320px);

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
export const ChildContainer = ({ children }) => {
  return <ContainerChild>{children}</ContainerChild>;
};

// CHILD CONTAINER ENDS
