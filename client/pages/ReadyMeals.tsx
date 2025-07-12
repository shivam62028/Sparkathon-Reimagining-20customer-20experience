import React, { useState } from "react";
import { ArrowLeft, Clock, Star, Utensils } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { useNavigate } from "react-router-dom";

const ReadyMeals = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Indian",
    "Chinese",
    "Continental",
    "Healthy",
    "Keto",
  ];

  const readyMeals = [
    {
      id: 1,
      name: "Tandoori Chicken with Jeera Rice",
      description: "Juicy tandoori chicken served with aromatic jeera rice",
      price: "₹749",
      readyTime: "Ready now",
      rating: 4.7,
      category: "Indian",
      image: "🍛",
      badges: ["Keto-Friendly", "High Protein"],
    },
    {
      id: 2,
      name: "Paneer Tikka Bowl",
      description: "Fresh paneer tikka with vegetables and mint chutney",
      price: "₹682",
      readyTime: "Ready in 15 mins",
      rating: 4.8,
      category: "Indian",
      image: "🥗",
      badges: ["Vegetarian", "High Protein"],
    },
    {
      id: 3,
      name: "Chicken Fried Rice",
      description: "Wok-tossed rice with chicken and vegetables",
      price: "₹565",
      readyTime: "Ready in 10 mins",
      rating: 4.5,
      category: "Chinese",
      image: "🍚",
      badges: ["Popular", "Quick"],
    },
    {
      id: 4,
      name: "Grilled Salmon Bowl",
      description: "Fresh grilled salmon with quinoa and vegetables",
      price: "₹899",
      readyTime: "Ready in 20 mins",
      rating: 4.9,
      category: "Healthy",
      image: "🐟",
      badges: ["Healthy", "Omega-3"],
    },
    {
      id: 5,
      name: "Biryani Meal Kit",
      description: "Complete biryani kit with pre-prepped ingredients",
      price: "₹999",
      readyTime: "Cook in 25 mins",
      rating: 4.6,
      category: "Indian",
      image: "🍚",
      badges: ["Meal Kit", "Authentic"],
    },
    {
      id: 6,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan and croutons",
      price: "₹449",
      readyTime: "Ready now",
      rating: 4.3,
      category: "Healthy",
      image: "🥗",
      badges: ["Fresh", "Low Carb"],
    },
  ];

  const filteredMeals = readyMeals.filter((meal) =>
    selectedCategory === "All" ? true : meal.category === selectedCategory,
  );

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
              <h1 className="text-xl font-semibold">Ready-to-Eat Meals</h1>
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
            Ready-to-Eat Meals & Meal Kits
          </h1>
          <p className="text-muted-foreground">
            Fresh cooked meals and meal kits ready for pickup or delivery
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category ? "bg-walmart-blue" : ""
                }
              >
                <Utensils className="w-4 h-4 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeals.map((meal) => (
            <Card
              key={meal.id}
              className="dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{meal.image}</div>
                  <h3 className="font-semibold text-lg mb-1">{meal.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {meal.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {meal.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-walmart-blue">
                    {meal.price}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {meal.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {meal.readyTime}
                  </div>
                </div>

                <Button className="w-full bg-walmart-blue hover:bg-blue-700">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMeals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No meals found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ReadyMeals;
