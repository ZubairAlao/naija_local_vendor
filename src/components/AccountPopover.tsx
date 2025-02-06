import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "./Links";

export default function AccountPopover() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false); // Function to close the popover

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaUserCircle className="text-2xl" />
          <p className="text-sm hidden lg:block">Account</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 bg-white rounded-lg shadow-md">
        <div className="flex flex-col space-y-2">
          <Link to="/sign-in" onClick={handleClose}>
            <Button variant="outline" className="w-full">Sign In</Button>
          </Link>
          <Link to="/account" onClick={handleClose}>
            <Button variant="ghost" className="w-full">My Account</Button>
          </Link>
          <Link to="/orders" onClick={handleClose}>
            <Button variant="ghost" className="w-full">Orders</Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
