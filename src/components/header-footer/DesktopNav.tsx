import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { HeaderLink, headerLinks } from "./header-links";

type Direction = "l" | "r" | null;


const DesktopNav: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<Direction>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <nav className="hidden lg:flex justify-center items-center gap-4">
      <ul className="flex justify-center items-center space-x-4 relative">
        {headerLinks.map((link: HeaderLink, index: number) => (
          <li key={link.label} className="relative">
            <button
              onMouseEnter={() => handleSetSelected(index)}
              onClick={() => handleSetSelected(index)}
              className="flex items-center gap-1 text-textPrimary px-3 py-2 rounded-md transition-colors hover:bg-gray-400"
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "text-textPrimary"
                }
              >
                {link.label}
              </NavLink>
              {link.subcategories && <FiChevronDown className={`transition-transform ${selected === index ? "rotate-180" : ""}`} />}
            </button>
            {selected === index && link.subcategories && <DropdownContent dir={dir} subcategories={link.subcategories} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

type DropdownContentProps = {
  dir: Direction;
  subcategories: HeaderLink[];
};

const DropdownContent: React.FC<DropdownContentProps> = ({ dir, subcategories }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-0 top-[calc(100%_+_8px)] w-48 bg-gray-400 p-4 rounded-lg shadow-lg"
    >
      {subcategories.map((sub, index) => (
        <NavLink key={index} to={sub.link} className="block text-textPrimary py-1 hover:text-blue-400">
          {sub.label}
        </NavLink>
      ))}
    </motion.div>
  );
};

export default DesktopNav;
