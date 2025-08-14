"use client";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "EcoMow Electric 2000",
      description:
        "Perfect for small to medium lawns with 40V battery power and adjustable cutting height.",
      price: 15990,
      originalPrice: 18990,
      category: "Electric",
      rating: 4.5,
      reviews: 124,
      inStock: true,
      features: ["40V Battery", "Adjustable Height", "Quiet Operation"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "PowerCut Gas Pro",
      description:
        "Heavy-duty gas mower with self-propelled system, ideal for large commercial properties.",
      price: 28990,
      originalPrice: 32990,
      category: "Gas",
      rating: 4.8,
      reviews: 89,
      inStock: true,
      features: ["Self-Propelled", "Commercial Grade", "Large Deck"],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "GreenPush Manual",
      description:
        "Classic push mower with precision cutting blades and ergonomic handle design.",
      price: 7990,
      originalPrice: 9990,
      category: "Manual",
      rating: 4.2,
      reviews: 56,
      inStock: true,
      features: ["Eco-Friendly", "No Maintenance", "Lightweight"],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "TurboMow Electric Plus",
      description:
        "Advanced electric mower with smart navigation and app control for modern homeowners.",
      price: 22990,
      originalPrice: 25990,
      category: "Electric",
      rating: 4.7,
      reviews: 203,
      inStock: false,
      features: ["Smart Navigation", "App Control", "Auto-Return"],
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "MegaCut Gas Deluxe",
      description:
        "Professional grade gas mower with variable speed control and mulching capability.",
      price: 35990,
      originalPrice: 39990,
      category: "Gas",
      rating: 4.9,
      reviews: 67,
      inStock: true,
      features: ["Variable Speed", "Mulching", "Professional Grade"],
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "EcoFriendly Manual Pro",
      description:
        "Premium manual mower with razor-sharp blades and comfortable grip handles.",
      price: 12990,
      originalPrice: 14990,
      category: "Manual",
      rating: 4.4,
      reviews: 78,
      inStock: true,
      features: ["Razor Sharp", "Comfortable Grip", "Durable Build"],
    },
  ];

  const categories = ["All", "Electric", "Gas", "Manual"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => `฿${price.toLocaleString()}`;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-lawn-yellow text-lawn-yellow" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-lawn-yellow/50 text-lawn-yellow"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-lawn-blue-dark mb-4">
            Our Products
          </h1>
          <p className="text-lg text-lawn-gray max-w-3xl mx-auto">
            Discover our complete range of professional lawn mowers designed for
            every need and budget.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-lawn-blue-dark text-white hover:bg-lawn-blue"
                    : "border-lawn-blue-dark text-lawn-blue-dark hover:bg-lawn-blue-dark hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="w-full md:w-80">
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setSearchTerm(e.target.value)
              }
              className="border-lawn-blue-dark focus:ring-lawn-blue"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={112}
                  height={112}
                  className="w-full h-64 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      Out of Stock
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-lawn-yellow text-lawn-blue-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ฿
                    {(product.originalPrice - product.price).toLocaleString()}
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-lawn-blue-dark mb-2">
                  {product.title}
                </CardTitle>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pb-2">
                <p className="text-lawn-gray mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-[hsl(var(--lawn-blue-dark))] mb-2">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[hsl(var(--lawn-gray-light))] text-lawn-blue-dark px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-lawn-blue-dark">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    {product.inStock ? (
                      <span className="text-green-600 text-sm font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-red-600 text-sm font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  className="w-full bg-[#FACC14] text-lawn-blue-dark hover:bg-lawn-yellow-dark font-semibold"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Notify When Available"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-lawn-gray">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
