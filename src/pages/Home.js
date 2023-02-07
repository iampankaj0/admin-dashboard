import React from "react";
import CustomContainer, {
  ChildContainer,
} from "../components/reusable/CustomContainer";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/home.scss";

const Home = () => {
  return (
    <CustomContainer>
      <Sidebar />

      <ChildContainer>
        <div className="home_content">
          <h1>
            Welcome <br />
            Pankaj yadav
          </h1>
        </div>
      </ChildContainer>
    </CustomContainer>
  );
};

export default Home;
