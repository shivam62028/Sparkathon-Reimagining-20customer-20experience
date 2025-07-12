import React, { useState } from "react";
import { ArrowLeft, Search, ShoppingCart, Filter } from "lucide-react";
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

const Grocery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Fruits & Vegetables",
    "Dairy",
    "Bakery",
    "Meat & Seafood",
    "Snacks",
    "Beverages",
  ];

  const groceryItems = [
    {
      id: 1,
      name: "Organic Bananas",
      price: "₹48",
      category: "Fruits & Vegetables",
      image: "🍌",
      inStock: true,
    },
    {
      id: 2,
      name: "Fresh Milk",
      price: "₹285",
      category: "Dairy",
      image: "🥛",
      inStock: true,
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      price: "₹85",
      category: "Bakery",
      image: "🍞",
      inStock: true,
    },
    {
      id: 4,
      name: "Chicken Breast",
      price: "₹450",
      category: "Meat & Seafood",
      image: "🍗",
      inStock: true,
    },
    {
      id: 5,
      name: "Greek Yogurt",
      price: "₹415",
      category: "Dairy",
      image: "🥛",
      inStock: false,
    },
    {
      id: 6,
      name: "Almonds",
      price: "₹665",
      category: "Snacks",
      image: "🥜",
      inStock: true,
    },
    {
      id: 7,
      name: "Orange Juice",
      price: "₹165",
      category: "Beverages",
      image: "🧃",
      inStock: true,
    },
    {
      id: 8,
      name: "Fresh Spinach",
      price: "₹45",
      category: "Fruits & Vegetables",
      image: "🥬",
      inStock: true,
    },
  ];

  const filteredItems = groceryItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              <h1 className="text-xl font-semibold">Grocery Section</h1>
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
            Welcome to Grocery Section
          </h1>
          <p className="text-muted-foreground">
            Find fresh groceries, daily essentials, and more delivered to your
            doorstep
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search grocery items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
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
                <Filter className="w-4 h-4 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Grocery Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="dark:bg-gray-800/50 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">{item.image}</div>
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    {item.category}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-walmart-blue">
                    {item.price}
                  </span>
                  <Button
                    size="sm"
                    disabled={!item.inStock}
                    className="bg-walmart-blue hover:bg-blue-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {item.inStock ? "Add" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No items found matching your search criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Grocery;
