"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function ProductReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<
    {
      id: string;
      user: { name: string; avatar: string };
      rating: number;
      date: string;
      text: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setReviews([
        {
          id: "1",
          user: {
            name: "Rajesh Sharma",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          rating: 5,
          date: "2023-12-15",
          text: "Excellent quality product. The taste is smooth and packaging was secure. Will definitely order again!",
        },
        {
          id: "2",
          user: {
            name: "Anita Gurung",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          rating: 4,
          date: "2023-11-28",
          text: "Good product, arrived on time. The only reason for 4 stars is that the bottle was slightly damaged during shipping.",
        },
        {
          id: "3",
          user: {
            name: "Bikash Thapa",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          rating: 5,
          date: "2023-10-05",
          text: "One of the best spirits I've tried. Highly recommended for special occasions.",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, [productId]);

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error("Rating required", {
        description: "Please select a rating before submitting your review.",
      });
      return;
    }

    if (reviewText.trim() === "") {
      toast.error("Review text required", {
        description: "Please write your review before submitting.",
      });
      return;
    }

    // In a real app, this would send to an API
    const newReview = {
      id: Date.now().toString(),
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      rating,
      date: new Date().toISOString().split("T")[0],
      text: reviewText,
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating(0);

    toast.success("Review submitted", {
      description: "Thank you for your feedback!",
    });
  };

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-4">
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Share your thoughts about this product..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
            />
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </div>

      <Separator className="my-6" />

      <div>
        <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>

        {reviews.length === 0 ? (
          <p className="text-muted-foreground">
            No reviews yet. Be the first to review this product!
          </p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={review.user.avatar}
                      alt={review.user.name}
                    />
                    <AvatarFallback>
                      {review.user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{review.user.name}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p>{review.text}</p>
                <Separator className="mt-4" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
