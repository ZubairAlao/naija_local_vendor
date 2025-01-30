import { useState, useEffect, useRef } from "react";
import Logo from "../Logo";
import MobileNav from "./MobileNav";
import { IoClose } from "react-icons/io5";
import { MenuIcon } from "lucide-react";
import DesktopNav from "./DesktopNav";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa"; // For Account
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "../SearchBar";
import { Link } from "react-router";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); //scrolling header from y0 change from transparent

  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  

  // close the menu if click outside the box
  const closeMenu = () => {
    setToggle(false);
  };
  /*-------------------------------------------------------------------- */
    // clicking outside the mobile menu box will close the mobile menu
    const menuRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            closeMenu();
          }
        };
        // Add event listener to detect outside clicks
        document.addEventListener("mousedown", handleClickOutside);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

  // Change 50 to the scroll position where you want the header to change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manage body scroll lock on toggle
  useEffect(() => {
    if (toggle) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [toggle]);

  // Handle screen resizing to reset scroll on desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && toggle) {
        // If on desktop view, reset toggle and remove scroll lock
        setToggle(false);
        enableBodyScroll(document.body);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggle]);



  return (
    <header
      className={`fixed top-0 z-50 w-full shadow-lg transition-all duration-500 ~text-[0.87rem]/[1rem] bg-white leading-normal`}>
        <div className="bg-primary">
          <div className="flex justify-between items-center container text-white ~text-[0.6rem]/[1rem]">
            <div className="flex justify-center items-center ~gap-1/2">
              <FaPhoneAlt className="~text-md/text-lg" />
              <p>+234 8130030894</p>
            </div>
            <div><span>Grab Upto 50% off of the selected Items</span> {" | "} <Link to="/buy">Shop Now</Link></div>
          </div>
        </div>

        <div className='flex justify-between items-center container py-4'>
          <div className="flex gap-4 justify-between items-start">
            <Logo />
          </div>

            {/* mobile nav bar */}
            <div ref={menuRef} className="lg:hidden">
              <MobileNav
                toggle={toggle}
                handleToggleButton={handleToggleButton}
                closeMenu={closeMenu}
              />
            </div>
            <DesktopNav />

            <SearchBar />
            
            {/* toggle button */}
            {toggle ? (
              <button
                aria-label="Toggle navigation menu"
                className="relative z-30 cursor-pointer object-contain text-black"
                onClick={handleToggleButton}
              >
                <IoClose size={32} className="" />
              </button>
            ) : (
              <button
                aria-label="Toggle navigation menu"
                className="relative z-30 cursor-pointer object-contain text-black lg:hidden"
                onClick={handleToggleButton}
              >
                <MenuIcon className="h-fit w-[32px]" />
              </button>
            )}
            
            <div className="hidden lg:flex justify-between items-center ~gap-4/6">
              {/* Account Section */}
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-2xl" /> {/* Account Icon */}
                <p className="text-sm">Account</p>
              </div>

              {/* Cart Section */}
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="text-2xl" /> {/* Cart Icon */}
                <p className="text-sm">Cart</p>
              </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
