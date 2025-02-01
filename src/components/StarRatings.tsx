import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ rating }: { rating: number }) => {
  const maxStars = 5;
  return (
    <div className="flex items-center">
      {Array.from({ length: maxStars }, (_, index) => (
        index < rating ? (
          <AiFillStar key={index} className="text-secondary text-base" />
        ) : (
          <AiOutlineStar key={index} className="text-gray-400 text-base" />
        )
      ))}
    </div>
  );
};

export default StarRating;
