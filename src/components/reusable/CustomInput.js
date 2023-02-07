import React from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  margin: 10px 0;

  > svg {
    position: absolute;
    left: 15px;
    font-size: 30px;
  }

  > input {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    outline: none;
    border-radius: 40px;
    padding-left: 60px;
    font-size: 20px;
  }

  @media screen and (max-width: 575px) {
    height: 35px;
    > svg {
      font-size: 23px;
    }

    > input {
      padding-left: 43px;
      font-size: 16px;
    }
  }
`;

const CustomInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  icon,
}) => {
  return (
    <InputDiv>
      {icon}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </InputDiv>
  );
};

export default CustomInput;
