import React from "react";
import { Star, ChevronLeft, ChevronRight, UserRound } from "lucide-react";

function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: "Jons Sena",
      avatar: "/api/placeholder/40/40",
      timeAgo: "2 days ago",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      rating: 4.5,
      foodImage: "assets/images/food/FoodA.png",
    },
    {
      id: 2,
      name: "Sofia",
      avatar: "/api/placeholder/40/40",
      timeAgo: "2 days ago",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      rating: 4.0,
      foodImage: "assets/images/food/FoodB.png",
    },
    {
      id: 3,
      name: "Anandreansyah",
      avatar: "/api/placeholder/40/40",
      timeAgo: "2 days ago",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      rating: 4.5,
      foodImage: "assets/images/food/FoodA.png",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="relative w-[1460px] h-[379px] mt-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[32px] font-semibold text-[#464255]">
            Customer Review
          </h2>
          <p className="text-gray-500">Eum fuga consequuntur utadsjn et.</p>
        </div>
        <div className="flex gap-2 items-center">
          <button className="p-2 rounded-lg bg-white hover:bg-gray-100 text-[#00b074]">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-lg bg-white hover:bg-gray-100 text-[#00b074]">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex gap-[120px] overflow-x-auto h-[300px]">
        {reviews.map((review) => (
          <div key={review.id} className="flex-none w-[500px] bg-white rounded-2xl p-5 relative">
            <div className="flex justify-between gap-4">
              {/* Left side content */}
              <div className="w-[70%]">
                <div className="flex items-start gap-4 mb-4">
                  <UserRound className="w-12 h-12 bg-[#d6e5f3] text-[#007bff] rounded-full p-2"/>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.timeAgo}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{review.text}</p>

                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-gray-600">{review.rating}</span>
                </div>
              </div>

              {/* Right side image */}
              <div className="absolute right-[-100px] top-7">
                <div className="w-full rounded-xl overflow-hidden">
                  <img
                    src={review.foodImage}
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CustomerReview;
