import HeaderLogo from "@/assets/naija_vendor_market.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link
        to="/"
        className="relative z-30 cursor-pointer"
        aria-label="Home"
        title="Go to Home"
      >
        <img
          src={HeaderLogo}
          alt="Home"
          className="h-[50px] w-[50px]"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default Logo;
