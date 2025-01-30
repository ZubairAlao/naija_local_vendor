import React, { useState, useRef } from "react";
import { NavLink } from "react-router"; // Fixed import issue
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { HeaderLink, headerLinks } from "./header-links";

const DesktopNavigation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownToggle = (newIndex: number | null) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(newIndex);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveIndex(null), 300);
  };

  return (
    <nav className="hidden lg:flex justify-center items-center gap-4" onMouseLeave={handleMouseLeave}>
      <ul className="flex justify-center items-center space-x-4 relative">
        {headerLinks.map((navItem, index) => (
          <li key={navItem.label} className="relative">
            <button
              onMouseEnter={() => handleDropdownToggle(index)}
              className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors hover:bg-gray-200"
            >
              <NavLink to={navItem.link} className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-700")}>
                {navItem.label}
              </NavLink>
              {navItem.subcategories && <FiChevronDown className={`transition-transform ${activeIndex === index ? "rotate-180" : ""}`} />}
            </button>
            <AnimatePresence>
              {activeIndex === index && navItem.subcategories && (
                <DropdownMenu subcategories={navItem.subcategories} onMouseEnter={() => handleDropdownToggle(index)} onMouseLeave={handleMouseLeave} />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
};

type DropdownMenuProps = {
  subcategories: HeaderLink[][];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ subcategories, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-0 top-[calc(100%_+_8px)] bg-white p-4 rounded-lg shadow-lg border border-gray-300 flex gap-8 w-auto min-w-fit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {subcategories.map((group, groupIndex) => (
        <div key={groupIndex} className="flex flex-col space-y-2">
          {group.map((subcategory) => (
            <NavLink key={subcategory.link} to={subcategory.link} className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              {subcategory.label}
            </NavLink>
          ))}
        </div>
      ))}
    </motion.div>
  );
};




export default DesktopNavigation;
