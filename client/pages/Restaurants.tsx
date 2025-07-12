import React, { useState } from "react";
import { ArrowLeft, Search, Star, MapPin, Clock, Truck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { useNavigate } from "react-router-dom";

const Restaurants = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = [
    "All",
    "North Indian",
    "South Indian",
    "Chinese",
    "Italian",
    "Mexican",
    "Fast Food",
  ];

  const restaurants = [
    {
      id: 1,
      name: "Bikanervala",
      cuisine: "North Indian",
      rating: 4.2,
      priceRange: "₹₹",
      distance: "0.8 km",
      estimatedTime: "25-35 mins",
      image: "🍛",
      specialties: ["Thali", "Chaat", "Sweets"],
      dietaryOptions: ["Vegetarian", "Jain Food"],
      partnerApp: "Zomato",
    },
    {
      id: 2,
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      rating: 4.4,
      priceRange: "₹",
      distance: "0.5 km",
      estimatedTime: "15-25 mins",
      image: "🥘",
      specialties: ["Dosa", "Idli", "Sambar"],
      dietaryOptions: ["Vegetarian", "Vegan Options"],
      partnerApp: "Uber Eats",
    },
    {
      id: 3,
      name: "Punjabi By Nature",
      cuisine: "North Indian",
      rating: 4.3,
      priceRange: "₹₹",
      distance: "1.2 km",
      estimatedTime: "20-30 mins",
      image: "🍗",
      specialties: ["Butter Chicken", "Naan", "Lassi"],
      dietaryOptions: ["Vegetarian", "Non-Vegetarian"],
      partnerApp: "Swiggy",
    },
    {
      id: 4,
      name: "Domino's Pizza",
      cuisine: "Italian",
      rating: 4.1,
      priceRange: "₹₹",
      distance: "0.3 km",
      estimatedTime: "20-30 mins",
      image: "🍕",
      specialties: ["Pizza", "Garlic Bread", "Pasta"],
      dietaryOptions: ["Vegetarian", "Non-Vegetarian"],
      partnerApp: "Zomato",
    },
    {
      id: 5,
      name: "Wow! Momo",
      cuisine: "Chinese",
      rating: 4.0,
      priceRange: "₹",
      distance: "0.7 km",
      estimatedTime: "15-25 mins",
      image: "🥟",
      specialties: ["Momos", "Thukpa", "Fried Rice"],
      dietaryOptions: ["Vegetarian", "Non-Vegetarian"],
      partnerApp: "Swiggy",
    },
    {
      id: 6,
      name: "McDonald's",
      cuisine: "Fast Food",
      rating: 4.2,
      priceRange: "₹₹",
      distance: "1.5 km",
      estimatedTime: "25-35 mins",
      image: "🍔",
      specialties: ["Burgers", "Fries", "McCafe"],
      dietaryOptions: ["Vegetarian", "Non-Vegetarian"],
      partnerApp: "Uber Eats",
    },
  ];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCuisine =
      selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-walmart-blue text-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-xl font-semibold">Restaurant Partners</h1>
            </div>
            <ThemeToggle
              variant="ghost"
              className="text-white hover:bg-white/10 p-2"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Restaurant Partners Near You
          </h1>
          <p className="text-muted-foreground">
            Order from your favorite restaurants with fast delivery
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Cuisine Filter */}
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCuisine(cuisine)}
                className={selectedCuisine === cuisine ? "bg-walmart-blue" : ""}
              >
                {cuisine}
              </Button>
            ))}
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{restaurant.image}</div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {restaurant.rating}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-1">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {restaurant.cuisine} • {restaurant.priceRange}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {restaurant.distance}
                  <Clock className="w-4 h-4 ml-3 mr-1" />
                  {restaurant.estimatedTime}
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {restaurant.specialties
                    .slice(0, 2)
                    .map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                </div>

                <div className="mb-3">
                  <p className="text-xs text-green-700 dark:text-green-400">
                    ✓ {restaurant.dietaryOptions.join(", ")}
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-walmart-blue text-walmart-blue hover:bg-walmart-blue hover:text-white"
                >
                  <Truck className="w-4 h-4 mr-2" />
                  Order via {restaurant.partnerApp}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No restaurants found matching your search criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Restaurants;
