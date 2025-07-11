import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  Clock,
  MapPin,
  Bell,
  User,
  Menu,
  Sparkles,
  TrendingUp,
  ChevronDown,
  Star,
  Gift,
  Truck,
  DollarSign,
  ChefHat,
  Utensils,
  Timer,
  Flame,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { ThemeToggle } from "../components/ui/theme-toggle";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  // Mock user data
  const user = {
    name: "Sarah Johnson",
    dietaryPreferences: ["Keto", "Dairy-Free"],
    pantryItems: [
      "Chicken breast",
      "Avocado",
      "Olive oil",
      "Spinach",
      "Coconut oil",
      "Almond flour",
      "Greek yogurt",
      "Eggs",
      "Bell peppers",
      "Cauliflower",
    ],
    favoriteCategories: ["Organic", "Fresh Produce", "Protein"],
  };

  // Mock search suggestions based on natural language processing
  const searchSuggestions = [
    {
      type: "recipe",
      text: "Keto chicken dinner recipes",
      category: "Recipes",
    },
    {
      type: "product",
      text: "Gluten-free pasta options",
      category: "Products",
    },
    {
      type: "dietary",
      text: "Low-sugar breakfast ideas",
      category: "Health",
    },
    {
      type: "trending",
      text: "Trending organic produce",
      category: "Trending",
    },
  ];

  // Walmart-style smart recommendations
  const smartRecommendations = [
    {
      id: 1,
      type: "running_low",
      title: "Reorder your usual",
      description: "Great Value Whole Milk, 1 Gallon",
      price: "₹285",
      badge: "Low Stock",
      badgeColor: "bg-red-100 text-red-800",
      image:
        "https://i5.walmartimages.com/asr/5fa7baeb-a5b6-44ba-b6c8-6f0ac54464e5.3d8e4b55785cc24fa3c3b3fceb5a9ee6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 2,
      type: "deal",
      title: "Rollback savings",
      description: "Tide PODS Laundry Detergent, 81 Count",
      price: "₹1,664",
      originalPrice: "₹2,415",
      badge: "Save ₹751",
      badgeColor: "bg-walmart-yellow text-black",
      image:
        "https://i5.walmartimages.com/asr/f0d8c8e4-3d8a-45a3-8b7e-9f5b3c2d1e0f.a2f4b8c3d5e6f7a8b9c0d1e2f3a4b5c6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 3,
      type: "personalized",
      title: "Perfect for keto",
      description: "Organic Avocados, 4 count",
      price: "₹415",
      badge: "For You",
      badgeColor: "bg-walmart-blue text-white",
      image:
        "https://i5.walmartimages.com/asr/c7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1a2.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 4,
      type: "trending",
      title: "Trending now",
      description: "Great Value Organic Eggs, 12 count",
      price: "₹331",
      badge: "Popular",
      badgeColor: "bg-green-100 text-green-800",
      image:
        "https://i5.walmartimages.com/asr/b8c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 5,
      type: "deal",
      title: "Special offer",
      description: "Bananas, per lb",
      price: "₹48/kg",
      badge: "Fresh",
      badgeColor: "bg-walmart-yellow text-black",
      image:
        "https://i5.walmartimages.com/asr/a9b0c1d2-e3f4-5a6b-7c8d-9e0f1a2b3c4d.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 6,
      type: "personalized",
      title: "Keto essential",
      description: "Coconut Oil, 14 oz",
      price: "₹665",
      badge: "Keto",
      badgeColor: "bg-walmart-blue text-white",
      image:
        "https://i5.walmartimages.com/asr/d0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
  ];

  // Walmart-style categories
  const categories = [
    { name: "Grocery", icon: ShoppingCart, color: "text-walmart-blue" },
    { name: "Ready Meals", icon: Utensils, color: "text-walmart-blue" },
    { name: "Restaurants", icon: MapPin, color: "text-walmart-blue" },
    { name: "Health", icon: Heart, color: "text-walmart-blue" },
    { name: "Home", icon: Sparkles, color: "text-walmart-blue" },
  ];

  const recentRecipes = [
    {
      id: 1,
      name: "Keto Chicken Tandoori Bowl",
      time: "15 min",
      rating: 4.8,
      missingIngredients: 2,
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      name: "Dairy-Free Masala Chai Smoothie",
      time: "5 min",
      rating: 4.6,
      missingIngredients: 1,
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 3,
      name: "Keto Cauliflower Biryani",
      time: "30 min",
      rating: 4.7,
      missingIngredients: 4,
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 4,
      name: "Palak Paneer (Dairy-Free)",
      time: "25 min",
      rating: 4.9,
      missingIngredients: 3,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 5,
      name: "Keto Dal Tadka",
      time: "20 min",
      rating: 4.5,
      missingIngredients: 2,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 6,
      name: "Coconut Chutney Bowl",
      time: "10 min",
      rating: 4.4,
      missingIngredients: 2,
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center",
    },
  ];

  // Ready-to-eat meals from Walmart deli/bakery
  const readyToEatMeals = [
    {
      id: 1,
      name: "Tandoori Chicken with Jeera Rice",
      description: "AI suggests this based on your keto preferences!",
      price: "₹749",
      readyTime: "Ready now",
      rating: 4.7,
      calories: "520 cal",
      badges: ["Keto-Friendly", "High Protein"],
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop&crop=center",
      type: "deli",
    },
    {
      id: 2,
      name: "Paneer Tikka Bowl",
      description: "Fresh paneer with vegetables, perfect for vegetarians",
      price: "₹682",
      readyTime: "Ready in 15 mins",
      rating: 4.8,
      calories: "410 cal",
      badges: ["Vegetarian", "High Protein"],
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop&crop=center",
      type: "deli",
    },
    {
      id: 3,
      name: "Biryani Meal Kit",
      description: "Ready-to-cook kit with pre-prepped spices and ingredients",
      price: "₹999",
      readyTime: "Cook in 25 mins",
      rating: 4.6,
      calories: "450 cal",
      badges: ["Meal Kit", "Authentic"],
      image:
        "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop&crop=center",
      type: "meal-kit",
    },
    {
      id: 4,
      name: "South Indian Thali",
      description: "Complete meal with sambar, rasam, and vegetables",
      price: "₹549",
      readyTime: "Ready now",
      rating: 4.5,
      calories: "380 cal",
      badges: ["Traditional", "Complete Meal"],
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop&crop=center",
      type: "deli",
    },
  ];

  // Restaurant recommendations based on user preferences
  const restaurantRecommendations = [
    {
      id: 1,
      name: "Bikanervala",
      cuisine: "North Indian",
      rating: 4.2,
      priceRange: "₹₹",
      distance: "0.8 km",
      specialties: ["Thali", "Chaat", "Sweets"],
      dietaryOptions: ["Vegetarian", "Jain Food"],
      estimatedTime: "25-35 mins",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=150&fit=crop&crop=center",
      partnerApp: "Zomato",
    },
    {
      id: 2,
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      rating: 4.4,
      priceRange: "₹",
      distance: "0.5 km",
      specialties: ["Dosa", "Idli", "Sambar"],
      dietaryOptions: ["Vegetarian", "Dairy-Free", "Vegan Options"],
      estimatedTime: "15-25 mins",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&h=150&fit=crop&crop=center",
      partnerApp: "Uber Eats",
    },
    {
      id: 3,
      name: "Punjabi By Nature",
      cuisine: "Punjabi",
      rating: 4.3,
      priceRange: "₹₹",
      distance: "1.2 km",
      specialties: ["Butter Chicken", "Naan", "Lassi"],
      dietaryOptions: ["Vegetarian", "Dairy-Free Options"],
      estimatedTime: "20-30 mins",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=150&fit=crop&crop=center",
      partnerApp: "Swiggy",
    },
  ];

  const handleSearch = (query: string) => {
    if (
      query.includes("recipe") ||
      query.includes("dinner") ||
      query.includes("meal")
    ) {
      navigate("/recipes");
    } else {
      console.log("Searching for:", query);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Walmart-style Header */}
      <header className="bg-walmart-blue text-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-walmart-yellow rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-walmart-blue" />
                </div>
                <span className="text-xl font-bold">Walmart</span>
              </div>

              <nav className="hidden md:flex items-center space-x-6">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="w-4 h-4 mr-2" />
                  Departments
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  Services
                </Button>
              </nav>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle
                variant="ghost"
                className="text-white hover:bg-white/10 p-2"
              />
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 p-2"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 p-2"
              >
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Cart</span>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <User className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">
                  Hi, {user.name.split(" ")[0]}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar Section */}
      <div className="bg-walmart-light-blue border-b dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative max-w-2xl mx-auto">
            <div className="flex">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search everything at Walmart online and in store"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchSuggestions(e.target.value.length > 0);
                  }}
                  className="pl-10 h-12 border-2 border-gray-200 focus:border-walmart-blue rounded-r-none"
                />
              </div>
              <Button
                className="bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90 h-12 px-6 rounded-l-none"
                onClick={() => handleSearch(searchQuery)}
              >
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Button variant="outline" size="sm" className="h-8">
                <Utensils className="w-4 h-4 mr-1" />
                Ready Meals
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <ChefHat className="w-4 h-4 mr-1" />
                Recipe Ideas
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <MapPin className="w-4 h-4 mr-1" />
                Restaurants
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Quick Reorder
              </Button>
            </div>

            {showSearchSuggestions && searchQuery && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg z-50">
                {searchSuggestions
                  .filter((s) =>
                    s.text.toLowerCase().includes(searchQuery.toLowerCase()),
                  )
                  .map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                      onClick={() => {
                        setSearchQuery(suggestion.text);
                        setShowSearchSuggestions(false);
                        handleSearch(suggestion.text);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{suggestion.text}</span>
                        <Badge variant="outline" className="text-xs">
                          {suggestion.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="flex flex-col items-center space-y-1 p-2 h-auto"
              >
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <span className="text-xs text-gray-600">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-walmart-blue to-blue-600 text-white rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-blue-100">
                Your personalized shopping assistant is ready to help save you
                time and money.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-1" />
                <p className="text-xs">Free shipping</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-1" />
                <p className="text-xs">Rollback savings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Smart Recommendations */}
          <div className="lg:col-span-3 space-y-6">
            {/* Smart Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Sparkles className="w-5 h-5 mr-2 text-walmart-blue" />
                  Recommended for you
                </CardTitle>
                <CardDescription>
                  Based on your shopping history and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {smartRecommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <Badge className={`text-xs ${rec.badgeColor}`}>
                          {rec.badge}
                        </Badge>
                      </div>

                      <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                        <img
                          src={rec.image}
                          alt={rec.description}
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling!.style.display =
                              "flex";
                          }}
                        />
                        <div
                          className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <ShoppingCart className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>

                      <h4 className="font-medium text-sm mb-1">{rec.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">
                        {rec.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-walmart-blue">
                            {rec.price}
                          </span>
                          {rec.originalPrice && (
                            <span className="text-xs text-gray-500 line-through ml-2">
                              {rec.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-walmart-blue hover:bg-walmart-blue/90"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cooked Meal Solutions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Utensils className="w-5 h-5 mr-2 text-walmart-blue" />
                  Ready-to-eat meals
                  <Badge className="ml-2 bg-walmart-yellow text-walmart-blue text-xs">
                    NEW
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Fresh cooked meals and meal kits ready for pickup or delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {readyToEatMeals.map((meal) => (
                    <div
                      key={meal.id}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="relative h-32 bg-gray-100">
                        <img
                          src={meal.image}
                          alt={meal.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling!.style.display =
                              "flex";
                          }}
                        />
                        <div
                          className="w-full h-full bg-gray-200 flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <Utensils className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className="text-xs bg-white/90 text-gray-700">
                            {meal.readyTime}
                          </Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="text-xs bg-walmart-blue text-white">
                            {meal.calories}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm mb-1 line-clamp-2">
                          {meal.name}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {meal.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-2">
                          {meal.badges.slice(0, 2).map((badge, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-walmart-blue">
                            {meal.price}
                          </span>
                          <div className="flex items-center text-xs text-gray-600">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {meal.rating}
                          </div>
                        </div>

                        <Button
                          size="sm"
                          className="w-full bg-walmart-blue hover:bg-walmart-blue/90"
                        >
                          <ShoppingCart className="w-3 h-3 mr-1" />
                          {meal.type === "meal-kit" ? "Order Kit" : "Order Now"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button
                    variant="outline"
                    className="border-walmart-blue text-walmart-blue"
                  >
                    View All Ready-to-Eat Options
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recipe Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <ChefHat className="w-5 h-5 mr-2 text-walmart-blue" />
                  Cook at home recipes
                </CardTitle>
                <CardDescription>
                  Recipes tailored to your{" "}
                  {user.dietaryPreferences.join(", ").toLowerCase()} preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentRecipes.map((recipe) => (
                    <div
                      key={recipe.id}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="h-24 bg-gray-100 flex items-center justify-center">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling!.style.display =
                              "flex";
                          }}
                        />
                        <div
                          className="w-full h-full bg-gray-200 flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <Gift className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm mb-2">
                          {recipe.name}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {recipe.time}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {recipe.rating}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-orange-600">
                            Need {recipe.missingIngredients} items
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 text-xs"
                          >
                            Cook This
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Products */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 mr-2 text-walmart-blue" />
                  Trending this week
                </CardTitle>
                <CardDescription>
                  Popular items other customers are buying
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    {
                      name: "Greek Yogurt",
                      price: "₹415",
                      image:
                        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=150&fit=crop&crop=center",
                      badge: "Protein",
                    },
                    {
                      name: "Fresh Spinach",
                      price: "₹207",
                      image:
                        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=150&fit=crop&crop=center",
                      badge: "Organic",
                    },
                    {
                      name: "Almond Butter",
                      price: "₹665",
                      image:
                        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=150&fit=crop&crop=center",
                      badge: "Keto",
                    },
                    {
                      name: "Blueberries",
                      price: "₹332",
                      image:
                        "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=200&h=150&fit=crop&crop=center",
                      badge: "Fresh",
                    },
                    {
                      name: "Olive Oil",
                      price: "₹748",
                      image:
                        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=150&fit=crop&crop=center",
                      badge: "Premium",
                    },
                    {
                      name: "Quinoa",
                      price: "₹498",
                      image:
                        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=150&fit=crop&crop=center",
                      badge: "Superfood",
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-20 object-cover rounded mb-2"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling!.style.display =
                              "flex";
                          }}
                        />
                        <div
                          className="w-full h-20 bg-gray-200 rounded mb-2 flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <ShoppingCart className="w-6 h-6 text-gray-400" />
                        </div>
                        <Badge className="absolute top-1 right-1 text-xs bg-walmart-blue text-white">
                          {product.badge}
                        </Badge>
                      </div>
                      <h4 className="font-medium text-xs mb-1 line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-sm font-bold text-walmart-blue mb-2">
                        {product.price}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full h-6 text-xs"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Restaurant Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-walmart-blue" />
                  Dining out suggestions
                  <Badge className="ml-2 bg-walmart-yellow text-walmart-blue text-xs">
                    AI POWERED
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Restaurants near you that match your{" "}
                  {user.dietaryPreferences.join(", ").toLowerCase()} preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {restaurantRecommendations.map((restaurant) => (
                    <div
                      key={restaurant.id}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="relative h-24 bg-gray-100">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling!.style.display =
                              "flex";
                          }}
                        />
                        <div
                          className="w-full h-full bg-gray-200 flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <Utensils className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className="text-xs bg-white/90 text-gray-700">
                            {restaurant.distance}
                          </Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="text-xs bg-green-600 text-white">
                            {restaurant.priceRange}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-sm">
                            {restaurant.name}
                          </h4>
                          <div className="flex items-center text-xs text-gray-600">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {restaurant.rating}
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 mb-2">
                          {restaurant.cuisine} • {restaurant.estimatedTime}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-2">
                          {restaurant.specialties
                            .slice(0, 2)
                            .map((specialty, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {specialty}
                              </Badge>
                            ))}
                        </div>

                        <div className="mb-2">
                          <p className="text-xs text-green-700 font-medium">
                            ✓ Supports {restaurant.dietaryOptions.join(", ")}
                          </p>
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-walmart-blue text-walmart-blue"
                        >
                          <Truck className="w-3 h-3 mr-1" />
                          Order via {restaurant.partnerApp}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button
                    variant="outline"
                    className="border-walmart-blue text-walmart-blue"
                  >
                    Find More Restaurants Near You
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  className="w-full justify-start bg-walmart-blue hover:bg-walmart-blue/90"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  My Lists
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  size="sm"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Store Finder
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  size="sm"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  My Items
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  size="sm"
                >
                  <Truck className="w-4 h-4 mr-2" />
                  Track Orders
                </Button>
              </CardContent>
            </Card>

            {/* My Pantry */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">My Pantry</CardTitle>
                <CardDescription className="text-xs">
                  Items you have at home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {user.pantryItems.slice(0, 6).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-1 text-sm"
                    >
                      <span>{item}</span>
                      <Badge variant="outline" className="text-xs">
                        ✓
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-3" variant="outline" size="sm">
                  Manage Pantry
                </Button>
              </CardContent>
            </Card>

            {/* Shopping Lists */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">My Shopping Lists</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Weekly Groceries",
                      items: 12,
                      lastItem: "Organic Milk",
                    },
                    {
                      name: "Keto Meal Prep",
                      items: 8,
                      lastItem: "Salmon Fillets",
                    },
                    {
                      name: "Household Items",
                      items: 5,
                      lastItem: "Paper Towels",
                    },
                  ].map((list, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 border rounded hover:bg-gray-50 cursor-pointer"
                    >
                      <div>
                        <h4 className="font-medium text-sm">{list.name}</h4>
                        <p className="text-xs text-gray-600">
                          {list.items} items • Last: {list.lastItem}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {list.items}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-3" variant="outline" size="sm">
                  + Create New List
                </Button>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card className="bg-walmart-yellow/10 border-walmart-yellow">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-walmart-blue" />
                  Today's deals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-walmart-blue">30%</p>
                    <p className="text-xs text-gray-600">Off organic produce</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-walmart-blue">₹416</p>
                    <p className="text-xs text-gray-600">
                      Off orders over ₹2,915
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-3 bg-walmart-blue hover:bg-walmart-blue/90"
                  size="sm"
                >
                  Shop Deals
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
