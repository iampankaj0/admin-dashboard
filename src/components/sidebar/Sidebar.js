import React, { useState } from "react";
import "../../styles/sidebar.scss";
import { GrClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineAlert,
  AiOutlineLogin,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const CustomNavLink = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink to={to}>
        {icon} {title}
      </NavLink>
    </li>
  );
};

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const linksArray = [
    {
      title: "Home",
      to: "/",
      icon: <AiOutlineHome />,
    },
    {
      title: "Profile",
      to: "/profile",
      icon: <AiOutlineUser />,
    },
    {
      title: "Users",
      to: "/users",
      icon: <AiOutlineUsergroupAdd />,
    },
    {
      title: "products",
      to: "/products",
      icon: <AiOutlineAlert />,
    },
    {
      title: "login",
      to: "/login",
      icon: <AiOutlineLogin />,
    },
  ];

  return (
    <>
      <button
        className="open__sidebar_btn"
        onClick={() => setOpenSidebar(true)}
      >
        <MdMenu />
      </button>
      <div className={`sidebar__main ${openSidebar ? "sidebarActive" : ""}`}>
        <div className="head__open">
          <Link to="/">Dashboard</Link>
          <button onClick={() => setOpenSidebar(false)}>
            <GrClose />
          </button>
        </div>
        <div className="links__section">
          <ul>
            {linksArray.map((item, id) => (
              <CustomNavLink key={id} icon={item.icon} to={item.to} title={item.title} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
