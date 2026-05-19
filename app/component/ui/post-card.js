// components/PostCard.jsx


import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { FaHeart, FaEye, FaThumbsDown } from "react-icons/fa";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
         {/* User */}
      <div className="flex items-center gap-2 mb-4">
        <div className=" w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-sm font-medium text-white">
        <BiUser size={30} />
        </div>
        <span> User #{post?.userId}</span>
      </div>
      
      {/* Title */}
      <Link href={`/${post?.id}`} className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
        {post?.title}
      </Link>

      {/* Body */}
      <p className="text-gray-600 text-sm leading-7 mb-5 line-clamp-4">
        {post?.body}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {post?.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between border-t pt-4">
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          
          {/* Likes */}
          <div className="flex items-center gap-1">
            <FaHeart className="text-red-500" />
            <span>{post?.reactions?.likes}</span>
          </div>

          {/* Dislikes */}
          <div className="flex items-center gap-1">
            <FaThumbsDown className="text-gray-500" />
            <span>{post?.reactions?.dislikes}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaEye className="text-blue-500" />
            <span>{post?.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;