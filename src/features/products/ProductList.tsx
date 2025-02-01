import SelectComponent from "@/components/SelectComponent";
import StarRating from "@/components/StarRatings";
import { Button } from "@/components/ui/button";
import { marketItems } from "@/constants";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const productTypes = [
    { value: "electronics", label: "Electronics" },
    { value: "household", label: "Household" },
    { value: "fashion", label: "Fashion" },
    { value: "groceries", label: "Groceries" },
    { value: "beauty", label: "Beauty" },
    { value: "sports", label: "Sports" },
    { value: "furniture", label: "Furniture" },
    { value: "toys", label: "Toys" },
    { value: "automotive", label: "Automotive" },
    { value: "books", label: "Books" },
    { value: "health", label: "Health" },
    { value: "jewelry", label: "Jewelry" },
    { value: "pet-supplies", label: "Pet Supplies" },
    { value: "office-supplies", label: "Office Supplies" }
  ]
  
  const reviewNumbers = [1, 2, 3, 4, 5];
  const reviewNumberOptions = reviewNumbers.map(number => ({
    value: number.toString(),  // Convert number to string for consistency
    label: number.toString()   // Use number as the label
  }));


  const sortOptions = [
    "Latest",
    "Popular",
    "Best Selling",
    "Top Rated",
    "Discounted"
  ];
  
  const sortOptionItems = sortOptions.map(option => ({
    value: option.toLowerCase().replace(/\s+/g, "-"), // Slug format for value
    label: option
  }));
  
const ProductList = () => {
  return (
    <div className="space-y-8">
        <div className="flex justify-start ~gap-4/8 items-center overflow-y-auto no-scrollbar">
            <SelectComponent items={productTypes} placeholder="Sort by Product" />
            <SelectComponent items={reviewNumberOptions} placeholder="Review" />
            <Button children="Price: Low to High" />
            <Button children="Price: High to Low" />
            <SelectComponent items={sortOptionItems} placeholder="Sort By" className="w-[180px] bg-lightGray md:ml-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ~gap-2/8">
            {marketItems.map(item => (
                <div key={item.title} className="bg-neutral-50 text-textPrimary relative rounded-lg">
                    <div className="absolute bg-white p-1 rounded-full right-[5%] top-[4%] w-7 h-7 cursor-pointer">
                        <AiOutlineHeart className="text-black text-xl" />
                    </div>
                    <img src={item.image} alt={item.title} className="bg-lightGray" />
                    <div className="p-4 space-y-4">
                        <div className="sm:flex justify-between items-center">
                            <h3 className="~text-xs/base font-semibold">{item.title}</h3>
                            <p className="~text-xs/base font-bold">₦{item.price.toLocaleString()}</p>
                        </div>
                        <p className="text-xs line-clamp-2 max-sm:hidden">{item.description}</p>
                        <div className="text-xs flex gap-2 items-center">
                            <StarRating rating={item.reviews} />
                            <p>({item.reviewers})</p>
                        </div>
                        <Button children="Add to Cart" className="rounded-2xl border text-xs border-textPrimary" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductList