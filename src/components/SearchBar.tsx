import { Input } from "./ui/input";
import { FiSearch } from "react-icons/fi"; // Importing search icon from react-icons

const SearchBar = () => {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />

      {/* Input Field */}
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 w-full rounded-2xl border border-gray-300 bg-white py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchBar;
