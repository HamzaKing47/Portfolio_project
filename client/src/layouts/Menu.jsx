import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faFileAlt, 
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(
    location.pathname.slice(1) || "home"
  );

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const menuItems = [
    { name: "home", path: "/", icon: faHome },
    { name: "about", path: "/about", icon: faUser },
    { name: "blogs", path: "/blog", icon: faFileAlt }, 
    { name: "contact", path: "/contact", icon: faEnvelope },
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => handleMenuClick(item.name)}
          className={`p-5 rounded-full flex items-center justify-center text-lg text-white shadow-lg transition-all duration-300 ease-in-out ${
            activeMenu === item.name
              ? "bg-green-600"
              : "bg-gray-700 hover:bg-green-600"
          }`}
        >
          <FontAwesomeIcon icon={item.icon} />
        </Link>
      ))}
    </div>
  );
};

export default Menu;
