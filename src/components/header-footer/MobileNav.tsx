import { headerLinks } from "./header-links";
import { NavLink } from "react-router";

interface MobileNavProps {
  toggle: boolean;
  handleToggleButton: () => void;
  closeMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggle, handleToggleButton, closeMenu }) => {
  return (
    <nav
      aria-label="Mobile Navigation"
      className={`${
        toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-50"
      } absolute right-0 top-0 z-30 mt-[74px] flex h-screen w-[100%] transform flex-col overflow-y-scroll bg-white p-6 text-black transition-all duration-500 ease-in-out lg:mt-[94px] lg:hidden`}
    >
      <ul className="pb-32">
      {headerLinks.map((link) => (
  <li key={link.label} className={`mb-2 text-base ${toggle ? "" : ""}`}>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "mobile-nav-link-active border-b font-bold hover:font-bold"
          : "mobile-nav-link border-b hover:font-bold"
      }
      to={link.link}
      onClick={handleToggleButton}
    >
      {link.label}
    </NavLink>
    {/* Render subcategories if they exist */}
    {link.subcategories && (
      <ul className="pl-4">
        {link.subcategories.map((sub) => (
          <li key={sub.label}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link-active border-b font-bold hover:font-bold"
                  : "mobile-nav-link border-b hover:font-bold"
              }
              to={sub.link}
              onClick={handleToggleButton}
            >
              {sub.label}
            </NavLink>
          </li>
        ))}
      </ul>
    )}
  </li>
))}

      </ul>
    </nav>
  );
};

export default MobileNav;
