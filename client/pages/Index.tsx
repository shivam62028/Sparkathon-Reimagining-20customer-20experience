import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  Clock,
  Zap,
  ChefHat,
  MapPin,
  Bell,
  User,
  Settings,
  Sparkles,
  TrendingUp,
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  // Mock search suggestions based on natural language processing
  const searchSuggestions = [
    {
      type: "recipe",
      text: "Keto chicken dinner recipes",
      icon: ChefHat,
      category: "Recipes",
    },
    {
      type: "product",
      text: "Gluten-free pasta options",
      icon: ShoppingCart,
      category: "Products",
    },
    {
      type: "dietary",
      text: "Low-sugar breakfast ideas",
      icon: Heart,
      category: "Health",
    },
    {
      type: "trending",
      text: "Trending organic produce",
      icon: TrendingUp,
      category: "Trending",
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
      // Simulate search results
      console.log("Searching for:", query);
    }
  };

  // Mock user data
  const user = {
    name: "Sarah Johnson",
    dietaryPreferences: ["Keto", "Dairy-Free"],
    pantryItems: ["Chicken breast", "Avocado", "Olive oil", "Spinach"],
    favoriteCategories: ["Organic", "Fresh Produce", "Protein"],
  };

  // Mock smart recommendations
  const smartRecommendations = [
    {
      id: 1,
      type: "running_low",
      title: "Looks like you're low on milk!",
      description: "Based on your usual purchasing pattern",
      product: "Great Value Whole Milk, 1 Gallon",
      price: "$3.42",
      image: "/api/placeholder/120/120",
      urgency: "high",
    },
    {
      id: 2,
      type: "deal",
      title: "Your favorite detergent is on sale!",
      description: "Save 30% on Tide Pods",
      product: "Tide PODS Laundry Detergent, 81 Count",
      price: "$19.97",
      originalPrice: "$28.97",
      image: "/api/placeholder/120/120",
      urgency: "medium",
    },
    {
      id: 3,
      type: "seasonal",
      title: "Perfect for your keto diet",
      description: "New arrivals in low-carb section",
      product: "Keto-friendly meal bundle",
      price: "$24.99",
      image: "/api/placeholder/120/120",
      urgency: "low",
    },
  ];

  // Mock recent recipes
  const recentRecipes = [
    {
      id: 1,
      name: "Keto Chicken Avocado Salad",
      time: "15 min",
      difficulty: "Easy",
      missingIngredients: 2,
      image: "/api/placeholder/200/120",
    },
    {
      id: 2,
      name: "Dairy-Free Spinach Smoothie",
      time: "5 min",
      difficulty: "Easy",
      missingIngredients: 1,
      image: "/api/placeholder/200/120",
    },
    {
      id: 3,
      name: "Low-Carb Cauliflower Rice Bowl",
      time: "20 min",
      difficulty: "Medium",
      missingIngredients: 3,
      image: "/api/placeholder/200/120",
    },
  ];

  const shoppingLists = [
    { id: 1, name: "Weekly Groceries", items: 12, updated: "2 hours ago" },
    { id: 2, name: "Keto Meal Prep", items: 8, updated: "1 day ago" },
    { id: 3, name: "Household Essentials", items: 5, updated: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  SmartCart
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {user.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-muted-foreground">
            Your personalized shopping assistant is ready to help make your day
            easier.
          </p>
        </div>

        {/* Smart Search Bar */}
        <Card className="mb-8 shadow-sm">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Try: 'gluten-free dinner ideas for kids' or 'ingredients for chicken tikka masala'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base border-2 focus:border-primary/50"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="h-8">
                <ChefHat className="w-4 h-4 mr-1" />
                Recipe Ideas
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <MapPin className="w-4 h-4 mr-1" />
                Store Navigation
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Quick Reorder
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Smart Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            {/* Smart Recommendations */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Zap className="w-5 h-5 mr-2 text-primary" />
                  Smart Recommendations
                </CardTitle>
                <CardDescription>
                  Personalized suggestions based on your shopping patterns and
                  preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {smartRecommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src={rec.image}
                        alt={rec.product}
                        className="w-12 h-12 object-cover rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling!.style.display =
                            "flex";
                        }}
                      />
                      <div
                        className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center"
                        style={{ display: "none" }}
                      >
                        <ShoppingCart className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-foreground">
                          {rec.title}
                        </h4>
                        {rec.urgency === "high" && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                        {rec.urgency === "medium" && (
                          <Badge variant="secondary" className="text-xs">
                            Sale
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {rec.description}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {rec.product}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-lg font-bold text-primary">
                          {rec.price}
                        </span>
                        {rec.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {rec.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button size="sm">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recipe Suggestions */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <ChefHat className="w-5 h-5 mr-2 text-primary" />
                  What's for Dinner?
                </CardTitle>
                <CardDescription>
                  Recipes tailored to your{" "}
                  {user.dietaryPreferences.join(", ").toLowerCase()} preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recentRecipes.map((recipe) => (
                    <div
                      key={recipe.id}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="h-24 bg-muted flex items-center justify-center">
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
                          className="w-full h-full bg-primary/10 flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <ChefHat className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm mb-2">
                          {recipe.name}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {recipe.time}
                          </span>
                          <span>{recipe.difficulty}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-warning">
                            {recipe.missingIngredients} ingredients needed
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
          </div>

          {/* Right Column - Quick Actions & Lists */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start h-12" variant="outline">
                  <ShoppingCart className="w-5 h-5 mr-3" />
                  View Shopping Lists
                </Button>
                <Button className="w-full justify-start h-12" variant="outline">
                  <MapPin className="w-5 h-5 mr-3" />
                  Plan Store Route
                </Button>
                <Button className="w-full justify-start h-12" variant="outline">
                  <Heart className="w-5 h-5 mr-3" />
                  My Favorites
                </Button>
                <Button className="w-full justify-start h-12" variant="outline">
                  <Settings className="w-5 h-5 mr-3" />
                  Preferences
                </Button>
              </CardContent>
            </Card>

            {/* My Shopping Lists */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">My Shopping Lists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {shoppingLists.map((list) => (
                  <div
                    key={list.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <h4 className="font-medium text-sm">{list.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {list.items} items • {list.updated}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {list.items}
                    </Badge>
                  </div>
                ))}
                <Button className="w-full mt-3" variant="outline">
                  + Create New List
                </Button>
              </CardContent>
            </Card>

            {/* My Pantry Preview */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">My Pantry</CardTitle>
                <CardDescription className="text-sm">
                  Items you currently have at home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {user.pantryItems.slice(0, 4).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-1"
                    >
                      <span className="text-sm">{item}</span>
                      <Badge variant="outline" className="text-xs">
                        In Stock
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-3" variant="outline" size="sm">
                  Manage Pantry
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
