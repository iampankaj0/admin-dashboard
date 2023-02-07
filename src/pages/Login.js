import React, { useState } from "react";
import CustomContainer, {
  ChildContainer,
} from "../components/reusable/CustomContainer";
import CustomInput from "../components/reusable/CustomInput";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/login.scss";
import { TiTick } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  console.log(loginData);

  return (
    <CustomContainer>
      <Sidebar />

      <ChildContainer>
        <div className="login_content">
          <div className="login__section">
            <CustomInput
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              className="login_input"
              icon={<AiOutlineMail />}
            />
            <CustomInput
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              className="login_input"
              icon={<RiLockPasswordLine />}
            />
            <button className="login__btn">
              <TiTick />
            </button>
          </div>
        </div>
      </ChildContainer>
    </CustomContainer>
  );
};

export default Login;
