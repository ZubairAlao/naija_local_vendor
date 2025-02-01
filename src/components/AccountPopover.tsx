import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function AccountPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaUserCircle className="text-2xl" /> {/* Account Icon */}
          <p className="text-sm hidden lg:block">Account</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 bg-white rounded-lg shadow-md">
        <div className="flex flex-col space-y-2">
          <Button variant="outline" className="w-full">Sign In</Button>
          <Button variant="ghost" className="w-full">My Account</Button>
          <Button variant="ghost" className="w-full">Orders</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
