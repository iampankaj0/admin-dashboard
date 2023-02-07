import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const HeadTitle = ({ title }) => {
  const Title = styled.section``;
  return (
    <Title>
      <MdArrowBackIosNew /> {title}
    </Title>
  );
};

export default HeadTitle;
